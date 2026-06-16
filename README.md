<div align="center">

# TMHS Digital

**A "Chromatype Brutalism" agency landing page contained in a single `index.html` file.**

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

The page presents a fictional creative-engineering and strategic-projects agency as a complete site: a typographic hero, a capabilities grid, an Objection &amp; Proof matrix, a selected-work ledger, and a closing invitation. It is a self-contained reference for building a high-end, type-led landing page without a frontend toolchain.

The art direction — **Chromatype Brutalism** — is a hybrid of raw architectural minimalism and high-end editorial typography. It deliberately rejects generic templates, centered text blocks, and curved-gradient modernism:

- **Asymmetric grid.** A narrow structural rail offsets a massive primary canvas, and each section pairs a slim utility-notes column with a wide body. Generous, unexpected padding gives major statements absolute breathing room.
- **Razor-thin structure.** Sections are separated by crisp 1px borders (`border-bottom` / `border-right`) rather than background blocks or heavy shadows.
- **High-contrast type.** Two families only: Syne for aggressively large display headers with tight line-heights, juxtaposed against hyper-precise JetBrains Mono for labels, nav, and utility text.
- **Raw industrial color.** A strict 60/30/10 split: raw-cement canvas (`#d9d5cc`), intense off-black ink (`#14130f`) for text and structure, and a single international-orange accent (`#f23c00`) reserved exclusively for active link states, focus indicators, and key touchpoints.
- **Tactile motion.** Hover states use a weighted, mechanical `transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1)` — like shifting a solid physical toggle, never bouncy.
- **Responsiveness.** The irregular grid collapses to a single, strictly left-aligned column on small screens, navigation condenses to a minimal menu, and touch targets are thumb-sized. No content is hidden inside carousels.

## Screenshots

<div align="center">

<img src="docs/screenshots/hero.png" width="900" alt="TMHS Digital hero section" />

<br /><br />

<table>
  <tr>
    <td width="50%"><img src="docs/screenshots/services.png" alt="Capabilities grid" /></td>
    <td width="50%"><img src="docs/screenshots/proof.png" alt="Objection and proof matrix" /></td>
  </tr>
  <tr>
    <td align="center"><sub>Capabilities</sub></td>
    <td align="center"><sub>Objection &amp; proof matrix</sub></td>
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
| Hero | States the studio's position with an aggressively large headline, a utility-notes column, and the framed structural-showcase image |
| Manifest strip | A running marquee of the studio's disciplines |
| Capabilities | A 6-cell grid built on fine border lines and clean mechanical hover fills |
| Objection &amp; Proof matrix | Pairs each struck-through objection with a single raw numerical proof — no stars, no logos |
| Work | A selected-engagement ledger with hover-weighted rows |
| Contact | Closes with a low-friction enquiry prompt on an inverted ink panel |

## Implementation

All styling lives in a single `<style>` block and all behavior in a single `<script>`. The only external resource is Google Fonts; the hero image is a local asset (`image_5bce99.png`).

The CSS uses custom properties for theming, CSS grid for the asymmetric layouts, and `clamp()` for typography and spacing that scale fluidly with the viewport. JavaScript is limited to one responsibility: the mobile menu toggle. All content remains visible and legible if JavaScript does not execute, and the manifest-strip animation is disabled under `prefers-reduced-motion`.

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
  --cement: #d9d5cc;  /* dominant 60% — raw cement canvas  */
  --ink:    #14130f;  /* 30% — intense off-black text       */
  --accent: #f23c00;  /* 10% — international orange, accent  */
}
```

Updating `--accent` re-themes every interactive touchpoint at once. Replace the Google Fonts link and the `font-family` declarations to change the type. Swap `image_5bce99.png` at the repo root for your own photograph or render — any aspect ratio works, since the frame uses `object-fit: cover`. All copy is plain HTML and can be edited in place.

## Project structure

```
.
├── index.html                   # complete site (HTML, CSS, JS)
├── 404.html                     # branded not-found page
├── image_5bce99.png             # hero asset
├── robots.txt                   # crawler directives
├── sitemap.xml                  # search-engine sitemap
├── docs/screenshots/            # README images
├── scripts/screenshots/         # headless-Chrome capture tooling
├── .github/workflows/deploy.yml # GitHub Pages deployment
├── .gitattributes               # line-ending normalization
├── .gitignore
├── LICENSE
└── README.md
```

## License

Released under the [MIT License](LICENSE). Type — Syne and JetBrains Mono — is licensed under the [SIL Open Font License](https://openfontlicense.org/).

<div align="center">
<br />

[**Live site**](https://tmhsdigital.github.io/editorial-agency-frontend-demo/) · [**Report an issue**](https://github.com/TMHSDigital/editorial-agency-frontend-demo/issues) · [**Companion demo**](https://github.com/TMHSDigital/syncflow-frontend-demo) · [**MIT License**](LICENSE)

<sub>Built by <a href="https://github.com/TMHSDigital">TMHSDigital</a> · <a href="#tmhs-digital">Back to top ↑</a></sub>

</div>
