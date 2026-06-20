import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import PrimaryButton from '../Components/PrimaryButton';
import OutlineButton from '../Components/OutlineButton';
import TextLink from '../Components/TextLink';
import DashboardPreview from '../Components/DashboardPreview';
import useDocumentMeta from '../hooks/useDocumentMeta';

const proofPoints = [
    { value: '3–5', label: 'Key metrics on one screen' },
    { value: '60–90', label: 'Minute workflow audit' },
    { value: '1', label: 'Dashboard, not ten tabs' },
];

function HomePage() {
    useDocumentMeta(
        'Gargi Thakur | Operations Dashboards & Workflow Automation for Small Businesses',
        'Operations dashboards and workflow automation for small businesses. See stock, reorders, and daily ops clearly. Book a workflow audit or explore the NovaFit example.'
    );
    return (
        <HomePageStyled>
            <section className="hero">
                <p className="eyebrow hero-eyebrow">
                    <span className="dot" aria-hidden="true" />
                    Vancouver, BC · Full-stack Software Developer
                </p>
                <div className="hero-copy">
                    <h1>
                        Know what needs <span className="gradient-text">attention</span> before it costs you
                    </h1>
                    <p className="lead">
                        Operations dashboards and workflow automation for small
                        businesses buried in spreadsheets and email. One place to see what matters.
                    </p>
                    <div className="cta">
                        <NavLink to="/contact">
                            <PrimaryButton title={'Book a Workflow Audit'} />
                        </NavLink>
                        <NavLink to="/demo">
                            <OutlineButton title={'See NovaFit Example'} />
                        </NavLink>
                    </div>
                    <div className="proof-row">
                        {proofPoints.map((item) => (
                            <div className="proof-item" key={item.label}>
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="secondary-links">
                        <NavLink to="/services"><TextLink title={'Starter offers'} /></NavLink>
                        <a href="https://www.linkedin.com/in/gargithakur94/" target="_blank" rel="noreferrer" className="linkedin-link">
                            <LinkedinIcon />
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="visual-glow" aria-hidden="true" />
                    <DashboardPreview />
                    <p className="visual-caption">NovaFit AI Inventory Hub · multi-location stock visibility</p>
                </div>
            </section>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    padding: 1.25rem 1.5rem 4rem;
    width: 100%;

    .hero{
        display: grid;
        grid-template-columns: 1.12fr .88fr;
        grid-template-areas:
            "eyebrow eyebrow"
            "copy visual";
        gap: 0 3rem;
        align-items: start;
        min-height: auto;
        padding-top: 0.25rem;
    }

    .hero-eyebrow{
        grid-area: eyebrow;
        margin-bottom: 0.85rem;
        width: fit-content;
        max-width: 100%;
        justify-self: start;
    }

    .hero-copy{
        grid-area: copy;

        h1{
            font-size: clamp(2.15rem, 4.2vw, 3.45rem);
            line-height: 1.05;
        }
    }

    .hero-visual{
        grid-area: visual;
        position: relative;
        align-self: start;
        .visual-glow{
            position: absolute;
            inset: 10% -5% -5%;
            background: var(--shadow-glow);
            filter: blur(40px);
            z-index: 0;
        }
        > *:not(.visual-glow){
            position: relative;
            z-index: 1;
        }
        .visual-caption{
            margin-top: 1rem;
            font-size: .78rem;
            color: var(--text-muted);
            text-align: center;
            letter-spacing: .02em;
        }
    }

    .eyebrow{
        display: inline-flex;
        align-items: center;
        gap: .55rem;
        padding: .4rem .85rem .4rem .65rem;
        border-radius: var(--radius-pill);
        border: 1px solid var(--border-color);
        background: var(--surface-muted);
        color: var(--text-muted);
        font-size: .78rem;
        font-weight: 600;
        letter-spacing: .02em;
        .dot{
            width: .45rem;
            height: .45rem;
            border-radius: 50%;
            background: var(--gradient-primary);
            box-shadow: 0 0 12px rgba(99, 102, 241, 0.6);
        }
    }

    .lead{
        margin-top: 0.9rem;
        max-width: 34rem;
        font-size: 1.05rem;
        line-height: 1.55;
        color: var(--text-muted);
    }

    .cta{
        margin-top: 1.25rem;
        display: flex;
        flex-wrap: wrap;
        gap: .85rem;
    }

    .proof-row{
        margin-top: 2.5rem;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: .85rem;
        max-width: 36rem;
    }

    .proof-item{
        padding: 1rem .95rem;
        border-radius: var(--radius-lg);
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(12px);
        strong{
            display: block;
            font-family: 'Syne', sans-serif;
            font-size: 1.35rem;
            font-weight: 700;
            letter-spacing: -0.03em;
            color: var(--heading-color);
            line-height: 1.1;
        }
        span{
            display: block;
            margin-top: .35rem;
            font-size: .78rem;
            line-height: 1.4;
            color: var(--text-muted);
        }
    }

    .secondary-links{
        margin-top: 1.35rem;
        display: flex;
        align-items: center;
        gap: 1.25rem;
        flex-wrap: wrap;
        .linkedin-link{
            display: inline-flex;
            align-items: center;
            gap: .35rem;
            color: var(--text-muted);
            font-size: .92rem;
            font-weight: 600;
            svg{ font-size: 1.1rem; }
            &:hover{ color: var(--primary-color); }
        }
    }

    @media screen and (max-height: 880px){
        .hero-eyebrow{
            margin-bottom: 0.65rem;
        }

        .hero-copy h1{
            font-size: clamp(1.95rem, 3.8vw, 3.1rem);
        }

        .lead{
            margin-top: 0.7rem;
            font-size: 1rem;
            line-height: 1.5;
        }

        .cta{
            margin-top: 1rem;
        }
    }

    @media screen and (max-width: 960px){
        .hero{
            grid-template-columns: 1fr;
            grid-template-areas:
                "eyebrow"
                "visual"
                "copy";
            gap: 0;
            min-height: auto;
        }
        .hero-eyebrow{
            margin-bottom: 0.75rem;
        }
        .hero-visual{
            order: unset;
            margin-bottom: 2.5rem;
        }
        .proof-row{
            grid-template-columns: 1fr;
            max-width: 100%;
        }
    }

    @media screen and (max-width: 642px){
        padding: .5rem 1rem 3rem;
    }
`;

export default HomePage;
