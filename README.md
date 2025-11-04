
# Richard Macharia(Updated Portfolio)

This repository is a small React + Vite starter used to build an ebook/portfolio style front-end. It includes a minimal Vite setup, React, routing, and a few UI utilities and components.

What I changed for you:

- Added an adaptive SVG favicon (`/public/favicon.svg`) with a small "r" in a slate color and transparent background. It adapts to light/dark color scheme.
- Improved `index.html` metadata (title, description, theme-color) for better mobile UX.
- Updated `package.json` name to `ebook-creator` and refreshed the README with usage instructions.

Getting started
---------------

Requirements

- Node.js (v16+ recommended)
- npm or pnpm

Install

```bash
npm install
# or
pnpm install
```

Development

```bash
npm run dev
# opens Vite dev server with HMR
```

Build

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Scripts

- `dev` — start Vite dev server
- `build` — build production assets
- `preview` — locally preview the production build
- `lint` — run ESLint across the project

Project structure (key files)

- `index.html` — app entry HTML; includes favicon and meta tags
- `src/main.jsx` — React entry point
- `src/App.jsx` — root app component
- `src/pages/` — route pages (Home, NotFound)
- `src/assets/components` — small UI components (ThemeToggle)
- `public/` — static assets served as-is (the favicon lives here)

Notes & suggestions
-------------------

- The favicon is an SVG in `public/favicon.svg`. Modern browsers support SVG favicons and the file includes a small CSS @media rule to adjust the letter color for dark mode.
- I kept changes minimal and low-risk. If you'd like, I can add a PNG fallback for older browsers, wire a `manifest.json`, or add CI checks (lint/test) next.

License

This repo currently doesn't include an explicit license file. Add `LICENSE` if you plan to publish or open-source this project.

Enjoy building!

