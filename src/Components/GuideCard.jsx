import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/** Index-page card for one free guide. */
const GuideCard = ({ slug, topic, tool, title, description, readTime }) => (
    <GuideCardStyled to={`/guides/${slug}`}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        <div className="card-tags">
            <span className="topic-tag">{topic}</span>
            {tool && <span className="tool-tag">{tool}</span>}
        </div>
        <div className="card-footer">
            <span className="read-link">Read guide →</span>
            {readTime && <span className="read-time">{readTime}</span>}
        </div>
    </GuideCardStyled>
);

const GuideCardStyled = styled(NavLink)`
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xl);
    background: var(--glass-bg);
    backdrop-filter: blur(16px);
    box-shadow: var(--shadow-lg);
    padding: 1.5rem;
    transition: transform .25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow .25s ease, border-color .25s ease;

    &:hover{
        transform: translateY(-4px);
        border-color: var(--border-strong);
        box-shadow: var(--shadow-lg), var(--shadow-glow);

        .read-link{
            color: var(--primary-hover);
        }
    }

    h3{
        font-family: 'Syne', sans-serif;
        color: var(--heading-color);
        font-size: 1.1rem;
        letter-spacing: -0.01em;
        margin-bottom: .5rem;
        line-height: 1.35;
    }

    p{
        flex: 1;
        color: var(--text-muted);
        font-size: .9rem;
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    .card-tags{
        display: flex;
        flex-wrap: wrap;
        gap: .4rem;
        margin-bottom: 1.1rem;
    }

    .topic-tag,
    .tool-tag{
        font-size: .68rem;
        font-weight: 700;
        letter-spacing: .02em;
        border-radius: var(--radius-pill);
        padding: .3rem .7rem;
    }

    .topic-tag{
        color: var(--text-muted);
        background: var(--surface-muted);
        border: 1px solid var(--border-color);
    }

    .tool-tag{
        color: var(--primary-color);
        background: var(--primary-soft);
        border: 1px solid transparent;
    }

    .card-footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .75rem;
        margin-top: auto;
    }

    .read-link{
        font-size: .85rem;
        font-weight: 700;
        color: var(--primary-color);
        transition: color .2s ease;
    }

    .read-time{
        font-size: .74rem;
        color: var(--text-muted);
        white-space: nowrap;
    }
`;

export default GuideCard;
