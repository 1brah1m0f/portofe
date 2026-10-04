# Shikhi Ibrahimov — Portfolio

Personal portfolio site built with React, Vite and Tailwind CSS v4. Bilingual (English / Azerbaijani) with dark and light themes.

## Run locally

Requires Node.js 20.19+ (or 22.12+).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content

- `src/content.js` — all visible text, in `en` and `az`
- `src/data.js` — links, dates, tags, project URLs
- `public/shikhi.png` — profile photo
- `public/Shikhi_Ibrahimov_CV.docx` — file served by the "Download CV" button
- `public/Shikhi_Ibrahimov_Recommendation_Orbit_Catapult.pdf` — linked from the Recommendation section
- Project screenshots: drop an image into `public/projects/` and set `image: '/projects/name.png'` on the project in `src/data.js` (otherwise an icon cover is shown)
- News / posts under an award: add `news: [{ source: 'LinkedIn', url: '...' }]` to that award in `src/data.js`

## Deploy

Vercel or Netlify: import the repo, framework preset **Vite**, build command `npm run build`, output directory `dist`.
