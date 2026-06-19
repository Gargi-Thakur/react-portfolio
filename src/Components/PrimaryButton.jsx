import React from 'react'
import styled from 'styled-components';

const PrimaryButton = ({ title }) => {
    return (
        <PrimaryButtonStyled>
            <span>{title}</span>
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.span`
    background: var(--gradient-primary);
    padding: .85rem 1.5rem;
    color: white;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    font-size: .9rem;
    font-weight: 700;
    border-radius: var(--radius-pill);
    box-shadow: 0 10px 28px rgba(99, 102, 241, 0.28);
    transition: transform .25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow .25s ease, filter .25s ease;
    position: relative;
    overflow: hidden;

    &::after{
        content: '→';
        opacity: 0;
        transform: translateX(-6px);
        transition: opacity .25s ease, transform .25s ease;
    }

    &:hover{
        transform: translateY(-2px);
        filter: brightness(1.04);
        box-shadow: 0 14px 36px rgba(99, 102, 241, 0.38);
        &::after{
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export default PrimaryButton;
