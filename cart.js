// cart.js — shared shopping cart logic for the Double-Sided Epoxy site.
// Used by both index.html (Add to Cart buttons + nav badge) and
// checkout.html (cart review + checkout).
//
// Cart is stored in localStorage as a flat array of line items:
//   [{ sku, name, price, unit, image, qty }, ...]
// "price" is stored as a string of the numeric dollar amount (e.g. "15.89").

(function (window) {
  var CART_KEY = "dsep_cart_v1";

  function getCart() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
    window.dispatchEvent(new CustomEvent("cart:updated", { detail: cart }));
  }

  function addToCart(item) {
    // item: { sku, name, price, unit, image }
    var cart = getCart();
    var existing = cart.find(function (c) { return c.sku === item.sku; });
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        sku: item.sku,
        name: item.name,
        price: item.price,
        unit: item.unit || "",
        image: item.image || "",
        qty: 1
      });
    }
    saveCart(cart);
  }

  function removeFromCart(sku) {
    var cart = getCart().filter(function (c) { return c.sku !== sku; });
    saveCart(cart);
  }

  function setQty(sku, qty) {
    qty = parseInt(qty, 10);
    var cart = getCart();
    var item = cart.find(function (c) { return c.sku === sku; });
    if (!item) return;
    if (!qty || qty < 1) {
      removeFromCart(sku);
      return;
    }
    item.qty = qty;
    saveCart(cart);
  }

  function clearCart() {
    saveCart([]);
  }

  function cartCount() {
    return getCart().reduce(function (sum, c) { return sum + c.qty; }, 0);
  }

  function cartTotal() {
    return getCart().reduce(function (sum, c) {
      return sum + (parseFloat(c.price) || 0) * c.qty;
    }, 0);
  }

  function updateCartBadge() {
    var count = cartCount();
    document.querySelectorAll("[data-cart-count]").forEach(function (el) {
      el.textContent = count;
      el.setAttribute("data-empty", count > 0 ? "false" : "true");
    });
  }

  document.addEventListener("DOMContentLoaded", updateCartBadge);

  window.DSEPCart = {
    getCart: getCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    setQty: setQty,
    clearCart: clearCart,
    cartCount: cartCount,
    cartTotal: cartTotal,
    updateCartBadge: updateCartBadge
  };
})(window);
