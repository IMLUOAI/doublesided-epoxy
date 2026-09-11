Product photos, named <sku-slug>-<n>.jpg, one folder per product's SKU:

- dsep-chm-01-1.jpg ... dsep-chm-01-7.jpg  (7 photos) — Charcoal Metallic Pro
- dsep-acf-02-1.jpg ... dsep-acf-02-8.jpg  (8 photos) — Amber Chip Flake
- dsep-sps-03-1.jpg ... dsep-sps-03-8.jpg  (8 photos) — Silver Pearl Solid
- dsep-cmb-04-1.jpg ... dsep-cmb-04-8.jpg  (8 photos) — Crimson Marble
- dsep-fgq-05-1.jpg ... dsep-fgq-05-5.jpg  (5 photos) — Forest Green Quartz
- dsep-vlm-06-1.jpg ... dsep-vlm-06-6.jpg  (6 photos) — Violet Metallic

Each product's carousel in index.html has exactly this many <img> slides —
if you add/remove a photo for a product, add/remove the matching numbered
<img> + <button class="dot"> pair in that product's .carousel block (and
adjust the alt text's "photo N" if you want it accurate for screen readers).

If a file goes missing or 404s, the carousel JS automatically hides that
slide and its dot — it won't show a broken-image icon.

The "-1" photo of each product is also referenced by image_link in
products-feed.csv; the rest are listed in additional_image_link.
