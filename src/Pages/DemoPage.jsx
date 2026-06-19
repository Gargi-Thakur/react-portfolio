import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { DEMO_DASHBOARD_URL, DEMO_DASHBOARD_NAME } from '../config';

const audienceBenefits = [
    'See stock levels across all locations in one place',
    'Spot low inventory and slow-moving products early',
    'Review and approve stock transfers without email chains',
    'Track trends over time with clear charts and KPIs',
];

const exploreAreas = [
    {
        area: 'Dashboard',
        shows: 'Live overview: total inventory, value, pending transfers, and aging products',
    },
    {
        area: 'Distribution centers',
        shows: 'Side-by-side view of Ontario, Groveport, and Brampton locations',
    },
    {
        area: 'Products',
        shows: 'Search and filter by SKU, category, or location; low-stock and aging alerts',
    },
    {
        area: 'Transfers',
        shows: 'Recommended stock moves between locations, with approve/reject workflow',
    },
    {
        area: 'Metrics',
        shows: 'Trends, health scores, and comparisons across locations and time periods',
    },
];

const dataFlowSteps = [
    {
        step: '1. Load sample data',
        detail: 'When the demo starts, realistic inventory data is created for three warehouses: products, stock counts, transfer suggestions, and 90 days of history.',
    },
    {
        step: '2. Keep numbers consistent',
        detail: 'All screens read from the same data source, so totals stay aligned as you move between Dashboard, Products, Transfers, and Metrics.',
    },
    {
        step: '3. Show clear insights',
        detail: 'The dashboard turns that data into cards, tables, and charts you can scan quickly without spreadsheet work.',
    },
    {
        step: '4. Save your actions',
        detail: 'When you approve or reject a transfer in the demo, that decision is saved and reflected immediately in the dashboard.',
    },
];

const DemoPage = () => {
    useDocumentMeta(
        `Live Demo Walkthrough | ${DEMO_DASHBOARD_NAME}`,
        'See what a custom AI inventory dashboard looks like: multi-location stock visibility, reorder alerts, transfer approvals, and trend KPIs.'
    );

    return (
        <MainLayout>
            <Title
                title={'Live Demo Walkthrough'}
                subtitle={'Explore what the NovaFit dashboard demo includes before opening the live app.'}
            />
            <DemoPageStyled>
                <InnerLayout>
                    <p className="intro">
                        <strong>{DEMO_DASHBOARD_NAME}</strong> is a working example of the
                        custom dashboards I build. Explore it first on this page, then open
                        the live app to click through each area yourself.
                    </p>

                    <section className="content-block">
                        <h3>Who this is for</h3>
                        <p>
                            If you run inventory across more than one warehouse or store and
                            spend too much time in spreadsheets, this demo shows a better way
                            to work:
                        </p>
                        <ul className="bullet-list">
                            {audienceBenefits.map((item) => (
                                <li key={item}>
                                    <CheckIcon />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="closing">
                            This is the kind of custom dashboard I build for retail and
                            operations teams that need visibility without enterprise complexity.
                        </p>
                    </section>

                    <section className="content-block">
                        <h3>What you can explore in the demo</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Area</th>
                                        <th>What it shows</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {exploreAreas.map((row) => (
                                        <tr key={row.area}>
                                            <td>{row.area}</td>
                                            <td>{row.shows}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="content-block">
                        <h3>How the demo works (in plain terms)</h3>
                        <p>
                            When you open the demo, sample inventory data is loaded once.
                            Every screen reads from that same source, so numbers stay
                            consistent as you click around.
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Step</th>
                                        <th>What happens</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataFlowSteps.map((row) => (
                                        <tr key={row.step}>
                                            <td>{row.step}</td>
                                            <td>{row.detail}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="note">
                            Your production dashboard would follow the same idea, but connect
                            to your real sales or inventory systems instead of sample data.
                        </p>
                    </section>

                    <div className="cta-row">
                        <a
                            href={DEMO_DASHBOARD_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="cta-link"
                        >
                            <PrimaryButton title={'Open Live Demo'} />
                            <OpenInNewIcon />
                        </a>
                        <NavLink to="/contact">
                            <PrimaryButton title={'Book a Free Consultation'} />
                        </NavLink>
                        <NavLink to="/services">
                            <PrimaryButton title={'View Services'} />
                        </NavLink>
                    </div>
                </InnerLayout>
            </DemoPageStyled>
        </MainLayout>
    );
};

const DemoPageStyled = styled.section`
    .intro{
        max-width: 46rem;
        line-height: 1.6;
        padding-bottom: 1rem;
        strong{
            color: var(--white-color);
        }
    }

    .content-block{
        margin-top: 2.5rem;
        h3{
            color: var(--heading-color);
            font-size: 1.35rem;
            margin-bottom: .75rem;
        }
        p{
            max-width: 46rem;
            line-height: 1.6;
        }
        .closing, .note{
            margin-top: 1rem;
        }
        .note{
            font-size: .95rem;
            opacity: .85;
        }
    }

    .bullet-list{
        margin-top: .75rem;
        li{
            display: flex;
            align-items: flex-start;
            gap: .6rem;
            padding: .3rem 0;
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
            width: 30%;
            white-space: nowrap;
        }
        tr:last-child td{
            border-bottom: none;
        }
    }

    .cta-row{
        margin-top: 3rem;
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
