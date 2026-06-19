import React from 'react'
import styled from 'styled-components';

const OutlineButton = ({ title }) => {
    return (
        <OutlineButtonStyled>
            {title}
        </OutlineButtonStyled>
    )
}

const OutlineButtonStyled = styled.span`
    border: 1px solid var(--border-strong);
    padding: .82rem 1.45rem;
    color: var(--heading-color);
    background: var(--surface-solid);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: .9rem;
    font-weight: 700;
    border-radius: var(--radius-pill);
    backdrop-filter: blur(8px);
    transition: border-color .25s ease, color .25s ease, background-color .25s ease, transform .25s ease, box-shadow .25s ease;
    &:hover{
        border-color: var(--accent-color);
        color: var(--primary-color);
        background-color: var(--primary-soft);
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
    }
`;

export default OutlineButton;
