# Gargi Thakur — AI Automation for Small Businesses

Personal business site for Gargi Thakur: practical AI automation services (email automation, lead follow-up, smart scheduling) for small businesses, backed by a full-stack development background (React, TypeScript/Next.js, Python/Django).

Single-page React application with client-side routing, a dark/light theme toggle, and an SEO-optimized document head including `ProfessionalService` structured data.

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Build tool | [Vite](https://vite.dev) | ^8 |
| UI framework | [React](https://react.dev) | ^19 |
| Routing | [React Router](https://reactrouter.com) (`react-router-dom`) | ^7 |
| Styling | [styled-components](https://styled-components.com) | ^6 |
| Component library | [MUI](https://mui.com) (`@mui/material`, `@mui/icons-material`) | ^9 |
| HTTP client | [axios](https://axios-http.com) | ^1 |
| Static prod server (optional) | [Express](https://expressjs.com) | ^5 |
| Runtime | Node.js | 22 (see `.nvmrc`) |

> The project was migrated from Create React App / React 17 / Material-UI v4 to the stack above in June 2026.

## Prerequisites

- **Node.js 22+** — an `.nvmrc` is included, so with [nvm](https://github.com/nvm-sh/nvm) just run:

```bash
nvm use
```

- **npm 10+** (bundled with Node 22). The lockfile is `package-lock.json` — use npm, not yarn.

## Getting Started

```bash
git clone https://github.com/Gargi-Thakur/react-portfolio.git
cd react-portfolio
nvm use
npm install
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000) with hot module replacement.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` (or `npm start`) | Start the Vite dev server on port 3000 with HMR |
| `npm run build` | Production build to `dist/` (minified, hashed filenames) |
| `npm run preview` | Serve the production build locally for a final check |
| `npm run start-server` | Serve `dist/` with the Express server (`server/server.js`) — used for Node-based hosting |

## Project Structure

```
.
├── index.html              # Vite entry — SEO meta tags, Open Graph, JSON-LD
├── netlify.toml            # Netlify build config (Node 22, dist, SPA redirect)
├── vite.config.js          # Vite config (React plugin, dev port 3000)
├── public/
│   └── robots.txt
├── server/
│   └── server.js           # Express 5 static server with SPA fallback (optional)
└── src/
    ├── main.jsx            # React 19 createRoot entry, BrowserRouter, global styles
    ├── App.jsx             # Routes, theme toggle, sidebar/hamburger layout
    ├── Pages/
    │   ├── HomePage.jsx    # Hero: value proposition + CTA
    │   ├── AboutPage.jsx   # Bio + services (skills) section
    │   ├── ContactPage.jsx # Contact form (posts to Google Forms)
    │   └── ProjectsPage.js # Currently disabled (commented out)
    ├── Components/         # Navigation, SkillCard, buttons, titles, etc.
    ├── hooks/
    │   └── useDocumentMeta.js  # Per-route <title> / meta description
    ├── styles/             # createGlobalStyle theme variables, shared layouts
    ├── data/               # Project list, resume PDF
    └── img/                # Static images
```

## Architecture Notes

### Routing

Client-side routing via React Router v7 (`<Routes>` / `element` API). Three active routes: `/`, `/about`, `/contact`. The Projects page exists but is currently disabled.

When deploying to a static host, configure an SPA fallback so deep links like `/about` rewrite to `index.html`. The included Express server (`npm run start-server`) already does this.

### Styling & Theming

- All component styles are colocated `styled-components`.
- Dark/light theme is implemented with CSS custom properties: `App.jsx` swaps a `dark-theme` / `light-theme` class on `<html>`, and `src/styles/GlobalStyle.js` defines the variable palettes for each.
- MUI is used sparingly (icons, `Switch`, `IconButton`) — there is no MUI `ThemeProvider`; theming is owned by the CSS variables.

### SEO

- **Static head** (`index.html`): title, meta description, keywords, Open Graph and Twitter cards, and `ProfessionalService` JSON-LD structured data (services, location, founder profile).
- **Per-route meta**: the `useDocumentMeta` hook updates `document.title` and the meta description on each page — a zero-dependency alternative to react-helmet.
- `public/robots.txt` allows all crawlers.
- Note: this is a client-rendered SPA. Google indexes it fine, but if SEO becomes business-critical, consider prerendering or migrating to a framework with SSR/SSG (e.g. Next.js).

### Contact Form

The contact form on `/contact` submits to a **Google Form** via its `formResponse` endpoint (see the `action` URL in `ContactPage.jsx`); responses land in the linked Google Sheet. There is also a legacy axios POST to `/send` which has no backend — it is harmless but vestigial.

## Deployment

The site is deployed on **Netlify** at [gargithakur.com](https://gargithakur.com). The Netlify site is linked to this GitHub repo — every push to `main` triggers a build and deploy.

All build configuration lives in [`netlify.toml`](netlify.toml) (it overrides any settings in the Netlify UI):

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 22
- SPA redirect: all routes → `/index.html` so React Router deep links work

DNS for `gargithakur.com` is managed by Netlify (the domain is registered at GoDaddy, with nameservers delegated to Netlify).

To deploy elsewhere, any static host works with the same build command/publish directory plus an SPA rewrite rule. For Node hosting, build first and run `npm run start-server`; it serves `dist/` on `PORT` (default 3000).

## Maintenance

- **Updating dependencies**: `npm outdated` to review, `npm update` for safe minor/patch bumps. Major bumps of `react`, `react-router-dom`, `@mui/*`, or `vite` deserve a changelog read first.
- **Rebranding copy** lives in: `HomePage.jsx` (hero), `InfoSection.jsx` (bio), `SkillsSection.jsx` (service cards), plus the meta/JSON-LD in `index.html` and titles in each page's `useDocumentMeta` call.
- **Resume**: replace `src/data/janResume.pdf` and the import in `InfoSection.jsx`.

## License

Personal project — all rights reserved. Content and branding © Gargi Thakur.
