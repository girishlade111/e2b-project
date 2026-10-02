# e2b-project — BharatUI Landing Page

A dark, modern landing page for **BharatUI** ("components, not complexity") — an Aatmanirbhar-inspired UI library pitch. Built with React + Vite + Tailwind CSS.

Live demo: https://e2b-project.pages.dev

## Features

- Dark-theme hero landing page with header, hero, features, terminal, social proof, and footer sections
- Responsive Tailwind CSS layout
- Zero backend — pure static SPA

## Tech Stack

- React 18 (JSX)
- Vite 4
- Tailwind CSS + PostCSS + Autoprefixer

## Quick Start

```bash
git clone https://github.com/girishlade111/e2b-project.git
cd e2b-project
npm install --legacy-peer-deps
npm run dev       # http://localhost:5173
```

## Project Structure

```
e2b-project/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Features.jsx
        ├── Terminal.jsx
        ├── SocialProof.jsx
        └── Footer.jsx
```

## Deploy

Static SPA — build and host `dist/` anywhere:

```bash
npm run build
```

- **Cloudflare Pages** (current) — project `e2b-project`, build command `npm run build`, output `dist/`
- Netlify / Vercel / GitHub Pages — same build, zero extra config

## License

MIT — free to use and adapt.

---

Built by [Girish Lade](https://ladestack.in)
