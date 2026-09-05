# gargithakur.com

Engineering spec for the public site at [gargithakur.com](https://gargithakur.com).

This document is the source of truth for **what the site sells**, **which surfaces exist**, and **how the codebase is operated**. Product copy lives in the pages; operational constants live in [`src/config.js`](src/config.js). If those disagree, `config.js` and this spec win — update the page.

| | |
|---|---|
| **Status** | Production. Booking is gated (`SITE_MODE = 'waitlist'`). |
| **Owner** | Gargi Thakur |
| **Runtime** | Node.js 22, Vite 8, React 19 |
| **Host** | Netlify → `gargithakur.com` |

---

## 1. Overview

Single-page React app with client-side routing. Production builds prerender each public route to static HTML so crawlers receive full content, titles, canonicals, and JSON-LD.

The site is a sales funnel for a solo AI-consulting practice, not a general portfolio. Proof of build skill (NovaFit) supports the offer; it is not the offer.

### 1.1 Goals

- Convert a small-business owner into an assessment waitlist signup (or a booked discovery call once live).
- Make the offer internally consistent: one price, one guarantee, one public CTA.
- Rank for local intent (`/ai-automation-vancouver`) without contradicting the rest of the funnel.

### 1.2 Non-goals

- Payment collection on this origin. No checkout, no card fields.
- Hosting the NovaFit dashboard. That lives at `demo1.gargithakur.com`.
- A CMS. Copy is compiled in.
- Server-side rendering at request time. Prerender is build-time only.

---

## 2. Product specification

### 2.1 Offer stack

Three products, in this order. The assessment is the only public on-ramp.

| Product | Price | What it is | Public? |
|---|---|---|---|
| **AI Tools Assessment** | `$999` (`ASSESSMENT_PRICE`) | 45-min discovery → custom report of 3–7 tools (top-3, priority matrix, 4-day quick-start, dollar impact) → 30-min review. One week, start to finish. | Yes. Front door. |
| **Implementation** | Expansion menu, `$1K–$10K+` | Fixed-price builds after the assessment: Automation Build, Process Redesign, Custom Workflows, Knowledge Systems, Full Implementation. | Yes. `/implementation`. No buy button; CTA still goes to the assessment. |
| **AI Concierge** | `$1,200/month` (`CONCIERGE_PRICE`) | Done-with-you retainer: two 45-min calls / month, Slack between sessions, 12 business-hour response. Claude co-work, projects per function, skills, ongoing strategy. Form before call 1; Drive recordings + one-pager after each call. | Yes, described on `/implementation`. Not a separate route. |

**Guarantee** (`GUARANTEE_TEXT`): 5+ hours/week found, or a full refund. Measured on the review call. Do not rephrase this as “you get the hours back during the assessment week.”

### 2.2 Invariants

These are load-bearing. A PR that violates them is incorrect even if it looks fine.

1. **One public CTA.** All primary buttons use `AssessmentCTA` (or the header equivalent). Label is `Join the waitlist` in waitlist mode and `Book your AI Tools Assessment` in live mode.
2. **One public booking URL.** Only `BOOKING_URL` may appear in the UI. `REVIEW_CALL_URL` and `FREE_AUDIT_URL` are outreach-only. They MUST NOT be linked, rendered, or prerendered.
3. **Assessment is the on-ramp.** Implementation and concierge are sold after the assessment. Do not add a “buy implementation” path that skips it.
4. **No invented commercial terms.** Do not add credits, discounts, or floors (e.g. “$999 credited toward $2,500+”) unless `config.js` and this spec are updated first.
5. **Waitlist vs live is one flag.** Flip `SITE_MODE` in `src/config.js`. Do not hardcode “Book” on a page while the rest of the site is waitlisted.

### 2.3 Site mode

```js
// src/config.js
export const SITE_MODE = 'waitlist'; // | 'live'
```

| Mode | Primary CTA | `#book` on `/assessment` |
|---|---|---|
| `waitlist` | Navigates to `/assessment` (scrolls to `#book` when already there) | Waitlist form → Google Form |
| `live` | Opens `BOOKING_URL` (Cal.com discovery) in a new tab | Same Cal.com link |

Launch checklist: set `SITE_MODE` to `'live'`, confirm `BOOKING_URL`, rebuild, spot-check Home / Assessment / Implementation / Vancouver CTAs.

---

## 3. Surface specification

### 3.1 Routes

| Path | Page | Role |
|---|---|---|
| `/` | `HomePage` | Offer headline, 4-phase how-it-works, waitlist/book CTA |
| `/assessment` | `AssessmentPage` | Full assessment spec, FAQ, `#book` target |
| `/implementation` | `ServicesPage` | Expansion menu + concierge |
| `/proof` | `DemoPage` | NovaFit case study |
| `/about` | `AboutPage` | Bio, skills, NovaFit showcase |
| `/ai-automation-vancouver` | `AiAutomationVancouverPage` | Local SEO landing + FAQ JSON-LD |
| `/contact` | `ContactPage` | General inquiry form |
| `/privacy` | `PrivacyPage` | Privacy policy |

### 3.2 Redirects

Keep React Router and Netlify in sync.

| From | To | Mechanism |
|---|---|---|
| `/services` | `/implementation` | `<Navigate replace>` + Netlify 301 |
| `/demo` | `/proof` | `<Navigate replace>` + Netlify 301 |
| `/*` (unknown) | `/index.html` | Netlify 200 SPA fallback |

Add any new public path to all four of: `App.jsx`, `scripts/prerender.mjs`, `public/sitemap.xml`, and `netlify.toml` if it replaces a legacy URL.

### 3.3 Navigation

Header: Home, Assessment, Implementation, Proof, About, Contact, plus the mode-aware CTA.

Footer: Vancouver landing, Assessment, Implementation, Proof, Contact, Privacy.

`/ai-automation-vancouver` is intentionally footer-only (SEO page, not a primary nav item).

---

## 4. System design

```
Browser ──► Vite SPA (React Router)
              │
              ├─ Pages          route-level screens
              ├─ Components     shared UI (CTA, booking block, cards)
              ├─ config.js      URLs, prices, SITE_MODE
              ├─ hooks          document meta, JSON-LD
              └─ styles         CSS variables (light/dark)

npm run build
  Vite ──► dist/index.html + assets
  Playwright Chromium ──► dist/<route>/index.html  (prerender)
Netlify publishes dist/
```

### 4.1 Stack

| Layer | Choice | Notes |
|---|---|---|
| Bundler | Vite 8 | Dev server port **3000** |
| UI | React 19 | `createRoot` in `src/main.jsx` |
| Routing | React Router 7 | `BrowserRouter` |
| CSS | styled-components 6 | Colocated styles; no CSS modules |
| Icons | Local SVG set (`src/Components/Icons.jsx`) | 24px `currentColor` icons; no icon library |
| Prerender | Playwright Chromium | Invoked after `vite build` |
| Node | 22 (`.nvmrc`, `engines`, Netlify `NODE_VERSION`) | |

Package manager is **npm**. `package-lock.json` is canonical. Do not introduce yarn/pnpm lockfiles.

### 4.2 Theming

`src/utils/theme.js` owns theme state.

- Default: **auto** — light 07:00–19:00 local, dark otherwise.
- Header toggle writes **manual** light/dark to `localStorage`.
- `App.jsx` sets `class="light-theme|dark-theme"` on `<html>`. Palettes are CSS custom properties in `src/styles/GlobalStyle.js`.
- An inline script in `index.html` applies the class before paint to avoid a flash.

### 4.3 SEO and prerender contract

Each route calls `useDocumentMeta(title, description)`, which:

1. Sets `document.title`, description, OG/Twitter tags, and canonical (`SITE_URL + pathname`).
2. Sets `html[data-prerender-ready="true"]` so the prerender script can snapshot.

`scripts/prerender.mjs` (runs as part of `npm run build`):

1. Serves `dist/` via `vite preview` on `127.0.0.1:4173`.
2. Loads each route in Chromium, waits for `data-prerender-ready`.
3. Asserts title, canonical, a required body substring, minimum `#root` length, and optional JSON-LD `@type`s.
4. Writes `dist/<path>/index.html` (and overwrites `dist/index.html` for `/`).
5. Rewrites preview origins to `https://gargithakur.com`.
6. **Fails the build** if any assertion fails.

When you change a page title or the distinctive body string, update the matching entry in `scripts/prerender.mjs` in the same PR or the Netlify build will go red.

Static head in `index.html` (title, OG, `ProfessionalService` JSON-LD) is the `/` default. Route pages overwrite it at runtime and in the prerendered files.

`/ai-automation-vancouver` additionally injects `Service` + `FAQPage` JSON-LD via `useStructuredData`.

---

## 5. Configuration

All public constants: [`src/config.js`](src/config.js).

| Constant | Purpose | Visibility |
|---|---|---|
| `SITE_URL` | Canonical origin | Public |
| `DEMO_DASHBOARD_URL` | Live NovaFit demo | Public |
| `DEMO_DASHBOARD_GITHUB` | Demo source | Public |
| `DEMO_DASHBOARD_NAME` | Display name | Public |
| `SITE_MODE` | `waitlist` \| `live` | Public (behavior) |
| `BOOKING_URL` | Cal.com discovery event | Public **only** when live |
| `REVIEW_CALL_URL` | Phase-4 review (paying clients) | **Never on site** |
| `FREE_AUDIT_URL` | 15-min outreach slot | **Never on site** |
| `LAUNCH_NOTE` | Waitlist heading | Public in waitlist mode |
| `ASSESSMENT_PRICE` | `$999` | Public |
| `GUARANTEE_TEXT` | Guarantee badge | Public |
| `CONCIERGE_PRICE` | `$1,200/month` | Public |

Copy that repeats a price or the guarantee should import these constants rather than hardcoding.

---

## 6. Data flows

### 6.1 Waitlist and contact

Both `WaitlistForm` and `ContactPage` POST to the same Google Form `formResponse` endpoint. Responses land in the linked Google Sheet.

Waitlist sets the subject field to `Waitlist — AI Tools Assessment` via a hidden input so rows are distinguishable from contact messages.

`target="_blank"` is required: Google’s response page is not CORS-friendly, so the form cannot be submitted XHR-style from this origin.

### 6.2 Booking (live mode)

`BOOKING_URL` is the only scheduler the site may open. Review-call and 15-min audit links are sent by hand (DM, email), never rendered.

---

## 7. Local development

### 7.1 Prerequisites

- Node.js **22+**. With nvm: `nvm use` (reads `.nvmrc`).
- npm **10+** (ships with Node 22).

Node 14/16/18 will fail on Vite 8 (`??=` and related syntax).

### 7.2 Run

```bash
git clone https://github.com/Gargi-Thakur/react-portfolio.git
cd react-portfolio
nvm use
npm install
npm run dev
```

Dev server: [http://localhost:3000](http://localhost:3000) with HMR. Prerender does not run in dev; titles/meta update in the client only.

### 7.3 Scripts

| Command | What it does |
|---|---|
| `npm run dev` / `npm start` | Vite HMR on port 3000 |
| `npm run build` | `vite build` then prerender. Output: `dist/` |
| `npm run prerender` | Prerender only (requires an existing `dist/`) |
| `npm run preview` | Serve `dist/` locally (Vite preview; default port 4173) |

First production-like check:

```bash
npx playwright install chromium
npm run build
npm run preview
```

---

## 8. Deployment

Netlify, linked to this GitHub repo. Push to `main` deploys.

[`netlify.toml`](netlify.toml) is authoritative (overrides the Netlify UI):

```
build command:  npx playwright install chromium && npm run build
publish:        dist
NODE_VERSION:   22
PLAYWRIGHT_BROWSERS_PATH: 0
```

Chromium is installed at build time because prerender needs it. `PLAYWRIGHT_BROWSERS_PATH=0` keeps browsers inside the project cache Netlify preserves.

DNS: domain registered at GoDaddy, nameservers delegated to Netlify.

---

## 9. Changing the site

| Change | Touch |
|---|---|
| Launch booking | `SITE_MODE` → `'live'` in `config.js` |
| Price / guarantee / concierge fee | `config.js`, then grep for leftover hardcoded strings |
| New public route | `App.jsx`, `prerender.mjs`, `sitemap.xml`, nav/footer as needed |
| Page `<title>` | Page `useDocumentMeta` **and** `prerender.mjs` expected title |
| Resume PDF | `src/data/Gargi_Resume2025.pdf` + import in `InfoSection.jsx` |
| Legacy URL | React `<Navigate>` + Netlify `[[redirects]]` 301 **together** |

Do not add a second primary CTA component. Extend `AssessmentCTA` / header `HEADER_CTA`.

---

## 10. Project layout

```
index.html                 # Default head: SEO, OG, ProfessionalService JSON-LD
netlify.toml               # Build, Node 22, 301s, SPA fallback
vite.config.js             # React plugin, port 3000
scripts/prerender.mjs      # Build-time Chromium snapshots + assertions
public/sitemap.xml         # Indexable URLs
src/config.js              # Offer + URL constants
src/App.jsx                # Routes, chrome, theme
src/Pages/                 # One file per route
src/Components/            # Shared UI (AssessmentCTA, BookingBlock, …)
src/hooks/                 # useDocumentMeta, useStructuredData
src/utils/theme.js         # Auto / manual theme
src/styles/                # Global CSS variables, layouts
```

---

## 11. License

Personal project. All rights reserved. Content and branding © Gargi Thakur.
