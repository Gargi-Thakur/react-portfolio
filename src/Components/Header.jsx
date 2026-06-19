import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import IconButton from '@mui/material/IconButton';

const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/services', label: 'Services' },
    { to: '/demo', label: 'Example' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
];

function Header({ navOpen, setNavOpen, theme, onThemeToggle, themeChecked, themePreference = 'auto' }) {
    const isDark = theme === 'dark-theme';

    return (
        <HeaderStyled>
            <div className="header-shell">
                <NavLink to="/" className="brand" onClick={() => setNavOpen(false)} aria-label="Gargi Thakur home">
                    <span className="brand-mark" aria-hidden="true">GT</span>
                    <span className="brand-copy">
                        <span className="brand-name">Gargi Thakur</span>
                        <span className="brand-tag">Operations & Automation</span>
                    </span>
                </NavLink>

                <nav className={`nav-links ${navOpen ? 'open' : ''}`} aria-label="Main">
                    {navItems.map(({ to, label, end }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={() => setNavOpen(false)}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <div className="header-actions">
                    <button
                        type="button"
                        className="theme-toggle"
                        onClick={onThemeToggle}
                        aria-label={
                            themePreference === 'auto'
                                ? (isDark ? 'Switch to light mode (manual override)' : 'Switch to dark mode (manual override)')
                                : (isDark ? 'Switch to light mode' : 'Switch to dark mode')
                        }
                    >
                        {isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                    </button>
                    <NavLink to="/contact" className="header-cta" onClick={() => setNavOpen(false)}>
                        Book audit
                    </NavLink>
                    <IconButton
                        className="menu-toggle"
                        onClick={() => setNavOpen(!navOpen)}
                        aria-label={navOpen ? 'Close menu' : 'Open menu'}
                    >
                        {navOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </div>
            </div>
            {navOpen && <div className="nav-backdrop" onClick={() => setNavOpen(false)} />}
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    position: fixed;
    top: 1rem;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 0 1.25rem;
    pointer-events: none;

    .header-shell{
        pointer-events: auto;
        max-width: 80rem;
        margin: 0 auto;
        padding: .55rem .65rem .55rem .85rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        border-radius: var(--radius-pill);
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(20px) saturate(160%);
        -webkit-backdrop-filter: blur(20px) saturate(160%);
        box-shadow: var(--shadow-lg);
    }

    .brand{
        display: flex;
        align-items: center;
        gap: .75rem;
        min-width: 0;
        .brand-mark{
            width: 2.35rem;
            height: 2.35rem;
            border-radius: 50%;
            background: var(--gradient-primary);
            color: #fff;
            font-family: 'Syne', sans-serif;
            font-size: .72rem;
            font-weight: 800;
            letter-spacing: .06em;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
        }
        .brand-copy{
            display: flex;
            flex-direction: column;
            min-width: 0;
        }
        .brand-name{
            color: var(--heading-color);
            font-family: 'Syne', sans-serif;
            font-size: .95rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            line-height: 1.15;
            white-space: nowrap;
        }
        .brand-tag{
            color: var(--text-muted);
            font-size: .68rem;
            font-weight: 600;
            letter-spacing: .04em;
            text-transform: uppercase;
            white-space: nowrap;
        }
    }

    .nav-links{
        display: flex;
        align-items: center;
        gap: .15rem;
        padding: .2rem;
        border-radius: var(--radius-pill);
        background: var(--surface-muted);
        border: 1px solid var(--border-color);
        a{
            color: var(--nav-link-color, var(--font-light-color));
            font-size: .82rem;
            font-weight: 600;
            padding: .5rem .85rem;
            border-radius: var(--radius-pill);
            transition: color .25s ease, background-color .25s ease, transform .25s ease;
            &:hover{
                color: var(--heading-color);
                background-color: var(--surface-solid);
            }
            &.active{
                color: var(--heading-color);
                background-color: var(--surface-solid);
                box-shadow: 0 2px 12px rgba(10, 10, 11, 0.06);
            }
        }
    }

    .header-actions{
        display: flex;
        align-items: center;
        gap: .45rem;
        .theme-toggle{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.35rem;
            height: 2.35rem;
            border-radius: 50%;
            border: 1px solid var(--border-color);
            background: var(--surface-muted);
            color: var(--text-muted);
            cursor: pointer;
            transition: color .2s ease, border-color .2s ease, transform .2s ease;
            svg{ font-size: 1.05rem; }
            &:hover{
                color: var(--heading-color);
                border-color: var(--border-strong);
                transform: rotate(-8deg);
            }
        }
        .header-cta{
            background: var(--gradient-primary);
            color: #fff !important;
            font-size: .82rem;
            font-weight: 700;
            padding: .62rem 1.1rem;
            border-radius: var(--radius-pill);
            white-space: nowrap;
            transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.28);
            &:hover{
                transform: translateY(-1px);
                filter: brightness(1.05);
                box-shadow: 0 12px 28px rgba(99, 102, 241, 0.35);
            }
        }
        .menu-toggle{
            display: none;
            color: var(--heading-color);
        }
    }

    .nav-backdrop{
        display: none;
    }

    @media screen and (max-width: 960px){
        .brand-tag{
            display: none;
        }
        .nav-links{
            display: none;
        }
    }

    @media screen and (max-width: 900px){
        top: .75rem;
        padding: 0 .85rem;

        .header-shell{
            padding: .55rem .65rem;
        }

        .nav-links{
            display: flex;
            position: fixed;
            top: 5.25rem;
            left: 1rem;
            right: 1rem;
            flex-direction: column;
            align-items: stretch;
            gap: .25rem;
            padding: .65rem;
            border-radius: var(--radius-xl);
            background: var(--surface-solid);
            backdrop-filter: none;
            border: 1px solid var(--border-strong);
            box-shadow: var(--shadow-lg);
            transform: translateY(-8px) scale(0.98);
            opacity: 0;
            pointer-events: none;
            transition: transform .28s ease, opacity .28s ease;
            &.open{
                transform: translateY(0) scale(1);
                opacity: 1;
                pointer-events: auto;
            }
            a{
                padding: .9rem 1rem;
                border-radius: var(--radius-md);
                font-size: .95rem;
                font-weight: 600;
                color: var(--font-light-color);
                background: transparent;
                border: 1px solid transparent;
                transition: color .2s ease, background-color .2s ease, border-color .2s ease, transform .2s ease;
                @media (hover: hover){
                    &:hover:not(.active){
                        color: var(--heading-color);
                        background: var(--menu-item-hover);
                        border-color: var(--border-color);
                        transform: translateX(3px);
                    }
                }
                &:focus-visible{
                    color: var(--heading-color);
                    background: var(--menu-item-hover);
                    border-color: var(--primary-color);
                    outline: none;
                }
                &:active:not(.active){
                    color: var(--heading-color);
                    background: var(--menu-item-active);
                    transform: scale(0.99);
                }
                &.active{
                    color: var(--heading-color);
                    background: var(--menu-item-active);
                    border-color: rgba(99, 102, 241, 0.25);
                    box-shadow: none;
                    font-weight: 700;
                }
            }
        }
        .header-actions{
            .header-cta{
                display: none;
            }
            .menu-toggle{
                display: inline-flex;
            }
        }
        .nav-backdrop{
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(10, 10, 11, 0.35);
            backdrop-filter: blur(4px);
            pointer-events: auto;
            z-index: -1;
        }
    }
`;

export default Header;
