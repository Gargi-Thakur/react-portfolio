import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

function InfoSection() {
    return (
        <InfoSectionStyled>
            <div className="content">
                <h4>Hi, I am <span>Gargi</span></h4>
                <p className="paragraph">
                    I’m a web developer based in Vancouver. I have background in Life Sciences. And while working as a Microbiologist in the family-owned pharmaceutical consultancy company in India, I found interest in building the company website on my own. This led me to pursue Web and Mobile App Development program in Vancouver, Canada which helped me to understand not only the concepts of web development but also the UI/UX design concepts. I want to keep learning and continue to challenge myself and do things that matter. I am looking forward to working with a team of talented people to create something that will help people go further online.
                    
                </p>              
                <br />
                <PrimaryButton title={'Download Resume'} />
            </div>
        </InfoSectionStyled>
    )
}


const InfoSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px) {
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content {
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .content {
        width: 100%;
        h4 {
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 1rem 0;
        }
    }
`;
export default InfoSection;
