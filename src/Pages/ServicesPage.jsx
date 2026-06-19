import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import DemoShowcase from '../Components/DemoShowcase';
import InsightsIcon from '@mui/icons-material/Insights';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckIcon from '@mui/icons-material/Check';
import useDocumentMeta from '../hooks/useDocumentMeta';

const ServicesPage = () => {
    useDocumentMeta(
        'Services | Gargi Thakur - Operations Dashboards & Workflow Automation',
        'Three starter offers for small businesses: operations dashboards, workflow automation audits, and monthly automation support. Book a workflow audit or scope your dashboard.'
    );

    return (
        <MainLayout>
            <Title
                title={'Services'}
                label={'Offers'}
                subtitle={'Three focused starter offers. Pick the one that matches where you are today.'}
            />
            <ServicesPageStyled>
                <InnerLayout>
                    <div className="path-guide">
                        <p><strong>Saw the NovaFit example and want something similar?</strong> Start with the Operations Dashboard.</p>
                        <p><strong>Not sure where the problem is yet?</strong> Start with a Workflow Automation Audit.</p>
                    </div>

                    <p className="intro">
                        Each offer has a clear scope and deliverable. I do not sell vague
                        custom AI projects. Pricing depends on your data and workflows and
                        is confirmed in writing before any build starts.
                    </p>

                    <div className="service-card featured">
                        <div className="badge">Most popular</div>
                        <div className="card-head">
                            <div className="card-icon"><InsightsIcon /></div>
                            <div className="card-head-copy">
                                <h3>Small Business Operations Dashboard</h3>
                                <p className="best-for">
                                    Best for: retail, fitness studios, cafés, clinics, wineries,
                                    service businesses, and small e-commerce stores.
                                </p>
                            </div>
                        </div>
                        <p className="description">
                            One dashboard with the 3–5 numbers your team checks every week:
                            stock levels, reorder needs, sales trends, transfer status, or
                            whatever manual check is eating hours today. Built on cleaned-up
                            data you already have.
                        </p>
                        <ul className="includes">
                            <li><CheckIcon /> Data cleanup and connection to your existing sources</li>
                            <li><CheckIcon /> Custom dashboard with 3–5 key metrics and decision views</li>
                            <li><CheckIcon /> Basic alerts for low stock, slow movers, or workflow gaps</li>
                            <li><CheckIcon /> Handoff, training, and documentation for your team</li>
                        </ul>
                        <p className="price-direction">
                            Fixed project fee based on scope. Optional monthly maintenance
                            after launch.
                        </p>
                        <DemoShowcase compact embedded />
                        <div className="card-actions">
                            <NavLink to="/contact" className="card-cta">
                                <PrimaryButton title={'Scope My Dashboard'} />
                            </NavLink>
                        </div>
                    </div>

                    <div className="service-card entry">
                        <div className="badge entry-badge">Start here if unsure</div>
                        <div className="card-head">
                            <div className="card-icon"><ManageSearchIcon /></div>
                            <div className="card-head-copy">
                                <h3>Workflow Automation Audit</h3>
                                <p className="best-for">
                                    Best for: businesses drowning in emails, spreadsheets,
                                    manual follow-ups, order checks, and inventory checks.
                                </p>
                            </div>
                        </div>
                        <p className="description">
                            Not sure whether you need a dashboard, automation, or both?
                            I map how work actually flows today, quantify the biggest time
                            leaks, and leave you with a prioritized plan, not a pitch for
                            software you do not need.
                        </p>
                        <ul className="includes">
                            <li><CheckIcon /> 60–90 minute workflow review with your team</li>
                            <li><CheckIcon /> Automation map of where manual work repeats</li>
                            <li><CheckIcon /> Top 3 recommendations ranked by time and money saved</li>
                            <li><CheckIcon /> Clear next step: dashboard build, automation, or both</li>
                        </ul>
                        <p className="price-direction">
                            Free introductory call for most businesses. Paid diagnostic
                            available for complex operations. I will tell you which applies
                            when you reach out.
                        </p>
                        <div className="card-actions">
                            <NavLink to="/contact" className="card-cta">
                                <PrimaryButton title={'Book a Workflow Audit'} />
                            </NavLink>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="card-head">
                            <div className="card-icon"><AutorenewIcon /></div>
                            <div className="card-head-copy">
                                <h3>Monthly Automation Partner</h3>
                                <p className="best-for">
                                    Best for: businesses that need ongoing improvements after
                                    the first dashboard or automation is live.
                                </p>
                            </div>
                        </div>
                        <p className="description">
                            Operations change. New products, new locations, new bottlenecks.
                            This keeps your dashboard accurate, adds small automations as
                            needs come up, and gives you a developer on call without hiring
                            full time.
                        </p>
                        <ul className="includes">
                            <li><CheckIcon /> Dashboard maintenance and metric updates</li>
                            <li><CheckIcon /> Small workflow automations and reporting improvements</li>
                            <li><CheckIcon /> Priority support when something breaks or shifts</li>
                            <li><CheckIcon /> Regular check-ins on what to improve next</li>
                        </ul>
                        <p className="price-direction">
                            Monthly retainer based on hours and scope. Defined together
                            after your first project.
                        </p>
                        <div className="card-actions">
                            <NavLink to="/contact" className="card-cta">
                                <PrimaryButton title={'Talk About Ongoing Support'} />
                            </NavLink>
                        </div>
                    </div>

                    <div className="process-section">
                        <h4>How it works</h4>
                        <ol className="process">
                            <li><span>1.</span> Short call: we identify the one problem worth fixing first</li>
                            <li><span>2.</span> Scoped proposal: exact deliverables, timeline, and fee in writing</li>
                            <li><span>3.</span> Build and handoff: you review and approve before anything goes live</li>
                            <li><span>4.</span> Optional ongoing support when you want a partner, not a one-off vendor</li>
                        </ol>
                        <div className="cta">
                            <NavLink to="/demo">
                                <PrimaryButton title={'See the NovaFit Example'} />
                            </NavLink>
                        </div>
                    </div>
                </InnerLayout>
            </ServicesPageStyled>
        </MainLayout>
    );
};

const ServicesPageStyled = styled.section`
    .path-guide{
        max-width: 46rem;
        padding: 1.15rem 1.25rem;
        margin-bottom: 1.25rem;
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-xl);
        background: var(--glass-bg);
        backdrop-filter: blur(12px);
        p{
            line-height: 1.65;
            color: var(--text-muted);
            & + p{
                margin-top: .5rem;
            }
            strong{
                color: var(--heading-color);
            }
        }
    }

    .intro{
        max-width: 46rem;
        padding-bottom: .75rem;
        line-height: 1.7;
        color: var(--text-muted);
        font-size: 1.05rem;
    }

    .service-card{
        position: relative;
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-xl);
        padding: 2rem;
        padding-top: 2.25rem;
        margin-top: 1.75rem;
        backdrop-filter: blur(16px);
        box-shadow: var(--shadow-lg);
        transition: border-color .3s ease, transform .3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow .3s ease;
        overflow: hidden;
        &:hover{
            border-color: var(--border-strong);
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg), var(--shadow-glow);
        }
        &.featured{
            border-color: rgba(99, 102, 241, 0.35);
            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: var(--gradient-primary);
            }
        }

        .badge{
            position: absolute;
            top: 1.35rem;
            right: 1.35rem;
            background: var(--primary-soft);
            color: var(--primary-color);
            font-size: .68rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: .12em;
            padding: .35rem .8rem;
            border-radius: var(--radius-pill);
            &.entry-badge{
                background: var(--surface-muted);
                color: var(--heading-color);
            }
        }
    }

    .card-head{
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: .25rem;
        padding-right: 6.5rem;
        h3{
            font-family: 'Syne', sans-serif;
            color: var(--heading-color);
            font-size: 1.55rem;
            letter-spacing: -0.03em;
            margin-bottom: .35rem;
        }
        .best-for{
            font-size: .92rem;
            color: var(--text-muted);
            line-height: 1.55;
            max-width: 36rem;
        }
        .card-icon{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.25rem;
            height: 3.25rem;
            border-radius: 50%;
            background: var(--primary-soft);
            flex-shrink: 0;
            svg{
                font-size: 1.65rem;
                color: var(--primary-color);
            }
        }
    }

    .description{
        padding: 1rem 0 .5rem 0;
        line-height: 1.65;
        color: var(--text-muted);
    }

    .includes{
        padding: .5rem 0 1rem 0;
        li{
            display: flex;
            align-items: flex-start;
            gap: .6rem;
            padding: .25rem 0;
            svg{
                font-size: 1.1rem;
                color: var(--primary-color);
                flex-shrink: 0;
                margin-top: .15rem;
            }
        }
    }

    .price-direction{
        margin-bottom: 0;
        padding: .9rem 1rem;
        border-radius: var(--radius-md);
        border: 1px solid var(--border-color);
        background: var(--surface-muted);
        font-size: .92rem;
        line-height: 1.55;
        color: var(--text-muted);
        font-weight: 600;
    }

    .card-actions{
        margin-top: 1.25rem;
    }

    .card-cta{
        display: inline-flex;
    }

    .service-card.featured .price-direction{
        margin-bottom: 0;
    }

    .process-section{
        margin-top: 3rem;
        h4{
            color: var(--heading-color);
            font-size: 1.2rem;
            padding-bottom: .4rem;
        }
        .process{
            li{
                padding: .35rem 0;
                span{
                    color: var(--primary-color);
                    font-weight: 700;
                    margin-right: .6rem;
                }
            }
        }
        .cta{
            margin-top: 2rem;
        }
    }

    @media screen and (max-width: 640px){
        .card-head{
            padding-right: 0;
        }
        .service-card .badge{
            position: static;
            display: inline-block;
            margin-bottom: 1rem;
        }
    }
`;

export default ServicesPage;
