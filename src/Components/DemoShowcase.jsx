import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';
import { DEMO_DASHBOARD_URL } from '../config';

const highlights = [
    'Stock levels across multiple locations in one view',
    'Low-inventory and slow-moving product alerts',
    'Transfer recommendations with approve/reject workflow',
    'Trend charts and KPIs without decoding spreadsheets',
];

const DemoShowcase = ({ compact = false }) => {
    return (
        <DemoShowcaseStyled className={compact ? 'compact' : ''}>
            <div className="demo-content">
                <p className="eyebrow">Live demo</p>
                <h3>NovaFit AI Inventory Hub</h3>
                <p className="summary">
                    A working dashboard built with sample retail data so you can see
                    how a custom insights product looks and feels before you commit.
                    Your version would connect to your real sales or inventory systems.
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
                <div className="demo-actions">
                    <NavLink to="/demo">
                        <OutlineButton title={"See What's Inside"} />
                    </NavLink>
                    <a
                        href={DEMO_DASHBOARD_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="demo-link"
                    >
                        <PrimaryButton title={'Open Live Demo'} />
                        <OpenInNewIcon className="external-icon" />
                    </a>
                </div>
            </div>
        </DemoShowcaseStyled>
    );
};

const DemoShowcaseStyled = styled.section`
    margin-top: 3rem;
    background-color: var(--background-dark-grey);
    border: 1px solid var(--border-color);
    border-left: 4px solid var(--primary-color);

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
        color: var(--white-color);
        font-size: 1.6rem;
        margin-bottom: .75rem;
    }

    .summary{
        max-width: 40rem;
        line-height: 1.6;
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
        .demo-content{
            padding: 1.25rem 1.5rem;
        }
        h3{
            font-size: 1.25rem;
        }
        .summary{
            font-size: .95rem;
        }
        .demo-actions{
            margin-top: 1rem;
        }
    }
`;

export default DemoShowcase;
