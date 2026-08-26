import React from 'react';
import styled from 'styled-components';

const PHASES = [
    {
        n: '01',
        name: 'Discovery call',
        time: '45 min',
        text: 'Walk me through a normal day: what you dread, where work piles up, what you’ve already tried. I’ll listen. No pitch.',
    },
    {
        n: '02',
        name: 'AI analysis',
        time: 'on my side',
        text: 'I match that to tools that fit, including ones I use myself, and cut it down to 3–7.',
    },
    {
        n: '03',
        name: 'Your report',
        time: 'within the week',
        text: 'Top 3, what to do first, notes on each tool, a 4-day start plan, and a dollar figure for each fix.',
    },
    {
        n: '04',
        name: 'Review call',
        time: '30 min',
        text: 'We go through the list together and decide what you’ll try yourself versus what you’d want built.',
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
