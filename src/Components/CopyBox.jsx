import React, { useState } from 'react';
import styled from 'styled-components';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

/** A copy-paste prompt block used inside guide steps. */
const CopyBox = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard API can be unavailable (older browsers, insecure context) —
            // the text is still selectable/readable in the box, so fail quietly.
        }
    };

    return (
        <CopyBoxStyled>
            <button type="button" onClick={handleCopy} aria-label="Copy prompt to clipboard">
                {copied ? <CheckIcon /> : <ContentCopyIcon />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <pre>{text}</pre>
        </CopyBoxStyled>
    );
};

const CopyBoxStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: .7rem;
    margin-top: .75rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg, 18px);
    background: var(--surface-solid);
    padding: 1rem 1.25rem 1.15rem;

    button{
        align-self: flex-end;
        display: inline-flex;
        align-items: center;
        gap: .3rem;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-pill);
        background: var(--surface-muted);
        color: var(--text-muted);
        font-size: .74rem;
        font-weight: 700;
        padding: .35rem .65rem;
        cursor: pointer;
        transition: color .2s ease, border-color .2s ease, background-color .2s ease;
        svg{ font-size: .95rem; }
        &:hover{
            color: var(--primary-color);
            border-color: var(--accent-color);
            background: var(--primary-soft);
        }
    }

    pre{
        margin: 0;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        font-family: inherit;
        font-size: .88rem;
        line-height: 1.65;
        color: var(--heading-color);
    }
`;

export default CopyBox;
