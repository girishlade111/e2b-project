# e2b-project — BharatUI Landing Page

A dark, modern marketing landing page for **BharatUI** — a lightweight, framework-agnostic UI component library for "Aatmanirbhar" (self-reliant) design systems.

The page features an orange-gradient hero, a features showcase, an **interactive terminal demo** (type `help` to see available commands like `components`, `install`, `docs`), a social-proof section, and a footer — all styled with Tailwind CSS.

Built by Girish Lade — https://ladestack.in

## Features

- Responsive hero section with animated gradient headline
- Interactive in-browser terminal demo of BharatUI commands
- Features showcase grid
- Social proof section
- Dark theme with orange accent palette
- E2B-compatible Vite dev-server config (host `0.0.0.0`, strict port 5173, allowed hosts for `.e2b.app`)

## Tech Stack

- React 18.2
- Vite 4.3
- Tailwind CSS 3.3
- PostCSS + Autoprefixer

## Quick Start

```bash
npm install
npm run dev      # serves on http://localhost:5173
```

## Build & Deploy

Fully static client-side app — no environment variables, no server-side code:

```bash
npm run build    # outputs to dist/
```

Deploy `dist/` to Cloudflare Pages, Netlify, GitHub Pages, or any static host.

## Project Structure

```
e2b-project/
├── index.html              # Entry HTML
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Page layout composition
│   ├── index.css           # Tailwind + global styles
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Features.jsx
│       ├── Terminal.jsx    # Interactive terminal demo
│       ├── SocialProof.jsx
│       └── Footer.jsx
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Deploy Notes

- E2B sandbox dev config is included in `vite.config.js` (host/allowedHosts); safe to ignore on other hosts.

## License

Open for personal and educational use.
