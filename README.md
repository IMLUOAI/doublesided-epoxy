# Double-Sided Epoxy Flooring — Marketing Website

Official website for **Double-Sided ISCM LLC** — premium epoxy flooring services and DIY coating kits, serving customers nationwide across the USA.

## Live site: https://doublesidedepoxy.wareplatform.com

## What's in this repo

| File         | What it does                                                                                                                                               |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index.html` | The full marketing site. Single self-contained HTML file with inline CSS, JS, and SVG icons. No build step.                                                |
| `admin.html` | Password-gated admin panel. Lets you edit contact info, social links, pricing, FAQ, and testimonials, then download a refreshed `index.html` to re-upload. |
| `README.md`  | This file.                                                                                                                                                 |

That's it — no `node_modules`, no build pipeline, no framework. Open `index.html` in any browser and the site runs.

---

## Sections on the site

1. **Hero** — headline, intro copy, hero stats, decorative trowel illustration
2. **Services** — six service categories with line-art icons
3. **About** — credentials and selling points
4. **Pricing** — three installation tiers (standard / decorative flake / metallic)
5. **Payment** — accepted methods (cards, ACH, check, 0% APR financing) + terms
6. **Products** — six epoxy kits with color swatches, prices, weights, coverage
7. **Gallery** — finished-project showcase
8. **Testimonials** — three customer reviews
9. **FAQ** — click-to-expand accordion with six common questions
10. **Contact** — quote form + business hours + service area + social links

---

## Editing the site

### Option 1 — through the admin panel (no code required)

1. Open `admin.html` in your browser (locally or via the deployed site at `/admin.html`).
2. Enter the password — default is `admin123`. To change it, edit this line near the top of `admin.html`:
   ```js
   var ADMIN_PASSWORD = "admin123";
   ```
3. Edit fields in the Contact / Social / Pricing / FAQ / Testimonials tabs. Drafts auto-save to your browser as you type.
4. Click **Generate Updated Site** — a fresh `index.html` downloads.
5. Replace the `index.html` in this repo with the downloaded file, then commit and push.

**Note:** the admin password is client-side only. Anyone reading the page source can find it. It's a casual lock, not real security. Keep `admin.html` out of search results (the `noindex` meta tag is already there) and don't paste the URL publicly.

### Option 2 — edit `index.html` directly

For changes outside the admin scope (hero copy, services, gallery, etc.), open `index.html` in any text editor. Sections are clearly labelled with HTML comments like `<!-- ========== HERO ========== -->`.

---

## Contact form

The contact form is wired to [Formspree](https://formspree.io). **Until you connect a real endpoint, the form will show a "not configured" message instead of sending.**

To activate:

1. Sign up at [formspree.io](https://formspree.io) (free tier handles 50 submissions/month).
2. Create a new form and copy the endpoint URL (looks like `https://formspree.io/f/xyzabc123`).
3. In `index.html`, search for `YOUR_FORMSPREE_ID` and replace that placeholder URL with yours.
4. Commit, push, redeploy. Quote requests will arrive in the email you registered.

Web3Forms (web3forms.com) is a compatible drop-in alternative if you prefer.

---

## Hosting on GitHub Pages

This repo is ready to deploy as a static site:

1. Push your latest changes to `main`.
2. On github.com, go to **Settings → Pages**.
3. Under **Source**, select `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
4. Wait 30–60 seconds. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

This repo already includes a `CNAME` file pointing to `doublesidedepoxy.wareplatform.com`, GitHub Pages will pick it up automatically once Pages is enabled. Two things still need to happen outside this repo:

1. **On GitHub:** Settings → Pages → confirm the custom domain shows `doublesidedepoxy.wareplatform.com` and enable "Enforce HTTPS" once it's available.
2. **On your DNS provider for `wareplatform.com`:** add a `CNAME` record — host `doublesidedepoxy`, value `imluoai.github.io.` (adjust the GitHub org/user if different). Propagation can take up to a few hours.

---

## Design system

- **Type:** Inter (loaded from Google Fonts) — weights 400–900
- **Colors:**
  - Primary text: `#1f1f1f` (charcoal)
  - Accent: `#dfff5a` (lime-yellow)
  - Body background: `#dcdcdc` (light gray)
  - Card background: `#e8e8e8`
- **Iconography:** custom line-art SVGs, stroke-width 1.3, sized at ~120px in service cards
- **Layout:** 12-column responsive grid, breakpoint at 820px

---

## Tech stack

- Plain HTML5 / CSS / vanilla JavaScript
- Inline SVG for all icons and the logo
- Google Fonts for typography
- Formspree (external service) for form submissions

No dependencies, no build step, no runtime.

---

## Contact

For business inquiries: see the contact section on the live site or reach out directly:

- Phone: 469-534-7986
- Email: doublesidediscm.usa@outlook.com

---

## License

© Double-Sided ISCM LLC. All rights reserved.
