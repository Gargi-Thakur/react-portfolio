import React from 'react'
import styled from 'styled-components';

const Title = ({ title, subtitle, as: Heading = 'h1', label }) => {
    return (
        <TitleStyled>
            {label && <p className="section-label">{label}</p>}
            <Heading>{title}</Heading>
            {subtitle && <p className="subtitle">{subtitle}</p>}
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    margin-bottom: 2.5rem;
    h1, h2{
        font-family: 'Syne', sans-serif;
        font-size: clamp(2.2rem, 4vw, 3.25rem);
        font-weight: 700;
        letter-spacing: -0.04em;
        line-height: 1.05;
        margin-bottom: .75rem;
        color: var(--heading-color);
        max-width: 18ch;
    }
    .section-label{
        display: inline-flex;
        align-items: center;
        gap: .5rem;
        margin-bottom: 1rem;
        color: var(--primary-color);
        font-size: .72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .14em;
        &::before{
            content: '';
            width: 1.75rem;
            height: 1px;
            background: var(--gradient-primary);
        }
    }
    .subtitle{
        max-width: 42rem;
        color: var(--text-muted);
        font-size: 1.08rem;
        line-height: 1.7;
    }
`;

export default Title;
