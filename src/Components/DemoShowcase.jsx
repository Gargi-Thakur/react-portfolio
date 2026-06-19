import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';
import { DEMO_DASHBOARD_URL, DEMO_DASHBOARD_NAME } from '../config';

const highlights = [
    'Low-stock alerts before bestsellers run dry',
    'Pending transfers approved without email chains',
    'Inventory value across every location in one view',
    'Reorder recommendations that cut guesswork and emergency buys',
];

const DemoShowcase = ({ compact = false, embedded = false }) => {
    const className = [
        compact ? 'compact' : '',
        embedded ? 'embedded' : '',
    ].filter(Boolean).join(' ');

    return (
        <DemoShowcaseStyled className={className}>
            <div className="demo-content">
                <p className="eyebrow">Example build</p>
                <h3>{DEMO_DASHBOARD_NAME}</h3>
                <p className="summary">
                    A sample multi-location retail operation that could not quickly see
                    stock levels, reorder needs, or transfer approvals. One dashboard.
                    Clear alerts. Decisions in minutes instead of spreadsheet marathons.
                </p>
                {!compact && (
                    <ul className="highlights">
                        {highlights.map((item) => (
                            <li key={item}>
                                <CheckIcon />
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
                {compact ? (
                    <NavLink to="/demo" className="example-link">
                        See problem, solution, and business value →
                    </NavLink>
                ) : (
                    <div className="demo-actions">
                        <NavLink to="/demo">
                            <OutlineButton title={'See Problem & Solution'} />
                        </NavLink>
                        <a
                            href={DEMO_DASHBOARD_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="demo-link"
                        >
                            <PrimaryButton title={'Open Live Dashboard'} />
                            <OpenInNewIcon className="external-icon" />
                        </a>
                    </div>
                )}
            </div>
        </DemoShowcaseStyled>
    );
};

const DemoShowcaseStyled = styled.section`
    margin-top: 3rem;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-xl);
    backdrop-filter: blur(16px);
    box-shadow: var(--shadow-lg);

    .demo-content{
        padding: 2rem;
    }

    .eyebrow{
        color: var(--primary-color);
        font-size: .8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: .5rem;
    }

    h3{
        font-family: 'Syne', sans-serif;
        color: var(--heading-color);
        font-size: 1.6rem;
        letter-spacing: -0.03em;
        margin-bottom: .75rem;
    }

    .summary{
        max-width: 40rem;
        line-height: 1.6;
        color: var(--text-muted);
    }

    .example-link{
        display: inline-block;
        margin-top: 1rem;
        font-size: .92rem;
        font-weight: 700;
        color: var(--primary-color);
        &:hover{
            text-decoration: underline;
        }
    }

    .highlights{
        margin-top: 1.25rem;
        li{
            display: flex;
            align-items: flex-start;
            gap: .6rem;
            padding: .3rem 0;
            svg{
                font-size: 1.1rem;
                color: var(--primary-color);
                flex-shrink: 0;
                margin-top: .15rem;
            }
        }
    }

    .demo-actions{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1.5rem;
        align-items: center;
    }

    .demo-link{
        display: inline-flex;
        align-items: center;
        gap: .5rem;
        .external-icon{
            font-size: 1.1rem;
            color: var(--font-light-color);
        }
    }

    &.compact{
        margin-top: 1.5rem;
        border-left-width: 3px;
        box-shadow: none;
        .demo-content{
            padding: 1.25rem 1.5rem;
        }
        h3{
            font-size: 1.25rem;
        }
        .summary{
            font-size: .95rem;
        }
    }

    &.embedded{
        margin-top: 1.25rem;
        margin-bottom: 0;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg);
        background: var(--surface-muted);
        box-shadow: none;
        backdrop-filter: none;

        .demo-content{
            padding: 1.15rem 1.25rem;
        }

        h3{
            font-size: 1.15rem;
            margin-bottom: .5rem;
        }

        .summary{
            font-size: .92rem;
        }

        .example-link{
            margin-top: .85rem;
            margin-bottom: 0;
        }
    }
`;

export default DemoShowcase;
