import React from 'react';
import styled, { keyframes } from 'styled-components';

const stats = [
    { label: 'Total inventory', value: '12,480', trend: '+4.2%' },
    { label: 'Pending transfers', value: '7', trend: '3 need review' },
    { label: 'Low-stock SKUs', value: '14', trend: 'Reorder soon' },
    { label: 'Inventory value', value: '$284K', trend: 'Across 3 locations' },
];

const barHeights = [42, 58, 50, 72, 64, 80];

const fadeUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const growBar = keyframes`
    from { height: 0; }
    to { height: var(--bar-height); }
`;

const gentleFloat = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
`;

const alertPulse = keyframes`
    0%, 100% {
        border-color: var(--border-color);
        box-shadow: none;
    }
    50% {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px var(--primary-soft);
    }
`;

function DashboardPreview() {
    return (
        <DashboardPreviewStyled>
            <div className="browser-chrome">
                <div className="dots">
                    <span /><span /><span />
                </div>
                <div className="url-bar">demo1.gargithakur.com</div>
            </div>
            <div className="preview-body">
                <p className="preview-label">NovaFit AI Inventory Hub</p>
                <div className="stat-grid">
                    {stats.map((stat, index) => (
                        <div
                            className="stat-card"
                            key={stat.label}
                            style={{ '--delay': `${0.15 + index * 0.12}s` }}
                        >
                            <span className="stat-label">{stat.label}</span>
                            <strong className="stat-value">{stat.value}</strong>
                            <span className="stat-trend">{stat.trend}</span>
                        </div>
                    ))}
                </div>
                <div className="chart-row">
                    <div className="chart-block" style={{ '--delay': '0.65s' }}>
                        <span>Inventory trend</span>
                        <div className="bars">
                            {barHeights.map((height, index) => (
                                <i
                                    key={height}
                                    style={{
                                        '--bar-height': `${height}%`,
                                        '--delay': `${0.75 + index * 0.1}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="alert-block" style={{ '--delay': '0.9s' }}>
                        <span>Reorder alert</span>
                        <p>SKU AF-204 running low at Brampton. Suggested transfer: 120 units from Ontario.</p>
                    </div>
                </div>
            </div>
        </DashboardPreviewStyled>
    );
}

const DashboardPreviewStyled = styled.div`
    width: 100%;
    border: 1px solid var(--border-color);
    border-radius: .85rem;
    overflow: hidden;
    background: var(--surface-color);
    box-shadow: var(--shadow-lg);
    animation: ${gentleFloat} 5s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }

    .browser-chrome{
        display: flex;
        align-items: center;
        gap: .75rem;
        padding: .65rem .85rem;
        border-bottom: 1px solid var(--border-color);
        background: var(--surface-muted);
        .dots{
            display: flex;
            gap: .35rem;
            span{
                width: .55rem;
                height: .55rem;
                border-radius: 50%;
                background: var(--border-color);
                &:nth-child(1){ background: #f87171; }
                &:nth-child(2){ background: #fbbf24; }
                &:nth-child(3){ background: #4ade80; }
            }
        }
        .url-bar{
            flex: 1;
            font-size: .75rem;
            color: var(--text-muted);
            background: var(--surface-color);
            border: 1px solid var(--border-color);
            border-radius: .35rem;
            padding: .25rem .55rem;
        }
    }

    .preview-body{
        padding: 1rem;
    }

    .preview-label{
        font-size: .78rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .06em;
        color: var(--primary-color);
        margin-bottom: .75rem;
        animation: ${fadeUp} 0.6s ease forwards;
        animation-delay: 0.05s;
        opacity: 0;
    }

    .stat-grid{
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: .6rem;
    }

    .stat-card{
        border: 1px solid var(--border-color);
        border-radius: .55rem;
        padding: .65rem .7rem;
        background: var(--surface-muted);
        opacity: 0;
        animation: ${fadeUp} 0.55s ease forwards;
        animation-delay: var(--delay);
        .stat-label{
            display: block;
            font-size: .68rem;
            color: var(--text-muted);
            margin-bottom: .2rem;
        }
        .stat-value{
            display: block;
            color: var(--heading-color);
            font-size: 1rem;
            line-height: 1.2;
        }
        .stat-trend{
            display: block;
            margin-top: .2rem;
            font-size: .66rem;
            color: var(--primary-color);
        }
    }

    .chart-row{
        margin-top: .7rem;
        display: grid;
        grid-template-columns: 1.1fr .9fr;
        gap: .6rem;
    }

    .chart-block, .alert-block{
        border: 1px solid var(--border-color);
        border-radius: .55rem;
        padding: .65rem .7rem;
        background: var(--surface-muted);
        opacity: 0;
        animation: ${fadeUp} 0.55s ease forwards;
        animation-delay: var(--delay);
        span{
            display: block;
            font-size: .68rem;
            color: var(--text-muted);
            margin-bottom: .45rem;
        }
    }

    .alert-block{
        animation: ${fadeUp} 0.55s ease forwards, ${alertPulse} 2.8s ease-in-out infinite;
        animation-delay: var(--delay), 1.4s;
    }

    .bars{
        display: flex;
        align-items: flex-end;
        gap: .35rem;
        height: 3.2rem;
        i{
            display: block;
            flex: 1;
            height: 0;
            border-radius: .2rem .2rem 0 0;
            background: linear-gradient(180deg, var(--primary-color), var(--primary-soft));
            animation: ${growBar} 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            animation-delay: var(--delay);
        }
    }

    .alert-block p{
        font-size: .72rem;
        line-height: 1.45;
        color: var(--heading-color);
    }

    @media (prefers-reduced-motion: reduce) {
        .preview-label,
        .stat-card,
        .chart-block,
        .alert-block {
            opacity: 1;
            animation: none;
        }
        .bars i {
            height: var(--bar-height);
            animation: none;
        }
        .alert-block {
            border-color: var(--border-color);
            box-shadow: none;
        }
    }

    @media screen and (max-width: 520px){
        .chart-row{
            grid-template-columns: 1fr;
        }
    }
`;

export default DashboardPreview;
