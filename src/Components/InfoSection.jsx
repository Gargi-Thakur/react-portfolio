import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import AssessmentCTA from './AssessmentCTA';
import resume from '../data/Gargi_Resume2025.pdf';

const InfoSection = () => {
    return (
        <InfoSectionStyled>
            <div className="content">
                <h4>Hi, I’m <span>Gargi</span></h4>
                <p className="paragraph">
                    I work with small businesses stuck in copy-paste, inbox chasing, and
                    tools they bought and never opened. I start with an assessment so we
                    know what would save time before anyone spends money building the
                    wrong thing. One week, $999. If I don’t find 5+ hours a week, you get
                    that back.
                </p>
                <p className="paragraph">
                    I’m a full-stack developer, so I can wire this into the software you
                    already use. I used to work in life sciences, which is a polite way of
                    saying I like mapping a messy process before I automate it.
                </p>
                <p className="paragraph">
                    I’m based in Vancouver. If something in your week feels like it
                    shouldn’t still be manual, write me.
                </p>
                <br />
                <div className="buttons">
                    <AssessmentCTA />
                    <a href={resume} download="Gargi_Resume2025.pdf"><PrimaryButton title={'Download Resume'} /></a>
                </div>
            </div>
        </InfoSectionStyled>
    )
}

const InfoSectionStyled = styled.div`
    margin-top: 0;
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
            font-family: 'Syne', sans-serif;
            font-size: 1.75rem;
            color: var(--heading-color);
            font-weight: 700;
            letter-spacing: -0.03em;
            span {
                font-size: inherit;
                font-family: inherit;
                color: var(--primary-color);
            }
        }
        .paragraph {
            color: var(--text-muted);
            padding: .6rem 0;
        }
        .buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
`;

export default InfoSection;
