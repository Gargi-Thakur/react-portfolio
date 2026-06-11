import React from 'react'
import styled from 'styled-components';

const PrimaryButton = ({ title }) => {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.span`
    background-color: var(--primary-color);
    padding: .75rem 1.35rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: .9rem;
    font-weight: 700;
    border-radius: .45rem;
    transition: background-color .2s ease, transform .2s ease;
    &:hover{
        background-color: var(--primary-hover);
    }
`;

export default PrimaryButton;
