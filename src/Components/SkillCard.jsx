import React from 'react'
import styled from 'styled-components';

const SkillCard = ({ image, icon, title, paragraph }) => {
    return (
        <SkillCardStyled>
            <div className="container">
                {image && <img src={image} alt={title} />}
                {!image && icon && <div className="card-icon">{icon}</div>}
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </SkillCardStyled>
    )
}

const SkillCardStyled = styled.div`
    height: 100%;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-xl);
    backdrop-filter: blur(16px);
    box-shadow: var(--shadow-lg);
    transition: border-color .3s ease, transform .3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow .3s ease;
    &:hover{
        border-color: var(--border-strong);
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg), var(--shadow-glow);
    }
    .container{
        height: 100%;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        h4{
            font-family: 'Syne', sans-serif;
            color: var(--heading-color);
            font-size: 1.15rem;
            padding: 1rem 0 .5rem;
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        p{
            flex: 1;
            padding: .25rem 0 0;
            color: var(--text-muted);
            font-size: .95rem;
            line-height: 1.65;
        }

        img {
            height: 85px;
            width: 200px;
            object-fit: contain;
        }

        .card-icon {
            width: 3.25rem;
            height: 3.25rem;
            border-radius: 50%;
            background: var(--primary-soft);
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                font-size: 1.65rem;
                color: var(--primary-color);
            }
        }
    }
`;

export default SkillCard;
