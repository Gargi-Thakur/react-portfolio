import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import OutlineButton from '../Components/OutlineButton';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { DEMO_DASHBOARD_URL, DEMO_DASHBOARD_NAME } from '../config';

const features = [
    {
        feature: 'Low-stock SKUs',
        impact: 'Catch gaps before a bestseller goes out of stock and you lose the sale.',
    },
    {
        feature: 'Pending transfers',
        impact: 'Approve stock moves in minutes instead of chasing updates over email.',
    },
    {
        feature: 'Inventory value',
        impact: 'See total exposure across every location without opening five spreadsheets.',
    },
    {
        feature: 'Sales trends',
        impact: 'Spot what is slowing before cash gets tied up in the wrong products.',
    },
    {
        feature: 'Reorder recommendations',
        impact: 'Order the right quantity faster, with less guesswork and fewer emergency buys.',
    },
];

const businessValue = [
    'Fewer stockouts and lost sales from products running dry',
    'Faster ordering decisions because the numbers are already in one place',
    'Less time checking spreadsheets, inboxes, and warehouse tabs',
    'Clearer manager decisions on transfers, reorders, and slow movers',
];

const DemoPage = () => {
    useDocumentMeta(
        `NovaFit AI Inventory Hub | Multi-Location Stock Dashboard`,
        'See how a multi-location business can track stock, reorder needs, and transfer approvals in one operations dashboard with alerts and decision views.'
    );

    return (
        <MainLayout>
            <Title
                title={DEMO_DASHBOARD_NAME}
                label={'Case study'}
                subtitle={'Sample multi-location retail business. This is the kind of operations dashboard I build when stock visibility, reorders, and transfer approvals need to live in one place.'}
            />
            <DemoPageStyled>
                <InnerLayout>
                    <section className="content-block problem">
                        <p className="label">The problem</p>
                        <h3>Multi-location businesses cannot quickly see stock, reorder needs, or transfer approvals.</h3>
                        <p>
                            Inventory lives in spreadsheets, warehouse tabs, and email threads.
                            By the time someone notices a low SKU or a stuck transfer, you have
                            already lost sales, over-ordered the wrong item, or spent an hour
                            reconciling numbers that should take seconds.
                        </p>
                    </section>

                    <section className="content-block solution">
                        <p className="label">The solution</p>
                        <h3>An operations dashboard with alerts and decision views.</h3>
                        <p>
                            {DEMO_DASHBOARD_NAME} pulls stock, transfers, and trends into one
                            screen managers can scan in under a minute. Alerts surface what needs
                            attention. Decision views show what to reorder, move, or investigate
                            next, without decoding charts or building pivot tables.
                        </p>
                    </section>

                    <section className="content-block">
                        <p className="label">What you get</p>
                        <h3>Features that save time and protect revenue</h3>
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
                        <p className="label">Business value</p>
                        <h3>Less firefighting. More confident operations.</h3>
                        <ul className="bullet-list">
                            {businessValue.map((item) => (
                                <li key={item}>
                                    <CheckIcon />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="content-block live-note">
                        <p className="label">See it live</p>
                        <p>
                            The live dashboard uses realistic sample data for three warehouse
                            locations. Click through low-stock alerts, pending transfers, and
                            trend views yourself. Your version would connect to your real sales
                            or inventory systems instead of sample data.
                        </p>
                    </section>

                    <section className="closing-cta">
                        <h3>Want this for your business?</h3>
                        <p>
                            Book a workflow audit. I will map where stock visibility breaks
                            down today and whether an operations dashboard like this is the
                            right first step.
                        </p>
                        <div className="cta-row">
                            <NavLink to="/contact">
                                <PrimaryButton title={'Book a Workflow Audit'} />
                            </NavLink>
                            <a
                                href={DEMO_DASHBOARD_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="cta-link"
                            >
                                <OutlineButton title={'Open Live Dashboard'} />
                                <OpenInNewIcon />
                            </a>
                            <NavLink to="/services">
                                <OutlineButton title={'View Services'} />
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
