import React from 'react';
import styled from 'styled-components';

const PHASES = [
    {
        n: '01',
        name: 'Discovery call',
        time: '45 min',
        text: 'You walk me through a normal day — what you dread, where work piles up, what you’ve tried. No pitch, just listening.',
    },
    {
        n: '02',
        name: 'AI analysis',
        time: 'behind the scenes',
        text: 'I analyze your workflows against hundreds of AI tools and pick the 3–7 that actually fit your business.',
    },
    {
        n: '03',
        name: 'Your custom report',
        time: 'within the week',
        text: 'Executive summary, priority matrix, tool-by-tool recommendations, a 4-day quick-start plan, and the dollar impact of each fix.',
    },
    {
        n: '04',
        name: 'Review call',
        time: '30 min',
        text: 'We walk through every recommendation together. Then we decide what’s urgent, DIY or help, and your timeline.',
    },
];

const PhaseSteps = () => (
    <PhaseStepsStyled>
        {PHASES.map((p) => (
            <li key={p.n}>
                <div className="step-head">
                    <span className="num">{p.n}</span>
                    <span className="time">{p.time}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
            </li>
        ))}
    </PhaseStepsStyled>
);

const PhaseStepsStyled = styled.ol`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
    padding: 0;
    @media screen and (max-width: 978px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 620px){
        grid-template-columns: 1fr;
    }
    li{
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg, 18px);
        background: var(--surface-muted);
        padding: 1.5rem;
        .step-head{
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: .85rem;
            .num{
                font-family: 'Syne', sans-serif;
                font-weight: 700;
                font-size: 1.1rem;
                background: var(--gradient-primary);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }
            .time{
                font-size: .72rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: .08em;
                color: var(--text-muted);
            }
        }
        h3{
            font-family: 'Syne', sans-serif;
            color: var(--heading-color);
            font-size: 1.05rem;
            margin-bottom: .5rem;
        }
        p{
            color: var(--text-muted);
            font-size: .9rem;
            line-height: 1.65;
        }
    }
`;

export default PhaseSteps;
