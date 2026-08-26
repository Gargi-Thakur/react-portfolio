import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import GuaranteeBadge from '../Components/GuaranteeBadge';
import AssessmentCTA from '../Components/AssessmentCTA';
import PhaseSteps from '../Components/PhaseSteps';
import BookingBlock from '../Components/BookingBlock';
import FAQAccordion from '../Components/FAQAccordion';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { ASSESSMENT_PRICE } from '../config';

const DELIVERABLES = [
    'A 45-minute discovery call — I pull the problems, you don’t get a pitch.',
    'A custom report: executive summary (top 3), priority matrix, tool-by-tool recommendations, a 4-day quick-start plan, and the financial impact of every fix.',
    'A 30-minute review call — we walk every recommendation, then decide what’s urgent, DIY or help, and your timeline.',
];

const FAQ_ITEMS = [
    {
        q: 'Do I need to prepare anything?',
        a: 'No. Come ready to walk me through a normal day — what you dread, where work piles up, and what you’ve already tried. I pull the problems. No pitch.',
    },
    {
        q: 'What if I already use some AI tools?',
        a: 'Even better. The assessment looks at what you use, what you’ve abandoned, and what’s missing. Half the value is usually in getting more out of tools you already pay for.',
    },
    {
        q: 'What happens after the assessment?',
        a: 'That’s up to you. The 4-day quick-start plan is built so you can DIY. If you want help, implementation is a separate, fixed-price project from the expansion menu — that’s where we scale.',
    },
    {
        q: 'How does the refund work?',
        a: 'If we can’t find 5+ hours a week of realistic savings for your business, you get the full fee back. We measure it together on the review call.',
    },
];

const AssessmentPage = () => {
    const { hash } = useLocation();

    // arriving at /assessment#book from another page should land on the form
    useEffect(() => {
        if (hash !== '#book') return;
        const target = document.getElementById('book');
        if (!target) return;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const timer = window.setTimeout(() => {
            target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        }, 80);
        return () => window.clearTimeout(timer);
    }, [hash]);

    useDocumentMeta(
        'AI Tools Assessment for Small Business | Gargi Thakur',
        `A custom report of the 3–7 AI tools your business actually needs — in one week, for ${ASSESSMENT_PRICE}. If it doesn’t find you 5+ hours a week, you pay nothing.`
    );

    return (
        <MainLayout>
            <AssessmentPageStyled>
                <Title
                    label={'The on-ramp'}
                    title={`The AI Tools Assessment — ${ASSESSMENT_PRICE}`}
                    subtitle={'A custom report of the 3–7 AI tools your business actually needs. One week, start to finish.'}
                />
                <div className="hero-row">
                    <GuaranteeBadge />
                    <AssessmentCTA />
                </div>

                <InnerLayout>
                    <h2 className="section-heading">How it works</h2>
                    <PhaseSteps />
                </InnerLayout>

                <InnerLayout>
                    <h2 className="section-heading">What you get</h2>
                    <ul className="deliverables">
                        {DELIVERABLES.map((d) => (
                            <li key={d}>{d}</li>
                        ))}
                    </ul>
                </InnerLayout>

                <InnerLayout>
                    <h2 className="section-heading">Common questions</h2>
                    <FAQAccordion items={FAQ_ITEMS} />
                </InnerLayout>

                <InnerLayout>
                    <BookingBlock />
                </InnerLayout>
            </AssessmentPageStyled>
        </MainLayout>
    );
};

const AssessmentPageStyled = styled.section`
    .hero-row{
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
    }
    .section-heading{
        font-family: 'Syne', sans-serif;
        color: var(--heading-color);
        font-size: 1.5rem;
        letter-spacing: -0.02em;
        margin-bottom: 1.25rem;
    }
    .deliverables{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: .85rem;
        max-width: 46rem;
        padding: 0;
        li{
            position: relative;
            padding-left: 1.6rem;
            color: var(--text-muted);
            line-height: 1.7;
            &::before{
                content: '✓';
                position: absolute;
                left: 0;
                top: 0;
                font-weight: 700;
                color: var(--primary-color);
            }
        }
    }
`;

export default AssessmentPage;
