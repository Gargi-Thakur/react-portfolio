import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

const container = document.getElementById('root');
const app = (
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
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
