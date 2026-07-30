# Advanced Process Systems — website

Static brochureware site for Advanced Process Systems Corp (bioprocessing
calibration, validation, and equipment services). Plain HTML/CSS/JS, no build
step, no framework. Deployed via GitHub Pages.

## How to work on this site

- Every page is a standalone `.html` file at the repo root. The homepage is
  `index.html` (GitHub Pages serves this as the site root — keep this name).
- All CSS lives in `assets/styles.css`; small JS (mobile nav toggle) in
  `assets/site.js`. Images are in `assets/`.
- **Always use relative paths** for internal links and assets
  (`assets/styles.css`, `services.html`, `assets/logo.jpg`) — never
  root-absolute paths like `/styles.css`. Absolute paths break on GitHub Pages
  project sites served from a subpath.
- The site nav is duplicated in the `<nav class="nav">` block of every page. If
  you add, remove, or rename a page, update the nav on ALL pages so it stays in
  sync.
- Match the existing style: shared classes in `styles.css` (`.section`,
  `.grid.three`, `.card`, `.feature`, `.button`, `.checks`, `.banner-image`).
  Brand colors are CSS variables in `:root` (`--blue:#235ea6`, etc.). Reuse
  these rather than adding one-off inline styles.
- Keep the footer (contact details, address, copyright) identical across pages.

## Pages

- index.html — Home
- services.html — Services and Support
- calibrations.html — Advanced Calibrations
- lab-calibrations.html — Lab Calibrations
- electrical-calibration.html — Electrical Calibration
- pipette-calibration.html — Pipette Calibration
- pressure-calibration.html — Pressure Calibration
- temperature-calibration.html — Temperature Calibration
- validation.html — IQ OQ PQ Validation
- products.html — Products
- contact.html — Contact (mailto-based form)

## Deployment

- Hosted on GitHub Pages from the `main` branch, `/ (root)` folder.
- To publish a change: commit and `git push`. GitHub Pages redeploys
  automatically within ~1 minute. No build step.
- Preview locally with `python3 -m http.server` in this folder, then open
  http://localhost:8000

## Contact info (as shown on the site)

Tim Erisman — 925.258.1920 — terisman@advancedprosystems.com
PO Box 897, Orinda, CA 94563
