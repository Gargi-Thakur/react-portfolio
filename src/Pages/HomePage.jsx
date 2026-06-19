import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import PrimaryButton from '../Components/PrimaryButton';
import OutlineButton from '../Components/OutlineButton';
import TextLink from '../Components/TextLink';
import DashboardPreview from '../Components/DashboardPreview';
import useDocumentMeta from '../hooks/useDocumentMeta';

function HomePage() {
    useDocumentMeta(
        'Gargi Thakur | Operations Dashboards & Workflow Automation for Small Businesses',
        'Operations dashboards and workflow automation for small businesses. See stock, reorders, and daily ops clearly. Book a workflow audit or explore the NovaFit example.'
    );
    return (
        <HomePageStyled>
            <section className="hero">
                <div className="hero-copy">
                    <p className="eyebrow">Vancouver, BC · Full-stack developer</p>
                    <h1>Know what needs attention before it costs you sales or time</h1>
                    <p className="lead">
                        I build operations dashboards and workflow automation for small
                        businesses stuck in spreadsheets, email threads, and manual checks.
                        Whether you run inventory across locations or just need one place
                        to see the numbers that matter, I help you act faster and firefight less.
                    </p>
                    <div className="cta">
                        <NavLink to="/contact">
                            <PrimaryButton title={'Book a Workflow Audit'} />
                        </NavLink>
                        <NavLink to="/demo">
                            <OutlineButton title={'See NovaFit Example'} />
                        </NavLink>
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
                    <DashboardPreview />
                    <p className="visual-caption">NovaFit AI Inventory Hub: multi-location stock visibility in one view</p>
                </div>
            </section>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.div`
    max-width: 72rem;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 3rem;
    width: 100%;

    .hero{
        display: grid;
        grid-template-columns: 1.05fr .95fr;
        gap: 2.5rem;
        align-items: center;
    }

    .eyebrow{
        color: var(--primary-color);
        font-size: .82rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .08em;
        margin-bottom: .85rem;
    }

    .lead{
        margin-top: 1rem;
        max-width: 34rem;
        font-size: 1.08rem;
        line-height: 1.65;
        color: var(--text-muted);
    }

    .cta{
        margin-top: 1.75rem;
        display: flex;
        flex-wrap: wrap;
        gap: .85rem;
    }

    .secondary-links{
        margin-top: 1rem;
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
        .visual-caption{
            margin-top: .75rem;
            font-size: .82rem;
            color: var(--text-muted);
            text-align: center;
        }
    }

    @media screen and (max-width: 960px){
        .hero{
            grid-template-columns: 1fr;
        }
        .hero-visual{
            order: -1;
        }
    }

    @media screen and (max-width: 642px){
        padding: 1.5rem 1rem 2.5rem;
    }
`;

export default HomePage;
