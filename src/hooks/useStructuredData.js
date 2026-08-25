import { useEffect } from 'react';

const SCRIPT_ID = 'route-structured-data';

// Injects per-route JSON-LD into <head> so the build-time prerender captures it.
// Pass a module-level constant so the effect does not re-run on every render.
const useStructuredData = (data) => {
    useEffect(() => {
        if (!data) {
            return undefined;
        }

        // A prerendered snapshot already contains this tag, so clear it first.
        document.getElementById(SCRIPT_ID)?.remove();

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = SCRIPT_ID;
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);

        return () => script.remove();
    }, [data]);
};

export default useStructuredData;
