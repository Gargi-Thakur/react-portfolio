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
    background-color: var(--primary-color);
    padding: .75rem 1.35rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: .9rem;
    font-weight: 700;
    border-radius: .45rem;
    transition: background-color .2s ease;
    border: none;
    &:hover{
        background-color: var(--primary-hover);
    }
`;
export default SubmitButton;
