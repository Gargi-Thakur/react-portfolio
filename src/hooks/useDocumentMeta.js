import { useEffect } from 'react';
import { SITE_URL } from '../config';

const setMetaContent = (selector, content) => {
    const el = document.querySelector(selector);
    if (el && content) {
        el.setAttribute('content', content);
    }
};

// Lightweight per-page SEO: updates the document title and meta description
// without pulling in react-helmet. Sets data-prerender-ready so the build-time
// snapshot waits until this route's tags exist in the HTML.
const useDocumentMeta = (title, description) => {
    useEffect(() => {
        document.documentElement.removeAttribute('data-prerender-ready');

        const canonicalUrl = `${SITE_URL}${window.location.pathname}`;

        if (title) {
            document.title = title;
            setMetaContent('meta[property="og:title"]', title);
            setMetaContent('meta[name="twitter:title"]', title);
        }
        if (description) {
            setMetaContent('meta[name="description"]', description);
            setMetaContent('meta[property="og:description"]', description);
            setMetaContent('meta[name="twitter:description"]', description);
        }

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', canonicalUrl);
        }
        setMetaContent('meta[property="og:url"]', canonicalUrl);

        document.documentElement.dataset.prerenderReady = 'true';
    }, [title, description]);
};

export default useDocumentMeta;
