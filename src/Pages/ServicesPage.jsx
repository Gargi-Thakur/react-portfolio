import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import DemoShowcase from '../Components/DemoShowcase';
import InsightsIcon from '@mui/icons-material/Insights';
import MailOutlineIcon from '@mui/icons-material/MailOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CheckIcon from '@mui/icons-material/Check';
import useDocumentMeta from '../hooks/useDocumentMeta';

const ServicesPage = () => {
    useDocumentMeta(
        'Services | Gargi Thakur - AI Automation for Small Businesses',
        'Custom AI insights dashboards and email & workflow automation for small businesses. Book a free consultation to discuss scope and next steps.'
    );

    return (
        <MainLayout>
            <Title
                title={'Services'}
                subtitle={'Two core offerings for small businesses. Every project starts with a free consultation so we can scope what you actually need.'}
            />
            <ServicesPageStyled>
                <InnerLayout>
                    <p className="intro">
                        Pricing depends on your data sources, workflows, and how much you
                        want automated. Book a consultation and I will walk through options
                        with you honestly, with no obligation.
                    </p>

                    <div className="service-card featured">
                        <div className="badge">Lead Offer</div>
                        <div className="card-head">
                            <div className="card-icon"><InsightsIcon /></div>
                            <h3>AI Insights Dashboard</h3>
                        </div>
                        <p className="description">
                            A custom dashboard wired to your sales and ecommerce data that
                            surfaces plain-language AI insights: what's selling, what's
                            slowing down, and what stock or raw materials to reorder, and
                            when.
                        </p>
                        <ul className="includes">
                            <li><CheckIcon /> Connected directly to your existing sales / ecommerce data</li>
                            <li><CheckIcon /> Plain-language insights: no charts to decode, no jargon</li>
                            <li><CheckIcon /> Reorder alerts for stock and raw materials</li>
                            <li><CheckIcon /> Monitored, maintained, and lightly improved every month</li>
                        </ul>
                        <DemoShowcase compact />
                        <p className="consult-note">
                            Want to see what this looks like first? Explore the live demo above,
                            then book a call to talk about your business.
                        </p>
                        <NavLink to="/contact">
                            <PrimaryButton title={'Book a Free Consultation'} />
                        </NavLink>
                    </div>

                    <div className="service-card">
                        <div className="card-head">
                            <div className="card-icon"><MailOutlineIcon /></div>
                            <h3>AI Email &amp; Workflow Automation</h3>
                        </div>
                        <p className="description">
                            Routine email handling, lead follow-up, and client scheduling,
                            with drafted replies queued up for your review. Nothing slips
                            through the cracks, and the phone tag stops.
                        </p>
                        <ul className="includes">
                            <li><CheckIcon /> Incoming email sorted and prioritized automatically</li>
                            <li><CheckIcon /> Replies drafted in your voice, ready for one-click review</li>
                            <li><CheckIcon /> Every lead followed up within minutes, not days</li>
                            <li><CheckIcon /> Clients book, reschedule, and get reminders on autopilot</li>
                        </ul>
                        <p className="consult-note">
                            Not sure if your inbox or follow-up process is a good fit? Tell me
                            what your team does today and I will say straight whether automation
                            can help.
                        </p>
                        <NavLink to="/contact">
                            <PrimaryButton title={'Book a Free Consultation'} />
                        </NavLink>
                    </div>

                    <div className="addon-card">
                        <div className="card-head">
                            <div className="card-icon small"><StorefrontIcon /></div>
                            <h4>Add-on: Ecommerce Website</h4>
                        </div>
                        <p className="description">
                            A clean, fast online store built by a full-stack developer, often
                            bundled with an AI Insights Dashboard when you need both sales
                            visibility and a storefront.
                        </p>
                    </div>

                    <div className="process-section">
                        <h4>How it works</h4>
                        <ol className="process">
                            <li><span>1.</span> Free consultation: we map where your time and money are leaking</li>
                            <li><span>2.</span> Custom proposal: exact scope, timeline, and deliverables in writing</li>
                            <li><span>3.</span> Build &amp; handoff: you review and approve before anything goes live</li>
                            <li><span>4.</span> Ongoing support: monitoring, fixes, and small improvements as needed</li>
                        </ol>
                        <div className="cta">
                            <NavLink to="/contact">
                                <PrimaryButton title={'Book a Free Consultation'} />
                            </NavLink>
                        </div>
                    </div>
                </InnerLayout>
            </ServicesPageStyled>
        </MainLayout>
    );
};

const ServicesPageStyled = styled.section`
    .intro{
        max-width: 46rem;
        padding-bottom: 1rem;
        line-height: 1.6;
    }

    .service-card{
        position: relative;
        background-color: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: .85rem;
        padding: 2rem;
        margin-top: 2rem;
        box-shadow: var(--shadow-lg);
        transition: border-color .2s ease, transform .2s ease;
        &:hover{
            border-color: var(--primary-color);
            transform: translateY(-2px);
        }
        &.featured{
            border-color: var(--primary-color);
            border-left: 4px solid var(--primary-color);
        }

        .badge{
            position: absolute;
            top: 1.2rem;
            right: 1.2rem;
            background-color: var(--primary-soft);
            color: var(--primary-color);
            font-size: .75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: .3rem .75rem;
            border-radius: 999px;
        }
    }

    .card-head{
        display: flex;
        align-items: center;
        gap: 1rem;
        h3{
            color: var(--heading-color);
            font-size: 1.55rem;
        }
        h4{
            color: var(--heading-color);
            font-size: 1.2rem;
        }
        .card-icon{
            display: flex;
            align-items: center;
            svg{
                font-size: 2.8rem;
                color: var(--primary-color);
            }
            &.small svg{
                font-size: 2rem;
            }
        }
    }

    .description{
        padding: 1rem 0 .5rem 0;
    }

    .includes{
        padding: .5rem 0 1rem 0;
        li{
            display: flex;
            align-items: center;
            gap: .6rem;
            padding: .25rem 0;
            svg{
                font-size: 1.1rem;
                color: var(--primary-color);
                flex-shrink: 0;
            }
        }
    }

    .consult-note{
        margin-bottom: 1.25rem;
        padding: 1rem 1.1rem;
        border: 1px solid var(--border-color);
        border-radius: .65rem;
        background: var(--surface-muted);
        font-size: .95rem;
        line-height: 1.55;
        color: var(--text-muted);
    }

    .addon-card{
        background-color: transparent;
        border: 1px dashed var(--border-color);
        border-radius: .85rem;
        padding: 1.5rem 2rem;
        margin-top: 2rem;
        .description{
            padding-bottom: 0;
        }
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
`;

export default ServicesPage;
