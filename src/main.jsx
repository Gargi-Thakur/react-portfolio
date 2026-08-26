import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

// The prerender script sets this flag so styled-components writes rules as real
// text instead of through the CSSOM, which cannot be read back losslessly.
const prerendering = typeof window !== 'undefined' && window.__PRERENDER_TEXT_STYLES__ === true;

const container = document.getElementById('root');
const app = (
    <React.StrictMode>
        <StyleSheetManager disableCSSOMInjection={prerendering}>
            <GlobalStyle />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StyleSheetManager>
    </React.StrictMode>
);

// Production builds snapshot HTML into #root. createRoot() would throw that
// markup away and remount, which replays entrance animations and looks like a
// double refresh. Hydrate the existing DOM instead; fall back for empty roots
// (Vite dev, or a route that was not prerendered).
if (container.hasChildNodes()) {
    document.documentElement.classList.add('is-prerendered');
    hydrateRoot(container, app);
} else {
    createRoot(container).render(app);
}
