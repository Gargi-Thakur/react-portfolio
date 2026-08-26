import React from 'react';
import styled from 'styled-components';
import WaitlistForm from './WaitlistForm';
import PrimaryButton from './PrimaryButton';
import { SITE_MODE, BOOKING_URL, LAUNCH_NOTE } from '../config';

/** The #book target on /assessment — waitlist form now, Calendly when live. */
const BookingBlock = () => (
    <BookingBlockStyled id="book">
        {SITE_MODE === 'live' ? (
            <>
                <h3>Book your 45-minute discovery call</h3>
                <p>Pick a time that works — the assessment starts there.</p>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                    <PrimaryButton title={'Pick a time'} />
                </a>
            </>
        ) : (
            <>
                <h3>{LAUNCH_NOTE}</h3>
                <p>I take on a small number of assessment clients at a time. Leave your email and you'll be first to know when a spot opens.</p>
                <WaitlistForm />
            </>
        )}
    </BookingBlockStyled>
);

const BookingBlockStyled = styled.div`
    scroll-margin-top: 7rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg, 18px);
    background: var(--surface-muted);
    padding: 2rem;
    h3{
        font-family: 'Syne', sans-serif;
        color: var(--heading-color);
        font-size: 1.35rem;
        margin-bottom: .5rem;
    }
    > p{
        color: var(--text-muted);
        margin-bottom: 1.25rem;
        max-width: 34rem;
        line-height: 1.65;
    }
`;

export default BookingBlock;
