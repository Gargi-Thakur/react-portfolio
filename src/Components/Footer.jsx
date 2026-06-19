import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <FooterStyled>
            <div className="footer-inner">
                <div className="footer-brand">
                    <span className="mark">GT</span>
                    <div>
                        <p className="name">Gargi Thakur</p>
                        <p className="meta">© 2026 · Vancouver, BC</p>
                    </div>
                </div>
                <div className="footer-links">
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/demo">Example</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/privacy">Privacy</NavLink>
                </div>
            </div>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
    position: relative;
    z-index: 1;
    margin-top: auto;
    padding: 0 1.5rem 2rem;

    .footer-inner{
        max-width: 80rem;
        margin: 0 auto;
        padding: 1.35rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        flex-wrap: wrap;
        border-radius: var(--radius-xl);
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(16px);
        box-shadow: var(--shadow-lg);
    }

    .footer-brand{
        display: flex;
        align-items: center;
        gap: .85rem;
        .mark{
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 50%;
            background: var(--gradient-primary);
            color: #fff;
            font-family: 'Syne', sans-serif;
            font-size: .68rem;
            font-weight: 800;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .name{
            font-family: 'Syne', sans-serif;
            font-size: .95rem;
            font-weight: 700;
            color: var(--heading-color);
        }
        .meta{
            font-size: .82rem;
            color: var(--text-muted);
        }
    }

    .footer-links{
        display: flex;
        gap: 1.25rem;
        a{
            font-size: .88rem;
            color: var(--text-muted);
            font-weight: 600;
            transition: color .2s ease;
            &:hover{
                color: var(--heading-color);
            }
        }
    }
`;

export default Footer;
