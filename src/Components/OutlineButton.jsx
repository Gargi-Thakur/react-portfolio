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
    border: 2px solid var(--primary-color);
    padding: .75rem 2.3rem;
    color: var(--primary-color);
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    transition: all .4s ease-in-out;
    &:hover{
        background-color: var(--primary-color);
        color: white;
    }
`;

export default OutlineButton;
