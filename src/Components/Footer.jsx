import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <FooterStyled>
            <div className="footer-inner">
                <p>© 2026 Gargi Thakur · Vancouver, BC</p>
                <div className="footer-links">
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/demo">Demo</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
    border-top: 1px solid var(--border-color);
    background-color: var(--surface-color);
    margin-top: auto;

    .footer-inner{
        max-width: 72rem;
        margin: 0 auto;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
        p{
            font-size: .9rem;
            color: var(--text-muted);
        }
        .footer-links{
            display: flex;
            gap: 1rem;
            a{
                font-size: .9rem;
                color: var(--text-muted);
                font-weight: 600;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export default Footer;
