import React from 'react'
import styled from 'styled-components';

const SkillCard = ({ image, title, paragraph }) => {
    return (
        <SkillCardStyled>
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </SkillCardStyled>
    )
}

const SkillCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
    }
    .container{
        padding: 1.2rem;
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            &::after{
                content: "";
                width: 5rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

        p{
            padding: .8rem 0;
        }

        img {
            height: 85px;
            width: 200px;
            object-fit: contain;

            
        }
    }
`;

export default SkillCard;
