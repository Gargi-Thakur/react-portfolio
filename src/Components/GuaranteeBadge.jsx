import React from 'react';
import styled from 'styled-components';
import VerifiedIcon from '@mui/icons-material/Verified';
import { GUARANTEE_TEXT } from '../config';

/** The guarantee, rendered from ONE source so wording can never drift. */
const GuaranteeBadge = () => (
    <GuaranteeBadgeStyled>
        <VerifiedIcon className="icon" />
        <span>{GUARANTEE_TEXT}</span>
    </GuaranteeBadgeStyled>
);

const GuaranteeBadgeStyled = styled.span`
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    padding: .45rem .95rem;
    border-radius: var(--radius-pill);
    border: 1px solid var(--border-color);
    background: var(--surface-muted);
    color: var(--heading-color);
    font-size: .82rem;
    font-weight: 700;
    letter-spacing: .01em;
    .icon{
        font-size: 1.05rem;
        color: var(--primary-color);
    }
`;

export default GuaranteeBadge;
