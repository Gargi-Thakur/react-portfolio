import React from 'react';
import styled from 'styled-components';

const TextLink = ({ title }) => (
    <TextLinkStyled>{title}</TextLinkStyled>
);

const TextLinkStyled = styled.span`
    color: var(--primary-color);
    font-size: .92rem;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    transition: border-color .2s ease;
    &:hover{
        border-bottom-color: var(--primary-color);
    }
`;

export default TextLink;
