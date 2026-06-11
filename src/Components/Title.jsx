import React from 'react'
import styled from 'styled-components';

const Title = ({ title, subtitle, as: Heading = 'h1' }) => {
    return (
        <TitleStyled>
            <Heading>{title}</Heading>
            {subtitle && <p className="subtitle">{subtitle}</p>}
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    margin-bottom: 2rem;
    h1, h2{
        font-size: clamp(1.9rem, 3vw, 2.5rem);
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-bottom: .5rem;
        color: var(--heading-color);
    }
    .subtitle{
        max-width: 42rem;
        color: var(--text-muted);
        font-size: 1.05rem;
        line-height: 1.6;
    }
`;

export default Title;
