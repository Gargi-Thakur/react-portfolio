import { useEffect } from 'react';

// Lightweight per-page SEO: updates the document title and meta description
// without pulling in react-helmet.
const useDocumentMeta = (title, description) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
        if (description) {
            const meta = document.querySelector('meta[name="description"]');
            if (meta) {
                meta.setAttribute('content', description);
            }
        }
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', window.location.origin + window.location.pathname);
        }
    }, [title, description]);
};

export default useDocumentMeta;
