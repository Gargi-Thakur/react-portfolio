import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import OutlineButton from '../Components/OutlineButton';
import AssessmentCTA from '../Components/AssessmentCTA';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { DEMO_DASHBOARD_URL, DEMO_DASHBOARD_NAME } from '../config';

const features = [
    {
        feature: 'Low-stock SKUs',
        impact: 'See it before a bestseller is gone and you’ve lost the sale.',
    },
    {
        feature: 'Pending transfers',
        impact: 'Approve stock moves in minutes instead of chasing updates over email.',
    },
    {
        feature: 'Inventory value',
        impact: 'See the total across locations without opening five spreadsheets.',
    },
    {
        feature: 'Sales trends',
        impact: 'Notice what’s slowing before cash sits in the wrong products.',
    },
    {
        feature: 'Reorder recommendations',
        impact: 'Order the right amount, with fewer panic buys.',
    },
];

const businessValue = [
    'Fewer stockouts from products quietly running dry',
    'Faster reorder calls because the numbers are already together',
    'Less time hopping between spreadsheets, inboxes, and warehouse tabs',
    'Clearer calls on transfers, reorders, and slow movers',
];

const DemoPage = () => {
    useDocumentMeta(
        `NovaFit AI Inventory Hub | Multi-Location Stock Dashboard`,
        'See how a made-up multi-location shop can track stock, reorders, and transfer approvals on one screen.'
    );

    return (
        <MainLayout>
            <Title
                title={DEMO_DASHBOARD_NAME}
                label={'A sample build'}
                subtitle={'Made-up multi-location retailer, real dashboard. This is the kind of screen I build when stock, reorders, and transfer approvals are living in five places.'}
            />
            <DemoPageStyled>
                <InnerLayout>
                    <section className="content-block problem">
                        <p className="label">Why this exists</p>
                        <h3>You can’t see stock, reorders, or transfers without opening five tabs.</h3>
                        <p>
                            Inventory lives in spreadsheets, warehouse software, and email.
                            By the time someone notices a low SKU or a stuck transfer, you’ve
                            already lost a sale, ordered the wrong thing, or spent an hour
                            matching numbers that should take seconds.
                        </p>
                    </section>

                    <section className="content-block solution">
                        <p className="label">What I built</p>
                        <h3>One screen. Alerts when something’s off.</h3>
                        <p>
                            {`${DEMO_DASHBOARD_NAME} puts stock, transfers, and trends in one place a manager can scan in under a minute. Alerts flag what needs a look. You can see what to reorder, move, or check, without building a pivot table.`}
                        </p>
                    </section>

                    <section className="content-block">
                        <p className="label">On the screen</p>
                        <h3>What’s in the dashboard</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Why it matters</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {features.map((row) => (
                                        <tr key={row.feature}>
                                            <td>{row.feature}</td>
                                            <td>{row.impact}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="content-block">
                        <p className="label">Monday morning</p>
                        <h3>If you had this open at 9am</h3>
                        <ul className="bullet-list">
                            {businessValue.map((item) => (
                                <li key={item}>
                                    <CheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="content-block live-note">
                        <p className="label">See it live</p>
                        <p>
                            The live dashboard uses sample data for three warehouses. Click
                            through the low-stock alerts and pending transfers. Your version
                            would talk to your real sales or inventory systems instead.
                        </p>
                    </section>

                    <section className="closing-cta">
                        <h3>If stock is living in five places</h3>
                        <p>
                            Start with the assessment. I’ll tell you where the hours go, and
                            whether a dashboard like this is even the right first step.
                        </p>
                        <div className="cta-row">
                            <AssessmentCTA />
                            <a
                                href={DEMO_DASHBOARD_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="cta-link"
                            >
                                <OutlineButton title={'Open Live Dashboard'} />
                                <OpenInNewIcon />
                            </a>
                            <NavLink to="/implementation">
                                <OutlineButton title={'See how it’s built'} />
                            </NavLink>
                        </div>
                    </section>
                </InnerLayout>
            </DemoPageStyled>
        </MainLayout>
    );
};

const DemoPageStyled = styled.section`
    .label{
        color: var(--primary-color);
        font-size: .78rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .08em;
        margin-bottom: .5rem;
    }

    .content-block{
        margin-top: 2.75rem;
        h3{
            color: var(--heading-color);
            font-size: 1.35rem;
            margin-bottom: .75rem;
            max-width: 40rem;
        }
        p{
            max-width: 46rem;
            line-height: 1.65;
            color: var(--text-muted);
        }
        &.problem h3,
        &.solution h3{
            font-size: 1.45rem;
        }
    }

    .bullet-list{
        margin-top: .75rem;
        li{
            display: flex;
            align-items: flex-start;
            gap: .6rem;
            padding: .35rem 0;
            max-width: 46rem;
            svg{
                font-size: 1.1rem;
                color: var(--primary-color);
                flex-shrink: 0;
                margin-top: .15rem;
            }
        }
    }

    .table-wrap{
        margin-top: 1rem;
        overflow-x: auto;
        border: 1px solid var(--border-color);
        background-color: var(--background-dark-grey);
        border-radius: .65rem;
    }

    table{
        width: 100%;
        border-collapse: collapse;
        min-width: 520px;
        th, td{
            text-align: left;
            padding: .85rem 1rem;
            border-bottom: 1px solid var(--border-color);
            vertical-align: top;
        }
        th{
            color: var(--heading-color);
            font-size: .85rem;
            text-transform: uppercase;
            letter-spacing: .5px;
            background-color: rgba(255, 255, 255, 0.03);
        }
        td:first-child{
            color: var(--heading-color);
            font-weight: 600;
            width: 28%;
            white-space: nowrap;
        }
        tr:last-child td{
            border-bottom: none;
        }
    }

    .live-note{
        padding: 1.25rem 1.5rem;
        border: 1px solid var(--border-color);
        border-radius: .75rem;
        background: var(--surface-muted);
    }

    .closing-cta{
        margin-top: 3rem;
        padding: 2rem;
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-xl);
        background: var(--glass-bg);
        backdrop-filter: blur(16px);
        box-shadow: var(--shadow-lg);
        h3{
            font-family: 'Syne', sans-serif;
            color: var(--heading-color);
            font-size: 1.5rem;
            letter-spacing: -0.03em;
            margin-bottom: .65rem;
        }
        p{
            max-width: 40rem;
            line-height: 1.65;
            color: var(--text-muted);
        }
    }

    .cta-row{
        margin-top: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        .cta-link{
            display: inline-flex;
            align-items: center;
            gap: .4rem;
            svg{
                font-size: 1.1rem;
                color: var(--font-light-color);
            }
        }
    }
`;

export default DemoPage;
