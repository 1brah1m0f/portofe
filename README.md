# Şıxı İbrahimov — Portfolio

Personal portfolio site. Static, dependency-free, deploy-anywhere.

**Live:** https://1brah1m0f.github.io/portofe/

## What's inside

| Path | Purpose |
| --- | --- |
| `index.html` | The whole page. All content lives here as real HTML, so it renders even with JS disabled. |
| `assets/css/style.css` | Design tokens, layout, dark/light themes, responsive + print styles. |
| `assets/js/main.js` | Theme toggle, AZ/EN language toggle, typed hero role, scroll reveal, counters, project filter, mobile menu. |

## Features

- **Bilingual (AZ / EN)** — every translatable node carries a `data-en` attribute; the toggle swaps between it and the Azerbaijani source, and the choice is remembered in `localStorage`.
- **Dark / light theme** — CSS custom properties under `[data-theme]`, defaults to the visitor's system preference.
- **Filterable projects** — `data-tags` on each card, filtered client-side (AI/LLM, full-stack, hackathon, QA).
- **Accessible** — skip link, focus-visible rings, ARIA on interactive controls, and full `prefers-reduced-motion` support.
- **Zero build step** — no npm, no bundler. Open `index.html` and it works.

## Running locally

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Editing content

Text sits directly in `index.html`. Each translated element looks like this — the visible text is Azerbaijani, the English lives in the attribute:

```html
<h2 data-en="Projects">Layihələr</h2>
```

To add a project, copy an `<article class="proj">` block and update its `data-tags` so the filter picks it up.

## Deploying to GitHub Pages

Repository **Settings → Pages → Source: Deploy from a branch**, then pick the branch and the `/ (root)` folder.
