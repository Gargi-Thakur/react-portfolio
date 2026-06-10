import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import InsightsIcon from '@mui/icons-material/Insights';
import MailOutlineIcon from '@mui/icons-material/MailOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CheckIcon from '@mui/icons-material/Check';
import useDocumentMeta from '../hooks/useDocumentMeta';

const ServicesPage = () => {
    useDocumentMeta(
        'Services & Pricing | Gargi Thakur - AI Automation for Small Businesses',
        'AI insights dashboards and email & workflow automation for small businesses. Transparent pricing, founding-client rates available. Built by a full-stack developer in Vancouver, BC.'
    );

    return (
        <MainLayout>
            <Title title={'Services'} span={'Services'} />
            <ServicesPageStyled>
                <InnerLayout>
                    <p className="intro">
                        Two core services, priced transparently. I'm currently taking on
                        founding clients at a significant discount in exchange for a
                        testimonial and permission to share the results as a case study.
                        Details below.
                    </p>

                    {/* Lead offer */}
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
                        <div className="pricing">
                            <div className="price-row">
                                <span className="price-label">Build</span>
                                <span className="price-value">$3,500–$5,000 <small>one-time</small></span>
                            </div>
                            <div className="price-row">
                                <span className="price-label">Care plan</span>
                                <span className="price-value">$250–$400<small>/month</small></span>
                            </div>
                            <div className="founding-rate">
                                <span className="founding-tag">Founding-client rate</span>
                                <p>
                                    <strong>$1,500 build</strong> (same monthly) for my first
                                    two clients, in exchange for a testimonial and permission
                                    to use your results as a case study.
                                </p>
                            </div>
                        </div>
                        <NavLink to="/contact">
                            <PrimaryButton title={'Book a Free Consultation'} />
                        </NavLink>
                    </div>

                    {/* Service 2 */}
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
                        <div className="pricing">
                            <div className="price-row">
                                <span className="price-label">Setup</span>
                                <span className="price-value">$2,000–$3,500 <small>one-time</small></span>
                            </div>
                            <div className="price-row">
                                <span className="price-label">Care plan</span>
                                <span className="price-value">$150–$300<small>/month</small></span>
                            </div>
                            <div className="founding-rate">
                                <span className="founding-tag">Founding-client rate</span>
                                <p>
                                    <strong>$750–$1,000 setup</strong> (same monthly), in
                                    exchange for a testimonial and a case study.
                                </p>
                            </div>
                        </div>
                        <NavLink to="/contact">
                            <PrimaryButton title={'Book a Free Consultation'} />
                        </NavLink>
                    </div>

                    {/* Add-on */}
                    <div className="addon-card">
                        <div className="card-head">
                            <div className="card-icon small"><StorefrontIcon /></div>
                            <h4>Add-on: Ecommerce Website</h4>
                        </div>
                        <p className="description">
                            A clean, fast online store, built by an actual full-stack
                            developer, typically <strong>$1,200–$2,500</strong> depending on
                            scope, or bundled at a discount with the AI Insights Dashboard.
                        </p>
                    </div>

                    {/* Founding client explainer */}
                    <div className="founding-explainer">
                        <h4>Why founding-client rates?</h4>
                        <p>
                            I'm building a portfolio of documented, real-world results. The
                            first two clients for each service get a steep discount on the
                            build; in return, you agree to provide an honest testimonial and
                            let me publish the outcome (anonymized if you prefer) as a case
                            study. The work itself is identical to full price: same scope,
                            same care plan, same support.
                        </p>
                        <h4>How it works</h4>
                        <ol className="process">
                            <li><span>1.</span> Free consultation: we map where your time and money are leaking</li>
                            <li><span>2.</span> Fixed-price proposal: exact scope, timeline, and deliverables in writing</li>
                            <li><span>3.</span> Build &amp; handoff: you review and approve before anything goes live</li>
                            <li><span>4.</span> Monthly care plan: monitoring, fixes, and small improvements; cancel anytime</li>
                        </ol>
                        <div className="cta">
                            <NavLink to="/contact">
                                <PrimaryButton title={"Claim a Founding Spot"} />
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
    }

    .service-card{
        position: relative;
        background-color: var(--background-dark-grey);
        border: 1px solid var(--border-color);
        border-top: 8px solid var(--border-color);
        padding: 2rem;
        margin-top: 2.5rem;
        transition: all .4s ease-in-out;
        &:hover{
            border-top: 8px solid var(--primary-color);
        }
        &.featured{
            border-top: 8px solid var(--primary-color);
        }

        .badge{
            position: absolute;
            top: 1.2rem;
            right: 1.2rem;
            background-color: var(--primary-color);
            color: white;
            font-size: .75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: .25rem .8rem;
            border-radius: 2px;
        }
    }

    .card-head{
        display: flex;
        align-items: center;
        gap: 1rem;
        h3{
            color: var(--white-color);
            font-size: 1.7rem;
        }
        h4{
            color: var(--white-color);
            font-size: 1.3rem;
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

    .pricing{
        border: 1px solid var(--border-color);
        padding: 1.2rem 1.5rem;
        margin-bottom: 1.5rem;

        .price-row{
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            padding: .3rem 0;
            .price-label{
                color: inherit;
                text-transform: uppercase;
                font-size: .8rem;
                letter-spacing: 1px;
            }
            .price-value{
                color: var(--white-color);
                font-weight: 600;
                font-size: 1.25rem;
                small{
                    font-size: .85rem;
                    font-weight: 400;
                    color: var(--font-light-color);
                }
            }
        }

        .founding-rate{
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px dashed var(--border-color);
            .founding-tag{
                display: inline-block;
                color: var(--primary-color);
                font-size: .8rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            p{
                padding-top: .3rem;
                font-size: 1rem;
                strong{
                    color: var(--white-color);
                }
            }
        }
    }

    .addon-card{
        background-color: transparent;
        border: 1px dashed var(--border-color);
        padding: 1.5rem 2rem;
        margin-top: 2.5rem;
        .description{
            padding-bottom: 0;
            strong{
                color: var(--white-color);
            }
        }
    }

    .founding-explainer{
        margin-top: 3.5rem;
        h4{
            color: var(--white-color);
            font-size: 1.3rem;
            padding: 1rem 0 .4rem 0;
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
