import React from 'react';
import styled from 'styled-components';
import SubmitButton from './SubmitButton';

/** Waitlist signup — posts to the same Google Form backend as the contact page. */
const WaitlistForm = () => (
    <WaitlistFormStyled>
        <form
            className="form"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdBDwt5jPc00ipcqlMnPS9ulBjGSyCycdaRWayEM_InehfKZQ/formResponse"
            target="_blank"
        >
            <input type="hidden" name="entry.141461250" value="Waitlist — AI Tools Assessment" />
            <div className="form-field">
                <label htmlFor="wl-name">Name*</label>
                <input type="text" id="wl-name" name="entry.1440995342" required />
            </div>
            <div className="form-field">
                <label htmlFor="wl-email">Your email*</label>
                <input type="email" id="wl-email" name="emailAddress" required />
            </div>
            <div className="form-field">
                <label htmlFor="wl-pain">What eats the most of your week? (optional)</label>
                <textarea id="wl-pain" rows="3" name="entry.850096426" placeholder="e.g. chasing invoices, writing quotes, copy-pasting between apps" />
            </div>
            <SubmitButton title={'Join the waitlist'} type="submit" />
            <p className="fine-print">No spam — one email when booking opens.</p>
        </form>
    </WaitlistFormStyled>
);

const WaitlistFormStyled = styled.div`
    .form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 26rem;
    }
    .form-field{
        display: flex;
        flex-direction: column;
        gap: .35rem;
        label{
            font-size: .8rem;
            font-weight: 600;
            color: var(--text-muted);
        }
        input, textarea{
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md, 12px);
            background: var(--surface-muted);
            color: var(--heading-color);
            padding: .7rem .85rem;
            font-size: .95rem;
            font-family: inherit;
            outline: none;
            &:focus{ border-color: var(--primary-color); }
        }
    }
    .fine-print{
        font-size: .75rem;
        color: var(--text-muted);
    }
`;

export default WaitlistForm;
