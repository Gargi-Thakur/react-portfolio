import React from 'react';
import styled from 'styled-components';

/** Native <details> accordion — zero JS, prerender-friendly. */
const FAQAccordion = ({ items }) => (
    <FAQStyled>
        {items.map((item) => (
            <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
            </details>
        ))}
    </FAQStyled>
);

const FAQStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
    max-width: 46rem;
    details{
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg, 18px);
        background: var(--surface-muted);
        padding: 1rem 1.25rem;
        summary{
            cursor: pointer;
            font-weight: 700;
            color: var(--heading-color);
            font-size: .98rem;
            &::marker{ color: var(--primary-color); }
        }
        p{
            margin-top: .75rem;
            color: var(--text-muted);
            font-size: .92rem;
            line-height: 1.7;
        }
    }
`;

export default FAQAccordion;
