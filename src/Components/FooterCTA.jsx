import React from 'react';
import styled from 'styled-components';
import AssessmentCTA from './AssessmentCTA';
import GuaranteeBadge from './GuaranteeBadge';

/** Same closing band on every page. */
const FooterCTA = ({ headline = 'Start with the AI Tools Assessment' }) => (
    <FooterCTAStyled>
        <h2>{headline}</h2>
        <p>One week. One report. The 3–7 AI tools your business actually needs — and 5+ hours a week found, or you pay nothing.</p>
        <div className="cta-row">
            <AssessmentCTA />
            <GuaranteeBadge />
        </div>
    </FooterCTAStyled>
);

const FooterCTAStyled = styled.section`
    margin: 4rem auto 1rem;
    max-width: 60rem;
    text-align: center;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg, 18px);
    background: var(--surface-muted);
    padding: 3rem 1.5rem;
    h2{
        font-family: 'Syne', sans-serif;
        color: var(--heading-color);
        font-size: clamp(1.6rem, 3vw, 2.3rem);
        letter-spacing: -0.03em;
        margin-bottom: .5rem;
    }
    p{
        color: var(--text-muted);
        margin-bottom: 1.5rem;
    }
    .cta-row{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
    }
`;

export default FooterCTA;
