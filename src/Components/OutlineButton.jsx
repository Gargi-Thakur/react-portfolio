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
    border: 1px solid var(--border-color);
    padding: .72rem 1.3rem;
    color: var(--heading-color);
    background: var(--surface-color);
    cursor: pointer;
    display: inline-block;
    font-size: .9rem;
    font-weight: 700;
    border-radius: .45rem;
    transition: border-color .2s ease, color .2s ease, background-color .2s ease;
    &:hover{
        border-color: var(--primary-color);
        color: var(--primary-color);
        background-color: var(--primary-soft);
    }
`;

export default OutlineButton;
