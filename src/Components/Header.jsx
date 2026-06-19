import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';

const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/services', label: 'Services' },
    { to: '/demo', label: 'Example' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
];

function Header({ navOpen, setNavOpen, theme, onThemeToggle, themeChecked }) {
    return (
        <HeaderStyled>
            <div className="header-inner">
                <NavLink to="/" className="brand" onClick={() => setNavOpen(false)} aria-label="Gargi Thakur home">
                    <span className="brand-mark" aria-hidden="true">GT</span>
                    <span className="brand-name">Gargi Thakur</span>
                </NavLink>

                <nav className={`nav-links ${navOpen ? 'open' : ''}`}>
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
                    <div className="mobile-theme">
                        <Brightness4Icon />
                        <Switch
                            checked={themeChecked}
                            onChange={onThemeToggle}
                            inputProps={{ 'aria-label': 'Toggle dark mode' }}
                            size="small"
                        />
                    </div>
                </nav>

                <div className="header-actions">
                    <div className="desktop-theme">
                        <Brightness4Icon />
                        <Switch
                            checked={themeChecked}
                            onChange={onThemeToggle}
                            inputProps={{ 'aria-label': 'Toggle dark mode' }}
                            size="small"
                        />
                    </div>
                    <NavLink to="/contact" className="header-cta" onClick={() => setNavOpen(false)}>
                        Book workflow audit
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
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: var(--surface-color);
    border-bottom: 1px solid var(--border-color);
    backdrop-filter: blur(10px);

    .header-inner{
        max-width: 72rem;
        margin: 0 auto;
        padding: 0 1.5rem;
        height: 4.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    .brand{
        display: flex;
        align-items: center;
        gap: .65rem;
        min-width: 0;
        .brand-mark{
            width: 2.1rem;
            height: 2.1rem;
            border-radius: .55rem;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
            color: #fff;
            font-size: .78rem;
            font-weight: 800;
            letter-spacing: .04em;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        .brand-name{
            color: var(--heading-color);
            font-size: 1.02rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            white-space: nowrap;
        }
    }

    .nav-links{
        display: flex;
        align-items: center;
        gap: .25rem;
        a{
            color: var(--text-muted);
            font-size: .92rem;
            font-weight: 600;
            padding: .45rem .75rem;
            border-radius: .4rem;
            transition: color .2s ease, background-color .2s ease;
            &:hover{
                color: var(--heading-color);
                background-color: var(--surface-muted);
            }
            &.active{
                color: var(--primary-color);
                background-color: var(--primary-soft);
            }
        }
        .mobile-theme{
            display: none;
        }
    }

    .header-actions{
        display: flex;
        align-items: center;
        gap: .5rem;
        .desktop-theme{
            display: flex;
            align-items: center;
            gap: .15rem;
            color: var(--text-muted);
        }
        .header-cta{
            background-color: var(--primary-color);
            color: #fff !important;
            font-size: .85rem;
            font-weight: 700;
            padding: .55rem 1rem;
            border-radius: .45rem;
            white-space: nowrap;
            transition: background-color .2s ease;
            &:hover{
                background-color: var(--primary-hover);
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

    @media screen and (max-width: 900px){
        .nav-links{
            position: fixed;
            top: 4.25rem;
            left: 0;
            right: 0;
            flex-direction: column;
            align-items: stretch;
            padding: 1rem 1.5rem 1.5rem;
            background-color: var(--surface-color);
            border-bottom: 1px solid var(--border-color);
            transform: translateY(-120%);
            opacity: 0;
            pointer-events: none;
            transition: transform .25s ease, opacity .25s ease;
            &.open{
                transform: translateY(0);
                opacity: 1;
                pointer-events: auto;
            }
            a{
                padding: .75rem .5rem;
            }
            .mobile-theme{
                display: flex;
                align-items: center;
                gap: .25rem;
                margin-top: .5rem;
                padding-top: .75rem;
                border-top: 1px solid var(--border-color);
                color: var(--text-muted);
            }
        }
        .header-actions{
            .desktop-theme, .header-cta{
                display: none;
            }
            .menu-toggle{
                display: inline-flex;
            }
        }
        .nav-backdrop{
            display: block;
            position: fixed;
            inset: 4.25rem 0 0 0;
            background: rgba(15, 23, 42, 0.35);
        }
    }
`;

export default Header;
