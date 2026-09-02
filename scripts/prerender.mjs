import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { preview } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);

const SITE_ORIGIN = 'https://gargithakur.com';
const PREVIEW_PORT = Number(process.env.PREVIEW_PORT) || 4173;
const PREVIEW_ORIGIN = `http://127.0.0.1:${PREVIEW_PORT}`;
const CRITICAL_STYLE_ID = 'prerender-critical-css';
const MIN_CRITICAL_CSS_CHARS = 2000;

const routes = [
    {
        path: '/',
        title: 'AI Automation for Small Business in Vancouver | Gargi Thakur',
        contains: 'hours a week',
    },
    {
        path: '/about',
        title: 'About | Gargi Thakur — AI for Small Business',
        contains: 'Hi, I am',
    },
    {
        path: '/ai-automation-vancouver',
        title: 'AI Automation for Small Business in Vancouver | Gargi Thakur',
        contains: 'AI automation for small businesses in Vancouver',
        schemaTypes: ['Service', 'FAQPage'],
    },
    {
        path: '/assessment',
        title: 'AI Tools Assessment for Small Business in Vancouver | Gargi Thakur',
        contains: 'AI Tools Assessment',
    },
    {
        path: '/implementation',
        title: 'Implementation | AI Automation for Small Business | Gargi Thakur',
        contains: 'After the assessment',
    },
    {
        path: '/proof',
        title: 'NovaFit AI Inventory Hub | Multi-Location Stock Dashboard',
        contains: 'multi-location',
    },
    {
        path: '/guides',
        title: 'Free AI Guides for Vancouver Small Business | Gargi Thakur',
        contains: 'Free guides',
    },
    {
        path: '/guides/ai-setup-for-a-small-business',
        title: 'The 5-minute AI setup I wish every small business started with | Gargi Thakur',
        contains: 'The 5-minute AI setup I wish every small business started with',
    },
    {
        path: '/guides/do-you-need-ai-or-a-dashboard',
        title: 'Do you need AI — or just a clearer view of your numbers? | Gargi Thakur',
        contains: 'Do you need AI — or just a clearer view of your numbers?',
    },
    {
        path: '/guides/monday-briefing-from-a-messy-spreadsheet',
        title: 'Turn last week’s numbers into a Monday briefing in 5 minutes | Gargi Thakur',
        contains: 'Turn last week’s numbers into a Monday briefing in 5 minutes',
    },
    {
        path: '/guides/reply-to-google-reviews',
        title: 'Reply to every Google review without the blank-box stare | Gargi Thakur',
        contains: 'Reply to every Google review without the blank-box stare',
    },
    {
        path: '/guides/write-a-quote-in-3-minutes',
        title: 'Write a quote or proposal a client will actually read | Gargi Thakur',
        contains: 'Write a quote or proposal a client will actually read',
    },
    {
        path: '/guides/month-of-reminder-texts',
        title: 'Draft a month of booking reminders in one sitting | Gargi Thakur',
        contains: 'Draft a month of booking reminders in one sitting',
    },
    {
        path: '/contact',
        title: 'Contact | Gargi Thakur — AI for Small Business',
        contains: 'Get In Touch',
    },
    {
        path: '/privacy',
        title: 'Privacy Policy | Gargi Thakur',
        contains: 'Who this applies to',
    },
];

const htmlPathFor = (routePath) => (
    routePath === '/'
        ? path.join(root, 'dist', 'index.html')
        : path.join(root, 'dist', routePath.slice(1), 'index.html')
);

const rewritePreviewOrigin = (html) => html
    .replaceAll(PREVIEW_ORIGIN, SITE_ORIGIN)
    .replaceAll(`http://localhost:${PREVIEW_PORT}`, SITE_ORIGIN);

const extractTitle = (html) => {
    const match = html.match(/<title>([^<]*)<\/title>/i);
    return match ? match[1] : '';
};

// The runtime style tags are re-populated by styled-components and emotion as
// soon as the bundle boots, so the snapshot keeps a single removable copy.
const blankRuntimeStyleTags = (html) => html.replace(
    /(<style[^>]*data-(?:styled|emotion)[^>]*>)[\s\S]*?(<\/style>)/g,
    (_match, open, close) => `${open}${close}`,
);

// A previous run's output may still be on disk and get served back to us, so
// drop any inherited copy before injecting a fresh one.
const stripCriticalCss = (html) => html.replaceAll(
    new RegExp(`<style id="${CRITICAL_STYLE_ID}">[\\s\\S]*?</style>`, 'g'),
    '',
);

const injectCriticalCss = (html, css) => html.replace(
    '</head>',
    () => `<style id="${CRITICAL_STYLE_ID}">${css}</style></head>`,
);

const previewServer = await preview({
    configFile: path.join(root, 'vite.config.js'),
    preview: {
        host: '127.0.0.1',
        port: PREVIEW_PORT,
        strictPort: true,
    },
});

const browser = await chromium.launch();
const errors = [];

try {
    const page = await browser.newPage();
    await page.addInitScript(() => {
        window.__PRERENDER_TEXT_STYLES__ = true;
    });

    for (const route of routes) {
        await page.goto(`${PREVIEW_ORIGIN}${route.path}`, { waitUntil: 'load' });
        await page.waitForSelector('html[data-prerender-ready="true"]', { timeout: 15_000 });
        await page.evaluate(() => {
            document.documentElement.classList.add('is-prerendered');
            document.documentElement.classList.remove('is-hydrated');
        });

        const snapshot = await page.evaluate(() => ({
            // styled-components and emotion insert rules through the CSSOM in
            // production, so their <style> tags serialize as empty and the
            // snapshot would paint unstyled markup until the JS bundle boots.
            criticalCss: [...document.styleSheets]
                .filter((sheet) => sheet.ownerNode instanceof HTMLStyleElement
                    && sheet.ownerNode.id !== 'prerender-critical-css')
                .map((sheet) => {
                    // Serializing cssRules drops shorthands that use CSS
                    // variables, so prefer the tag's own text when present.
                    const text = sheet.ownerNode.textContent?.trim();
                    if (text) {
                        return text;
                    }
                    try {
                        return [...sheet.cssRules].map((rule) => rule.cssText).join('\n');
                    } catch {
                        return '';
                    }
                })
                .filter(Boolean)
                .join('\n'),
            title: document.title,
            canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '',
            rootText: document.querySelector('#root')?.innerText?.trim() ?? '',
            routeSchema: document.getElementById('route-structured-data')?.textContent ?? '',
        }));

        const expectedCanonical = `${SITE_ORIGIN}${route.path}`;
        if (snapshot.title !== route.title) {
            errors.push(`${route.path}: expected title "${route.title}", got "${snapshot.title}"`);
        }
        if (snapshot.canonical !== expectedCanonical) {
            errors.push(`${route.path}: expected canonical "${expectedCanonical}", got "${snapshot.canonical}"`);
        }
        if (!snapshot.rootText.includes(route.contains)) {
            errors.push(`${route.path}: prerendered body missing "${route.contains}"`);
        }
        if (snapshot.rootText.length < 80) {
            errors.push(`${route.path}: prerendered #root is too short (${snapshot.rootText.length} chars)`);
        }
        for (const schemaType of route.schemaTypes ?? []) {
            if (!snapshot.routeSchema.includes(`"@type":"${schemaType}"`)) {
                errors.push(`${route.path}: JSON-LD missing @type ${schemaType}`);
            }
        }
        if (snapshot.criticalCss.length < MIN_CRITICAL_CSS_CHARS) {
            errors.push(`${route.path}: critical CSS is too small (${snapshot.criticalCss.length} chars), page would flash unstyled`);
        }
        if (snapshot.criticalCss.includes('</style')) {
            errors.push(`${route.path}: critical CSS contains a literal </style and cannot be inlined safely`);
        }

        const html = injectCriticalCss(
            stripCriticalCss(blankRuntimeStyleTags(rewritePreviewOrigin(await page.content()))),
            snapshot.criticalCss,
        );
        const file = htmlPathFor(route.path);
        await mkdir(path.dirname(file), { recursive: true });
        await writeFile(file, html);

        const writtenTitle = extractTitle(html);
        const cssKb = (snapshot.criticalCss.length / 1024).toFixed(1);
        console.log(`prerendered ${route.path} -> ${path.relative(root, file)} (${writtenTitle}) [${cssKb} kB css]`);
    }
} finally {
    await browser.close();
    await previewServer.close();
}

if (errors.length > 0) {
    console.error('\nPrerender checks failed:');
    for (const error of errors) {
        console.error(`  - ${error}`);
    }
    process.exit(1);
}

console.log(`\nPrerendered ${routes.length} routes.`);
