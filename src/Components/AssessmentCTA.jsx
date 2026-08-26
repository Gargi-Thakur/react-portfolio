import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import { SITE_MODE, BOOKING_URL } from '../config';

/**
 * The ONE call-to-action used site-wide.
 * waitlist mode → goes to the booking block on /assessment
 *                 (scrolls directly to it when already on that page)
 * live mode     → opens the Cal.com booking link
 */
const LABELS = {
    waitlist: 'Join the waitlist',
    live: 'Book your AI Tools Assessment',
};

const scrollToBooking = () => {
    const target = document.getElementById('book');
    if (!target) return false;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    // move keyboard focus so the form is reachable straight away
    const firstField = target.querySelector('input, button, a');
    if (firstField) window.setTimeout(() => firstField.focus({ preventScroll: true }), 600);
    return true;
};

const AssessmentCTA = ({ label }) => {
    const title = label || LABELS[SITE_MODE];
    const navigate = useNavigate();
    const { pathname } = useLocation();

    if (SITE_MODE === 'live') {
        return (
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                <PrimaryButton title={title} />
            </a>
        );
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (pathname === '/assessment' && scrollToBooking()) return;
        navigate('/assessment#book');
    };

    return (
        <a href="/assessment#book" onClick={handleClick}>
            <PrimaryButton title={title} />
        </a>
    );
};

export default AssessmentCTA;
