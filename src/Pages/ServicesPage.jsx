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
        text: 'The repetitive work runs itself. Zapier/Make flows — built, tested, your team trained, then handed off.',
    },
    {
        name: 'Process Redesign',
        price: '$3K–$5K',
        text: 'We map how work happens today, design how it should happen, and eliminate the waste before automating it.',
    },
    {
        name: 'Custom Workflows',
        price: '$3K–$5K',
        text: 'One-click operations built on prompts and templates — proposals, follow-ups, reports that used to take hours.',
    },
    {
        name: 'Knowledge Systems',
        price: '$3K+',
        text: 'A custom GPT trained on your context library — policies, pricing, past jobs — so it answers like your best employee.',
    },
    {
        name: 'Full Implementation',
        price: '$5K–$10K+',
        text: 'Custom AI agents and workflow automation across the business. The whole assessment plan, built for you.',
    },
];

const PROCESS = [
    {
        n: '01',
        name: 'Scoped proposal',
        text: 'After your review call, I write up exactly what gets built, what it will do, when it lands, and what it costs. Fixed price. Nothing starts until you approve it in writing.',
    },
    {
        n: '02',
        name: 'Build',
        text: 'I build against that written scope and share progress as it goes. You are never waiting weeks wondering what is happening.',
    },
    {
        n: '03',
        name: 'Test with your real work',
        text: 'We run it on your actual jobs, quotes, or documents — not a demo dataset. Anything that breaks gets fixed before handoff.',
    },
    {
        n: '04',
        name: 'Handoff and training',
        text: 'I train whoever uses it day to day, document how it works, and stay available for two weeks of fixes after launch.',
    },
];

const NOT_DOING = [
    'Vague "custom AI" projects with no defined deliverable',
    'Anything I cannot measure a before-and-after on',
    'Chatbots your team has to babysit to get a useful answer',
    'Enterprise rollouts or per-seat software resale',
];

const FAQ_ITEMS = [
    {
        q: 'Do I have to do the assessment first?',
        a: 'Yes — and that is deliberate. Building before we know which workflow is actually costing you the most is how projects get expensive and miss. The assessment is $999, it is credited toward any project of $2,500 or more booked within 30 days, and it is refunded entirely if it does not find you 5+ hours a week.',
    },
    {
        q: 'How is a project priced?',
        a: 'Fixed price, confirmed in writing before any work starts. Never hourly. If we discover the scope needs to change mid-build, that becomes a written change request with its own price and timeline — approved by you before I touch it.',
    },
    {
        q: 'How long does a build take?',
        a: 'An automation build is typically one to two weeks. Larger implementations run three to six weeks with milestones you sign off along the way. Your exact dates go in the proposal, so you know them before you commit.',
    },
    {
        q: 'What happens if it breaks after handoff?',
        a: 'Two weeks of fixes are included with every build. After that, ongoing support is a separate arrangement — either ad hoc or through the AI Concierge retainer below.',
    },
    {
        q: 'Do I own what you build?',
        a: 'Yes. The automations, prompts, and any custom tooling are yours, running in your own accounts, on tools you control. Nothing is locked to me.',
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
                    title={'After the assessment — I can build it for you.'}
                    subtitle={`The ${ASSESSMENT_PRICE} assessment is the on-ramp. Implementation is where we scale. Each build is a fixed price, scoped in writing after the review call.`}
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
                        You work directly with the person building the thing. That keeps scope
                        small, honest, and tied to a problem you can name.
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
                            Two 45-minute calls a month, Slack access between sessions, and a
                            12 business-hour response time. In session we set up Claude co-work,
                            build Claude projects for each business function, create skills for
                            the workflows you already run, and keep an ongoing AI strategy.
                        </p>
                        <p>
                            Before call 1, a short form so we skip the interview. After every
                            call: recordings in a shared Drive, plus a one-pager of the top 3
                            actions before next session.
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
