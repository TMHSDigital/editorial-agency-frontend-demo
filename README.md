<div align="center">

# TMHS Digital

**An editorial, brutalist-minimalism agency landing page contained in a single `index.html` file.**

No framework, no build step. The markup, styles, and scripts are self-contained, and the page renders directly in any modern browser.

<br />

[![View Live Site](https://img.shields.io/badge/View_Live_Site-B6451F?style=for-the-badge&logo=githubpages&logoColor=white)](https://tmhsdigital.github.io/editorial-agency-frontend-demo/)

<br />

[![Deploy to GitHub Pages](https://github.com/TMHSDigital/editorial-agency-frontend-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/TMHSDigital/editorial-agency-frontend-demo/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/github/license/TMHSDigital/editorial-agency-frontend-demo?color=green)](LICENSE)
![Last commit](https://img.shields.io/github/last-commit/TMHSDigital/editorial-agency-frontend-demo)
![Repo size](https://img.shields.io/github/repo-size/TMHSDigital/editorial-agency-frontend-demo)
![Top language](https://img.shields.io/github/languages/top/TMHSDigital/editorial-agency-frontend-demo)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![No dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)
![Build](https://img.shields.io/badge/build-none-success)

</div>

> [!NOTE]
> TMHS Digital is a fictional studio created for this demo. The services, metrics, testimonials, and partner names are placeholders and do not represent real claims.

> [!TIP]
> This is one of a series of single-file frontend demos by [TMHSDigital](https://github.com/TMHSDigital). For a different brief — a conversion-focused B2B SaaS landing page — see the companion demo [**syncflow-frontend-demo**](https://github.com/TMHSDigital/syncflow-frontend-demo).

## Overview

The page presents a fictional boutique design and development studio as a complete editorial site: hero, service matrix, narrative proof, process ledger, and a closing invitation. It is a self-contained reference for building a high-end, type-led landing page without a frontend toolchain.

The art direction deliberately avoids generic "AI-slop" patterns — no purple/blue gradients, no centered emoji cards, no hero-text-and-two-buttons. Instead it borrows from high-fashion lookbooks and architecture magazines:

- **Asymmetric grid.** Variable columns and generous, unexpected margins signal confidence through empty space rather than filling it.
- **Color discipline.** A strict 60/30/10 split: chalky concrete (`#e7e3da`) ground, charcoal ink (`#1c1b18`) for text and structure, and a single industrial-rust accent (`#b6451f`) reserved for interactable and focal states. Modules are separated by fine 1px borders, not filled backgrounds.
- **Typography.** Two typefaces only: Cormorant Garamond for large display headers and JetBrains Mono for technical labels, tags, and figures.
- **Tactile motion.** Hover and reveal transitions use custom `cubic-bezier` easing for a heavy, luxury feel — the "thunk" of an expensive car door.
- **Responsiveness.** Layouts collapse to a single, left-aligned column on small screens, navigation condenses to a menu, and touch targets are finger-sized. No content is hidden inside carousels.

## Screenshots

<div align="center">

<img src="docs/screenshots/hero.png" width="900" alt="TMHS Digital hero section" />

<br /><br />

<table>
  <tr>
    <td width="50%"><img src="docs/screenshots/services.png" alt="Interactive service matrix" /></td>
    <td width="50%"><img src="docs/screenshots/proof.png" alt="Editorial testimonials and figures" /></td>
  </tr>
  <tr>
    <td align="center"><sub>Service matrix</sub></td>
    <td align="center"><sub>Proof</sub></td>
  </tr>
</table>

<br />

<img src="docs/screenshots/mobile.png" width="280" alt="Responsive layout on mobile" />

<br />
<sub>Responsive layout on mobile</sub>

</div>

These images are regenerated with the capture script in [`scripts/screenshots/`](scripts/screenshots/).

## Sections

| Section | Purpose |
| --- | --- |
| Hero | States the studio's position with a typographic headline, a vertical sub-text rail, and a single framed image |
| Marquee ribbon | Establishes the disciplines at a glance |
| Service matrix | An interactive 6-cell grid built on fine border lines and clean hover fills |
| Proof | Weaves testimonials as asymmetric editorial quotes, backed by a raw-number figures band |
| Process | A four-movement ledger of how the studio works |
| Invitation | Closes with a low-friction enquiry prompt |

## Implementation

All styling lives in a single `<style>` block and all behavior in a single `<script>`. The only external resource is Google Fonts; the hero image is a local asset (`image_5bce99.png`).

The CSS uses custom properties for theming, CSS grid for the asymmetric layouts, and `clamp()` for typography and spacing that scale fluidly with the viewport. JavaScript is limited to one responsibility: the mobile menu toggle. All content remains visible and legible if JavaScript does not execute, and motion is disabled under `prefers-reduced-motion`.

## Local development

No dependencies or build step are required.

```bash
git clone https://github.com/TMHSDigital/editorial-agency-frontend-demo.git
cd editorial-agency-frontend-demo
```

Open `index.html` directly, or serve it over HTTP to match production behavior:

```bash
python -m http.server 8000   # http://localhost:8000
```

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which publishes the site to GitHub Pages.

> [!TIP]
> To configure this on a fork, open **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**, and push to `main`.

## Customization

The design tokens are defined at the top of the `<style>` block:

```css
:root {
  --concrete: #e7e3da;  /* dominant 60% — chalky off-white */
  --ink:      #1c1b18;  /* 30% — charcoal text & structure */
  --rust:     #b6451f;  /* 10% — accent, interactable only */
}
```

Updating `--rust` re-themes every accent at once. Replace the Google Fonts link and the `font-family` declarations to change the type. Swap `image_5bce99.png` at the repo root for your own photograph or render — any aspect ratio works, since the frame uses `object-fit: cover`. All copy is plain HTML and can be edited in place.

## Project structure

```
.
├── index.html                   # complete site (HTML, CSS, JS)
├── image_5bce99.png             # hero asset
├── docs/screenshots/            # README images
├── scripts/screenshots/         # headless-Chrome capture tooling
├── .github/workflows/deploy.yml # GitHub Pages deployment
├── .gitattributes               # line-ending normalization
├── .gitignore
├── LICENSE
└── README.md
```

## License

Released under the [MIT License](LICENSE). Fonts are licensed under the [SIL Open Font License](https://openfontlicense.org/).

<div align="center">
<br />

[**Live site**](https://tmhsdigital.github.io/editorial-agency-frontend-demo/) · [**Report an issue**](https://github.com/TMHSDigital/editorial-agency-frontend-demo/issues) · [**Companion demo**](https://github.com/TMHSDigital/syncflow-frontend-demo) · [**MIT License**](LICENSE)

<sub>Built by <a href="https://github.com/TMHSDigital">TMHSDigital</a> · <a href="#tmhs-digital">Back to top ↑</a></sub>

</div>
