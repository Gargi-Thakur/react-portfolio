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
                <div className="hero-copy">
                    <p className="eyebrow">
                        <span className="dot" aria-hidden="true" />
                        Vancouver, BC · Full-stack Software Developer
                    </p>
                    <h1>
                        Know what needs <span className="gradient-text">attention</span> before it costs you sales or time
                    </h1>
                    <p className="lead">
                        I build operations dashboards and workflow automation for small
                        businesses stuck in spreadsheets, email threads, and manual checks.
                        One place to see what matters. Less firefighting.
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
    padding: 1rem 1.5rem 4rem;
    width: 100%;

    .hero{
        display: grid;
        grid-template-columns: 1.05fr .95fr;
        gap: 3.5rem;
        align-items: center;
        min-height: calc(100vh - 10rem);
    }

    .eyebrow{
        display: inline-flex;
        align-items: center;
        gap: .55rem;
        padding: .45rem .85rem .45rem .65rem;
        margin-bottom: 1.25rem;
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
        margin-top: 1.35rem;
        max-width: 36rem;
        font-size: 1.12rem;
        line-height: 1.75;
        color: var(--text-muted);
    }

    .cta{
        margin-top: 2rem;
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

    .hero-visual{
        position: relative;
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

    @media screen and (max-width: 960px){
        .hero{
            grid-template-columns: 1fr;
            min-height: auto;
            gap: 2.5rem;
        }
        .hero-visual{
            order: -1;
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
