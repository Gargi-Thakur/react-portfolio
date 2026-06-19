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
    background-color: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: .75rem;
    box-shadow: var(--shadow-lg);
    transition: border-color .2s ease, transform .2s ease;
    &:hover{
        border-color: var(--primary-color);
        transform: translateY(-2px);
    }
    .container{
        height: 100%;
        padding: 1.35rem;
        display: flex;
        flex-direction: column;
        h4{
            color: var(--heading-color);
            font-size: 1.2rem;
            padding: .75rem 0 .5rem;
            font-weight: 700;
        }

        p{
            flex: 1;
            padding: .25rem 0 0;
            color: var(--text-muted);
            font-size: .95rem;
            line-height: 1.55;
        }

        img {
            height: 85px;
            width: 200px;
            object-fit: contain;

            
        }

        .card-icon {
            height: 85px;
            display: flex;
            align-items: center;
            svg {
                font-size: 3.5rem;
                color: var(--primary-color);
            }
        }
    }
`;

export default SkillCard;
