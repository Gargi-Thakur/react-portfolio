import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { preview } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);

const SITE_ORIGIN = 'https://gargithakur.com';
const PREVIEW_PORT = 4173;
const PREVIEW_ORIGIN = `http://127.0.0.1:${PREVIEW_PORT}`;

const routes = [
    {
        path: '/',
        title: 'Gargi Thakur | Operations Dashboards & Workflow Automation for Small Businesses',
        contains: 'Know what needs',
    },
    {
        path: '/about',
        title: 'About | Gargi Thakur - Operations Dashboards & Workflow Automation',
        contains: 'Hi, I am',
    },
    {
        path: '/ai-automation-vancouver',
        title: 'AI Automation Consultant in Vancouver | Gargi Thakur',
        contains: 'AI Automation Consultant in Vancouver',
        schemaTypes: ['Service', 'FAQPage'],
    },
    {
        path: '/services',
        title: 'Services | Gargi Thakur - Operations Dashboards & Workflow Automation',
        contains: 'Small Business Operations Dashboard',
    },
    {
        path: '/demo',
        title: 'NovaFit AI Inventory Hub | Multi-Location Stock Dashboard',
        contains: 'multi-location',
    },
    {
        path: '/contact',
        title: 'Contact | Gargi Thakur - Operations Dashboards & Workflow Automation',
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

    for (const route of routes) {
        await page.goto(`${PREVIEW_ORIGIN}${route.path}`, { waitUntil: 'load' });
        await page.waitForSelector('html[data-prerender-ready="true"]', { timeout: 15_000 });

        const snapshot = await page.evaluate(() => ({
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

        const html = rewritePreviewOrigin(await page.content());
        const file = htmlPathFor(route.path);
        await mkdir(path.dirname(file), { recursive: true });
        await writeFile(file, html);

        const writtenTitle = extractTitle(html);
        console.log(`prerendered ${route.path} -> ${path.relative(root, file)} (${writtenTitle})`);
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
