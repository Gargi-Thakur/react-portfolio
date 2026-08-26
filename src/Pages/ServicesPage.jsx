import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PriceCard from '../Components/PriceCard';
import FooterCTA from '../Components/FooterCTA';
import FAQAccordion from '../Components/FAQAccordion';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { ASSESSMENT_PRICE, CONCIERGE_PRICE } from '../config';

const MENU = [
    {
        name: 'Automation Build',
        price: '$1K–$3K',
        text: 'Zapier or Make flows for the stuff you do on repeat. I build it, we test it, I show your team, then it’s yours.',
    },
    {
        name: 'Process Redesign',
        price: '$3K–$5K',
        text: 'We look at how the work happens now, cut the silly steps, then automate what’s left.',
    },
    {
        name: 'Custom Workflows',
        price: '$3K–$5K',
        text: 'Prompts and templates for the documents you write over and over: quotes, follow-ups, reports.',
    },
    {
        name: 'Knowledge Systems',
        price: '$3K+',
        text: 'A custom GPT that knows your policies, prices, and past jobs, so it doesn’t sound like a stranger.',
    },
    {
        name: 'Full Implementation',
        price: '$5K–$10K+',
        text: 'The whole assessment plan, built. Automations across the business, still a fixed price.',
    },
];

const PROCESS = [
    {
        n: '01',
        name: 'Scoped proposal',
        text: 'After the review call I write down what gets built, what it will do, when it lands, and what it costs. Nothing starts until you approve that in writing.',
    },
    {
        n: '02',
        name: 'Build',
        text: 'I work against that scope and send progress as I go. You won’t sit around for weeks wondering if anything’s happening.',
    },
    {
        n: '03',
        name: 'Test with your real work',
        text: 'We run it on your actual jobs, quotes, or documents. If something breaks, I fix it before handoff.',
    },
    {
        n: '04',
        name: 'Handoff and training',
        text: 'I show whoever uses it day to day, leave notes on how it works, and stick around for two weeks of fixes after launch.',
    },
];

const NOT_DOING = [
    'Vague “custom AI” with no deliverable',
    'Work I can’t measure a before-and-after on',
    'Chatbots your team has to baby-sit',
    'Enterprise rollouts or reselling per-seat software',
];

const FAQ_ITEMS = [
    {
        q: 'Do I have to do the assessment first?',
        a: `Yes. I won’t quote a build until we’ve done it, otherwise we’re guessing which workflow is costing you the most. The assessment is ${ASSESSMENT_PRICE}. If it doesn’t find 5+ hours a week, you get that back.`,
    },
    {
        q: 'How is a project priced?',
        a: 'Fixed price, in writing, before I start. Not hourly. If the scope needs to change mid-build, that’s a written change request with its own price and date, and you approve it before I touch it.',
    },
    {
        q: 'How long does a build take?',
        a: 'An automation is usually one to two weeks. Bigger implementations run three to six weeks, with check-ins you sign off on. Your dates go in the proposal so you see them before you commit.',
    },
    {
        q: 'What happens if it breaks after handoff?',
        a: 'Two weeks of fixes come with every build. After that, support is separate: either as needed, or through the AI Concierge retainer below.',
    },
    {
        q: 'Do I own what you build?',
        a: 'Yes. The automations, prompts, and any custom tooling run in your accounts, on tools you control. Nothing is locked to me.',
    },
];

const ServicesPage = () => {
    useDocumentMeta(
        'Implementation | AI Automation for Small Business | Gargi Thakur',
        'Automation builds, process redesign, custom workflows and knowledge systems for Vancouver small businesses. Fixed price, scoped in writing first.'
    );

    return (
        <MainLayout>
            <ServicesPageStyled>
                <Title
                    label={'Implementation'}
                    title={'After the assessment, I can build it.'}
                    subtitle={`The ${ASSESSMENT_PRICE} assessment comes first. Then, if you want, a fixed-price build scoped in writing after the review call.`}
                />
                <InnerLayout>
                    <div className="menu-grid">
                        {MENU.map((item) => (
                            <PriceCard key={item.name} {...item} />
                        ))}
                    </div>
                </InnerLayout>

                <InnerLayout>
                    <h2 className="section-heading">How a build runs</h2>
                    <ol className="process-list">
                        {PROCESS.map((step) => (
                            <li key={step.n}>
                                <span className="step-num">{step.n}</span>
                                <div>
                                    <h3>{step.name}</h3>
                                    <p>{step.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </InnerLayout>

                <InnerLayout>
                    <h2 className="section-heading">What I don’t take on</h2>
                    <ul className="cross-list">
                        {NOT_DOING.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p className="note">
                        You work with me, not a delivery team. That keeps the scope small
                        and tied to a problem you can name.
                    </p>
                </InnerLayout>

                <InnerLayout>
                    <h2 className="section-heading">Common questions</h2>
                    <FAQAccordion items={FAQ_ITEMS} />
                </InnerLayout>

                <InnerLayout>
                    <div className="concierge-block">
                        <p className="concierge-label">Done-With-You</p>
                        <h3>{`The AI Concierge — ${CONCIERGE_PRICE}`}</h3>
                        <p>
                            Two 45-minute calls a month, Slack between sessions, and I get
                            back to you within 12 business hours. On the calls we set up
                            Claude the way you’ll use it: projects per function, skills for
                            the workflows you already run, and a plan for what to try next.
                        </p>
                        <p>
                            Before the first call, a short form so we don’t spend the hour
                            on biography. After each call: the recording in a shared Drive,
                            plus a one-pager of the three things to do before we talk again.
                        </p>
                    </div>
                </InnerLayout>

                <FooterCTA headline={'It starts with the assessment'} />
            </ServicesPageStyled>
        </MainLayout>
    );
};

const ServicesPageStyled = styled.section`
    .menu-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
        @media screen and (max-width: 978px){
            grid-template-columns: 1fr 1fr;
        }
        @media screen and (max-width: 620px){
            grid-template-columns: 1fr;
        }
    }
    .section-heading{
        font-family: 'Syne', sans-serif;
        color: var(--heading-color);
        font-size: 1.5rem;
        letter-spacing: -0.02em;
        margin-bottom: 1.25rem;
    }
    .process-list{
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 46rem;
        li{
            display: flex;
            gap: 1rem;
            align-items: flex-start;
        }
        .step-num{
            flex: none;
            font-family: 'Syne', sans-serif;
            font-weight: 700;
            font-size: .95rem;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            padding-top: .1rem;
        }
        h3{
            font-family: 'Syne', sans-serif;
            color: var(--heading-color);
            font-size: 1.02rem;
            margin-bottom: .3rem;
        }
        p{
            color: var(--text-muted);
            font-size: .93rem;
            line-height: 1.7;
        }
    }
    .cross-list{
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: .6rem;
        max-width: 46rem;
        li{
            position: relative;
            padding-left: 1.6rem;
            color: var(--text-muted);
            line-height: 1.7;
            &::before{
                content: '✕';
                position: absolute;
                left: 0;
                top: 0;
                font-weight: 700;
                color: var(--text-muted);
                opacity: .7;
            }
        }
    }
    .note{
        margin-top: 1rem;
        max-width: 46rem;
        color: var(--text-muted);
        font-size: .93rem;
        line-height: 1.7;
        font-style: italic;
    }
    .concierge-block{
        border: 1px dashed var(--border-color);
        border-radius: var(--radius-lg, 18px);
        padding: 1.75rem 2rem;
        max-width: 46rem;
        h3{
            font-family: 'Syne', sans-serif;
            color: var(--heading-color);
            font-size: 1.15rem;
            margin-bottom: .5rem;
        }
        .concierge-label{
            color: var(--primary-color);
            font-size: .72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: .14em;
            margin-bottom: .45rem;
        }
        p{
            color: var(--text-muted);
            line-height: 1.7;
        }
        p + p{
            margin-top: .75rem;
        }
    }
`;

export default ServicesPage;
