import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.light-theme{
    --primary-color: #1d4ed8;
    --primary-hover: #1e40af;
    --primary-soft: rgba(29, 78, 216, 0.1);
    --secondary-color: #e2e8f0;
    --background-dark-color: #f8fafc;
    --background-dark-grey: #ffffff;
    --surface-color: #ffffff;
    --surface-muted: #f1f5f9;
    --border-color: #e2e8f0;
    --background-light-color: #f8fafc;
    --background-light-color-2: rgba(29, 78, 216, 0.12);
    --heading-color: #0f172a;
    --white-color: #0f172a;
    --font-light-color: #475569;
    --text-muted: #64748b;
    --font-dark-color: #0f172a;
    --font-dark-color-2: #1e293b;
    --sidebar-dark-color: #ffffff;
    --shadow-lg: 0 18px 40px rgba(15, 23, 42, 0.08);
    --scrollbar-bg-color: #e2e8f0;
    --scrollbar-thump-color: #94a3b8;
    --scrollbar-track-color: #f1f5f9;
}

.dark-theme{
    --primary-color: #60a5fa;
    --primary-hover: #3b82f6;
    --primary-soft: rgba(96, 165, 250, 0.14);
    --secondary-color: #334155;
    --background-dark-color: #0b1220;
    --background-dark-grey: #111827;
    --surface-color: #111827;
    --surface-muted: #1f2937;
    --border-color: #334155;
    --background-light-color: #111827;
    --background-light-color-2: rgba(96, 165, 250, 0.16);
    --heading-color: #f8fafc;
    --white-color: #f8fafc;
    --font-light-color: #cbd5e1;
    --text-muted: #94a3b8;
    --font-dark-color: #e2e8f0;
    --font-dark-color-2: #f8fafc;
    --sidebar-dark-color: #111827;
    --shadow-lg: 0 18px 40px rgba(0, 0, 0, 0.35);
    --scrollbar-bg-color: #1f2937;
    --scrollbar-thump-color: #64748b;
    --scrollbar-track-color: #111827;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: background-color .25s ease, color .25s ease;
    line-height: 1.6;
}

body::-webkit-scrollbar{
    width: 9px;
    background-color: var(--scrollbar-track-color);
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: var(--scrollbar-thump-color);
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: var(--scrollbar-bg-color);
}

textarea{
    max-width: 100%;
}

a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
}

h1{
    font-size: clamp(2.2rem, 4vw, 3.4rem);
    color: var(--heading-color);
    line-height: 1.15;
    letter-spacing: -0.02em;
    span{
        color: var(--primary-color);
        font-size: inherit;
    }
}

h2, h3, h4{
    color: var(--heading-color);
}

span{
    color: var(--primary-color);
}

h6{
    color: var(--heading-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}

p{
    font-size: 1rem;
}

.u-margin-bottom{
    margin-bottom: 4rem;
}
`;

export default GlobalStyle;
