import React from 'react'
import styled from 'styled-components';

const SubmitButton = ({ title }) => {
    return (
        <SubmitButtonStyled>
            {title}
        </SubmitButtonStyled>
    )
}

const SubmitButtonStyled = styled.button`
    background: var(--gradient-primary);
    padding: .85rem 1.5rem;
    color: white;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: .9rem;
    font-weight: 700;
    border-radius: var(--radius-pill);
    border: none;
    box-shadow: 0 10px 28px rgba(99, 102, 241, 0.28);
    transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
    &:hover{
        transform: translateY(-2px);
        filter: brightness(1.04);
        box-shadow: 0 14px 36px rgba(99, 102, 241, 0.38);
    }
`;
export default SubmitButton;
