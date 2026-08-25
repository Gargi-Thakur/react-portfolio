import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

// The prerender script sets this flag so styled-components writes rules as real
// text instead of through the CSSOM, which cannot be read back losslessly.
const prerendering = typeof window !== 'undefined' && window.__PRERENDER_TEXT_STYLES__ === true;

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StyleSheetManager disableCSSOMInjection={prerendering}>
            <GlobalStyle />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StyleSheetManager>
    </React.StrictMode>
);
