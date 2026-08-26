import React from 'react';
import styled from 'styled-components';

/** Expansion-menu card. No buy button — the assessment is the on-ramp. */
const PriceCard = ({ name, price, text }) => (
    <PriceCardStyled>
        <div className="card-head">
            <h3>{name}</h3>
            <span className="price">{price}</span>
        </div>
        <p>{text}</p>
    </PriceCardStyled>
);

const PriceCardStyled = styled.div`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg, 18px);
    background: var(--surface-muted);
    padding: 1.5rem;
    transition: transform .25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow .25s ease;
    &:hover{
        transform: translateY(-3px);
        box-shadow: 0 14px 36px rgba(99, 102, 241, 0.14);
    }
    .card-head{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: .75rem;
        margin-bottom: .6rem;
        h3{
            font-family: 'Syne', sans-serif;
            color: var(--heading-color);
            font-size: 1.05rem;
        }
        .price{
            white-space: nowrap;
            font-weight: 700;
            font-size: .85rem;
            color: var(--primary-color);
        }
    }
    p{
        color: var(--text-muted);
        font-size: .9rem;
        line-height: 1.65;
    }
`;

export default PriceCard;
