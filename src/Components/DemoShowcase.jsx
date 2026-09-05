import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { OpenInNewIcon, CheckIcon } from './Icons';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';
import { DEMO_DASHBOARD_URL, DEMO_DASHBOARD_NAME } from '../config';

const highlights = [
    'Low-stock alerts before bestsellers run dry',
    'Pending transfers approved without email chains',
    'Inventory value across every location in one view',
    'Reorder recommendations that cut guesswork and emergency buys',
];

const DemoShowcase = () => {
    return (
        <DemoShowcaseStyled>
            <div className="demo-content">
                <p className="eyebrow">Reference build</p>
                <h3>{DEMO_DASHBOARD_NAME}</h3>
                <p className="summary">
                    NovaFit is a demo multi-location retailer. The dashboard consolidates
                    stock levels, reorder needs, transfer approvals, and inventory value
                    across locations onto a single screen, with alerts when something needs
                    attention. It is working software you can click through, not a mockup.
                </p>
                <ul className="highlights">
                    {highlights.map((item) => (
                        <li key={item}>
                            <CheckIcon />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="demo-actions">
                    <NavLink to="/proof">
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
            </div>
        </DemoShowcaseStyled>
    );
};

const DemoShowcaseStyled = styled.section`
    margin-top: 0;
    margin-bottom: 0;
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
`;

export default DemoShowcase;
