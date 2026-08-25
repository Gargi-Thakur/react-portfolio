import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import InsightsIcon from '@mui/icons-material/Insights';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import OutlineButton from '../Components/OutlineButton';
import useDocumentMeta from '../hooks/useDocumentMeta';
import useStructuredData from '../hooks/useStructuredData';
import { SITE_URL, DEMO_DASHBOARD_URL, DEMO_DASHBOARD_NAME } from '../config';

const PAGE_PATH = '/ai-automation-vancouver';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE = 'AI Automation Consultant in Vancouver | Gargi Thakur';
const PAGE_DESCRIPTION = 'Vancouver-based AI automation consultant building operations dashboards and workflow automation for small businesses. Start with a 60–90 minute workflow audit, then a scoped build.';

const ANSWER = 'I am Gargi Thakur, an AI automation consultant and full-stack developer based in Vancouver, BC. I build operations dashboards and workflow automation for small businesses: stock levels, reorder alerts, and the manual checks eating your week. Start with a 60–90 minute workflow audit, then a scoped build.';

const serviceAreas = [
    'Vancouver',
    'Burnaby',
    'Richmond',
    'Surrey',
    'Coquitlam',
    'North & West Vancouver',
];

const clientTypes = [
    'Retail shops and multi-location stores',
    'Fitness studios and clinics',
    'Cafés, restaurants, and wineries',
    'Small e-commerce and Shopify stores',
    'Service businesses running on spreadsheets and email',
];

const offers = [
    {
        icon: <InsightsIcon />,
        name: 'Operations dashboard',
        body: 'The 3–5 numbers your team checks every week on one screen: stock levels, reorder needs, sales trends, or transfer status. Built on data you already have, with alerts when something needs attention.',
    },
    {
        icon: <ManageSearchIcon />,
        name: 'Workflow automation audit',
        body: 'A 60–90 minute review of how work actually flows today. You leave with an automation map and the top 3 fixes ranked by time and money saved, not a pitch for software you do not need.',
    },
    {
        icon: <AutorenewIcon />,
        name: 'Monthly automation partner',
        body: 'Ongoing dashboard maintenance, small automations, and reporting improvements for teams that want a developer on call without hiring full time.',
    },
];

const notDoing = [
    'Vague "custom AI" projects with no defined deliverable',
    'Enterprise-wide rollouts or per-seat software resale',
    'Chatbots your team has to babysit to get a useful answer',
];

const process = [
    'Short call: we identify the one problem worth fixing first.',
    'Scoped proposal: exact deliverables, timeline, and fee in writing.',
    'Build and handoff: you review and approve before anything goes live.',
    'Optional ongoing support when you want a partner, not a one-off vendor.',
];

const faqs = [
    {
        question: 'What does an AI automation consultant in Vancouver actually do?',
        answer: 'I find the repetitive work in your operations and remove it. In practice that means an operations dashboard that shows the 3–5 metrics your team checks weekly, alerts for things like low stock, and automation for the manual checks, follow-ups, and spreadsheet reconciliation that eat hours every week.',
    },
    {
        question: 'How much does AI automation cost for a small business?',
        answer: 'Dashboard builds are a fixed project fee based on scope. Ongoing support is a monthly retainer defined after your first project. Pricing depends on your data and workflows, and it is confirmed in writing before any build starts. The introductory call is free for most businesses.',
    },
    {
        question: 'How long does a project take?',
        answer: 'It depends on how clean your data is and how many systems are involved. The workflow audit is a single 60–90 minute session plus a written map. For a build, the timeline is scoped and confirmed in writing up front, so you know the deliverables and dates before work begins.',
    },
    {
        question: 'Do I actually need AI, or just a better dashboard?',
        answer: 'Often the second one. Many small businesses do not have an AI problem, they have a visibility problem: the numbers exist but live in five places. That is why I start with an audit. If a plain dashboard or a simple automation solves it, I will tell you that instead of selling you a model.',
    },
    {
        question: 'What tools and systems do you work with?',
        answer: 'The ones you already use. Typically spreadsheets, POS exports, Shopify, email, and whatever internal tools your team lives in. I build the full system as a full-stack developer, so the dashboards and automations integrate properly and keep working as your business grows.',
    },
    {
        question: 'Do you only work with businesses in Vancouver?',
        answer: 'I am based in Vancouver, BC and work with businesses across Metro Vancouver, including Burnaby, Richmond, Surrey, Coquitlam, and the North Shore. Work is done remotely with calls on Pacific Time, so clients outside the region are welcome too.',
    },
];

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            '@id': `${PAGE_URL}#service`,
            name: 'AI Automation Consulting in Vancouver',
            serviceType: 'AI automation consulting',
            description: ANSWER,
            url: PAGE_URL,
            areaServed: serviceAreas.map((name) => ({
                '@type': 'City',
                name,
            })),
            provider: {
                '@type': 'ProfessionalService',
                name: 'Gargi Thakur',
                url: SITE_URL,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Vancouver',
                    addressRegion: 'BC',
                    addressCountry: 'CA',
                },
                founder: {
                    '@type': 'Person',
                    name: 'Gargi Thakur',
                    jobTitle: 'AI Automation Consultant & Full-Stack Developer',
                    sameAs: [
                        'https://www.linkedin.com/in/gargithakur94/',
                        'https://github.com/Gargi-Thakur',
                        'https://twitter.com/GargiGingerly',
                    ],
                },
            },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map(({ question, answer }) => ({
                '@type': 'Question',
                name: question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: answer,
                },
            })),
        },
    ],
};

const AiAutomationVancouverPage = () => {
    // Runs before useDocumentMeta so the JSON-LD is in the DOM by the time the
    // prerender script sees data-prerender-ready.
    useStructuredData(structuredData);
    useDocumentMeta(PAGE_TITLE, PAGE_DESCRIPTION);

    return (
        <MainLayout>
            <Title
                label={'Vancouver, BC'}
                title={'AI Automation Consultant in Vancouver'}
                subtitle={ANSWER}
            />
            <PageStyled>
                <InnerLayout>
                    <div className="cta top-cta">
                        <NavLink to="/contact">
                            <PrimaryButton title={'Book a Workflow Audit'} />
                        </NavLink>
                        <NavLink to="/demo">
                            <OutlineButton title={'See a Real Example'} />
                        </NavLink>
                    </div>

                    <section className="block">
                        <p className="label">Who I work with</p>
                        <h2>Small businesses buried in spreadsheets and email</h2>
                        <ul className="check-list">
                            {clientTypes.map((item) => (
                                <li key={item}>
                                    <CheckIcon />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="block">
                        <p className="label">What I build</p>
                        <h2>Three ways AI automation shows up in a small business</h2>
                        <div className="offer-grid">
                            {offers.map((offer) => (
                                <article className="offer-card" key={offer.name}>
                                    <span className="offer-icon">{offer.icon}</span>
                                    <h3>{offer.name}</h3>
                                    <p>{offer.body}</p>
                                </article>
                            ))}
                        </div>
                        <p className="note">
                            Full scope and deliverables live on the{' '}
                            <NavLink to="/services" className="inline-link">services page</NavLink>.
                        </p>
                    </section>

                    <section className="block">
                        <p className="label">What I do not do</p>
                        <h2>A solo developer, not an enterprise AI agency</h2>
                        <ul className="cross-list">
                            {notDoing.map((item) => (
                                <li key={item}>
                                    <CloseIcon />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="note">
                            You work directly with the person building the thing. That keeps
                            scope small, honest, and tied to a problem you can name.
                        </p>
                    </section>

                    <section className="block">
                        <p className="label">How it works</p>
                        <h2>From first call to handoff</h2>
                        <ol className="process">
                            {process.map((step, index) => (
                                <li key={step}>
                                    <span className="step-number">{index + 1}</span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="block proof">
                        <p className="label">Proof</p>
                        <h2>{DEMO_DASHBOARD_NAME}</h2>
                        <p>
                            A multi-location retailer was checking stock, reorders, and transfer
                            approvals across spreadsheets and email. This dashboard puts it on one
                            screen with alerts and decision views, so a manager can scan it in under
                            a minute instead of reconciling numbers by hand.
                        </p>
                        <div className="cta">
                            <NavLink to="/demo">
                                <OutlineButton title={'Read the Case Study'} />
                            </NavLink>
                            <a href={DEMO_DASHBOARD_URL} target="_blank" rel="noreferrer">
                                <PrimaryButton title={'Open Live Dashboard'} />
                            </a>
                        </div>
                    </section>

                    <section className="block">
                        <p className="label">Service area</p>
                        <h2>Serving Metro Vancouver</h2>
                        <ul className="area-list">
                            {serviceAreas.map((area) => (
                                <li key={area}>{area}</li>
                            ))}
                        </ul>
                        <p className="note">
                            Based in Vancouver, BC. Work happens remotely with calls on Pacific
                            Time, so businesses outside the region are welcome as well.
                        </p>
                    </section>

                    <section className="block">
                        <p className="label">FAQ</p>
                        <h2>Common questions</h2>
                        <div className="faq-list">
                            {faqs.map((faq) => (
                                <article className="faq-item" key={faq.question}>
                                    <h3>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="block closing">
                        <h2>Tell me what you check manually every week</h2>
                        <p>
                            Mention where your data lives today (POS, spreadsheets, Shopify) and
                            what you keep checking by hand. I will reply with an honest next step,
                            even when that step is not hiring me.
                        </p>
                        <div className="cta">
                            <NavLink to="/contact">
                                <PrimaryButton title={'Book a Workflow Audit'} />
                            </NavLink>
                        </div>
                    </section>
                </InnerLayout>
            </PageStyled>
        </MainLayout>
    );
};

const PageStyled = styled.section`
    .cta{
        display: flex;
        flex-wrap: wrap;
        gap: .85rem;
        margin-top: 1.5rem;
    }

    .top-cta{
        margin-top: 0;
        margin-bottom: 1rem;
    }

    .block{
        margin-top: 3rem;
        h2{
            font-size: clamp(1.5rem, 2.6vw, 2rem);
            margin-bottom: .85rem;
            max-width: 28ch;
        }
        > p{
            max-width: 46rem;
            line-height: 1.7;
            color: var(--text-muted);
        }
    }

    .label{
        display: inline-flex;
        align-items: center;
        gap: .5rem;
        margin-bottom: .75rem;
        color: var(--primary-color);
        font-size: .72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .14em;
        &::before{
            content: '';
            width: 1.75rem;
            height: 1px;
            background: var(--gradient-primary);
        }
    }

    .note{
        margin-top: 1.1rem;
        max-width: 46rem;
        color: var(--text-muted);
        line-height: 1.7;
    }

    .inline-link{
        color: var(--primary-color);
        font-weight: 600;
        &:hover{
            text-decoration: underline;
        }
    }

    .check-list,
    .cross-list{
        max-width: 46rem;
        li{
            display: flex;
            align-items: flex-start;
            gap: .6rem;
            padding: .3rem 0;
            color: var(--text-muted);
            line-height: 1.6;
            svg{
                font-size: 1.1rem;
                flex-shrink: 0;
                margin-top: .2rem;
            }
        }
    }

    .check-list li svg{
        color: var(--primary-color);
    }

    .cross-list li svg{
        color: var(--text-muted);
    }

    .offer-grid{
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.25rem;
        margin-top: 1.25rem;
        @media screen and (max-width: 900px){
            grid-template-columns: 1fr;
        }
    }

    .offer-card{
        padding: 1.5rem;
        border-radius: var(--radius-xl);
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(16px);
        box-shadow: var(--shadow-lg);
        transition: border-color .3s ease, transform .3s cubic-bezier(0.22, 1, 0.36, 1);
        &:hover{
            border-color: var(--border-strong);
            transform: translateY(-4px);
        }
        .offer-icon{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.85rem;
            height: 2.85rem;
            border-radius: 50%;
            background: var(--primary-soft);
            margin-bottom: .9rem;
            svg{
                font-size: 1.45rem;
                color: var(--primary-color);
            }
        }
        h3{
            font-size: 1.2rem;
            margin-bottom: .5rem;
        }
        p{
            color: var(--text-muted);
            line-height: 1.65;
            font-size: .95rem;
        }
    }

    .process{
        max-width: 46rem;
        margin-top: .5rem;
        li{
            display: flex;
            align-items: flex-start;
            gap: .75rem;
            padding: .45rem 0;
            color: var(--text-muted);
            line-height: 1.65;
        }
        .step-number{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 1.6rem;
            height: 1.6rem;
            flex-shrink: 0;
            border-radius: 50%;
            background: var(--primary-soft);
            color: var(--primary-color);
            font-size: .8rem;
            font-weight: 700;
        }
    }

    .area-list{
        display: flex;
        flex-wrap: wrap;
        gap: .6rem;
        margin-top: .35rem;
        li{
            padding: .4rem .9rem;
            border-radius: var(--radius-pill);
            border: 1px solid var(--border-color);
            background: var(--surface-muted);
            color: var(--text-muted);
            font-size: .85rem;
            font-weight: 600;
        }
    }

    .faq-list{
        display: grid;
        gap: 1rem;
        margin-top: 1.25rem;
        max-width: 52rem;
    }

    .faq-item{
        padding: 1.35rem 1.5rem;
        border-radius: var(--radius-lg);
        border: 1px solid var(--border-color);
        background: var(--surface-muted);
        h3{
            font-size: 1.08rem;
            margin-bottom: .5rem;
        }
        p{
            color: var(--text-muted);
            line-height: 1.7;
        }
    }

    .proof,
    .closing{
        padding: 2rem;
        border-radius: var(--radius-xl);
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(16px);
        box-shadow: var(--shadow-lg);
    }

    @media screen and (max-width: 642px){
        .proof,
        .closing{
            padding: 1.5rem 1.25rem;
        }
    }
`;

export default AiAutomationVancouverPage;
