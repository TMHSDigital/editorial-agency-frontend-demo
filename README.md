# TMHS Digital — Landing Page

A single-file, fully self-contained landing page for **TMHS Digital**, a boutique
design and development studio. No build step, no dependencies, no framework —
just `index.html`.

The design follows a high-end **editorial / brutalist-minimalism** direction
inspired by high-fashion lookbooks and architecture magazines: stark asymmetric
grids, confident whitespace, fine 1px structural borders instead of filled
backgrounds, and a single restrained accent colour.

## Design system

| Layer | Choice |
| --- | --- |
| **Type — display** | Cormorant Garamond (serif) for oversized headers |
| **Type — technical** | JetBrains Mono for labels, tags, and numbers |
| **Colour — 60%** | Chalky concrete `#e7e3da` |
| **Colour — 30%** | Charcoal ink `#1c1b18` |
| **Colour — 10%** | Industrial rust `#b6451f` (hover & focal states only) |
| **Motion** | Custom `cubic-bezier` easing for a heavy, tactile feel |

## Structure

- **Hero** — typographic headline, vertical sub-text rail, framed image
- **Service matrix** — interactive 6-cell grid built on fine border lines
- **Proof** — asymmetric editorial pull-quotes + a raw-number band
- **Process** — a four-movement ledger
- **Contact** — charcoal invitation block with an animated enquiry link

The layout is fully responsive: navigation collapses to a Menu toggle, columns
stack left-aligned, the quote grid linearises (no hidden carousels), and hover
shifts are disabled on touch.

## Assets

- `image_5bce99.png` — a generated on-brand architectural composition rendered in
  the site palette. Replace it with your own photograph or render at the repo
  root (any aspect ratio; the frame uses `object-fit: cover`).

## Running

No tooling required. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

Google Fonts load from CDN, so an internet connection gives the intended
typography; the page degrades gracefully to system fonts offline.
