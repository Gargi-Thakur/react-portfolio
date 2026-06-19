import { createGlobalStyle } from 'styled-components';

const sharedRadius = `
    --radius-sm: 0.5rem;
    --radius-md: 0.85rem;
    --radius-lg: 1.25rem;
    --radius-xl: 1.75rem;
    --radius-pill: 999px;
`;

const GlobalStyle = createGlobalStyle`
.light-theme{
    ${sharedRadius}
    --primary-color: #4338ca;
    --primary-hover: #3730a3;
    --primary-soft: rgba(67, 56, 202, 0.1);
    --accent-color: #6366f1;
    --accent-warm: #818cf8;
    --secondary-color: #e7e5e4;
    --background-dark-color: #f7f6f3;
    --background-dark-grey: #ffffff;
    --surface-color: rgba(255, 255, 255, 0.72);
    --surface-solid: #ffffff;
    --surface-muted: rgba(255, 255, 255, 0.55);
    --border-color: rgba(10, 10, 11, 0.08);
    --border-strong: rgba(10, 10, 11, 0.14);
    --background-light-color: #f7f6f3;
    --background-light-color-2: rgba(67, 56, 202, 0.08);
    --heading-color: #0a0a0b;
    --white-color: #0a0a0b;
    --font-light-color: #3f3f46;
    --text-muted: #52525b;
    --nav-link-color: #27272a;
    --font-dark-color: #0a0a0b;
    --font-dark-color-2: #18181b;
    --sidebar-dark-color: #ffffff;
    --shadow-lg: 0 24px 64px rgba(10, 10, 11, 0.08);
    --shadow-glow: 0 0 80px rgba(99, 102, 241, 0.15);
    --gradient-primary: linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #818cf8 100%);
    --gradient-text: linear-gradient(135deg, #4338ca 0%, #6366f1 60%, #a78bfa 100%);
    --mesh-1: rgba(99, 102, 241, 0.18);
    --mesh-2: rgba(167, 139, 250, 0.12);
    --mesh-3: rgba(67, 56, 202, 0.08);
    --glass-bg: rgba(255, 255, 255, 0.65);
    --glass-border: rgba(255, 255, 255, 0.8);
    --menu-item-hover: rgba(67, 56, 202, 0.08);
    --menu-item-active: rgba(67, 56, 202, 0.14);
    --scrollbar-bg-color: #e7e5e4;
    --scrollbar-thump-color: #a1a1aa;
    --scrollbar-track-color: #f4f4f5;
}

.dark-theme{
    ${sharedRadius}
    --primary-color: #818cf8;
    --primary-hover: #a5b4fc;
    --primary-soft: rgba(129, 140, 248, 0.14);
    --accent-color: #6366f1;
    --accent-warm: #a78bfa;
    --secondary-color: #27272a;
    --background-dark-color: #09090b;
    --background-dark-grey: #111113;
    --surface-color: rgba(24, 24, 27, 0.72);
    --surface-solid: #18181b;
    --surface-muted: rgba(39, 39, 42, 0.65);
    --border-color: rgba(255, 255, 255, 0.08);
    --border-strong: rgba(255, 255, 255, 0.14);
    --background-light-color: #111113;
    --background-light-color-2: rgba(129, 140, 248, 0.12);
    --heading-color: #fafafa;
    --white-color: #fafafa;
    --font-light-color: #d4d4d8;
    --text-muted: #a1a1aa;
    --nav-link-color: #e4e4e7;
    --font-dark-color: #e4e4e7;
    --font-dark-color-2: #fafafa;
    --sidebar-dark-color: #18181b;
    --shadow-lg: 0 24px 64px rgba(0, 0, 0, 0.45);
    --shadow-glow: 0 0 100px rgba(99, 102, 241, 0.2);
    --gradient-primary: linear-gradient(135deg, #6366f1 0%, #818cf8 50%, #a78bfa 100%);
    --gradient-text: linear-gradient(135deg, #818cf8 0%, #a78bfa 60%, #c4b5fd 100%);
    --mesh-1: rgba(99, 102, 241, 0.22);
    --mesh-2: rgba(167, 139, 250, 0.14);
    --mesh-3: rgba(129, 140, 248, 0.08);
    --glass-bg: rgba(24, 24, 27, 0.72);
    --glass-border: rgba(255, 255, 255, 0.1);
    --menu-item-hover: rgba(129, 140, 248, 0.12);
    --menu-item-active: rgba(129, 140, 248, 0.2);
    --scrollbar-bg-color: #27272a;
    --scrollbar-thump-color: #52525b;
    --scrollbar-track-color: #18181b;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

html{
    scroll-behavior: smooth;
}

body{
    font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: background-color .35s ease, color .35s ease;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body::-webkit-scrollbar{
    width: 8px;
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

input,
textarea,
select,
button{
    font: inherit;
    color: inherit;
}

input::placeholder,
textarea::placeholder{
    color: var(--text-muted);
    opacity: 1;
}

a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
}

h1, h2, h3, h4{
    font-family: 'Syne', 'DM Sans', system-ui, sans-serif;
    color: var(--heading-color);
}

h1{
    font-size: clamp(2.6rem, 5.5vw, 4.5rem);
    line-height: 1.02;
    letter-spacing: -0.04em;
    font-weight: 700;
    span{
        font-size: inherit;
        font-family: inherit;
    }
    .gradient-text{
        background: var(--gradient-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
}

h2, h3, h4{
    letter-spacing: -0.03em;
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

@keyframes pageFadeIn {
    from {
        opacity: 0;
        transform: translateY(12px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
}
`;

export default GlobalStyle;
