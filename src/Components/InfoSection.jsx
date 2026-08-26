import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import AssessmentCTA from './AssessmentCTA';
import resume from '../data/Gargi_Resume2025.pdf';

const InfoSection = () => {
    return (
        <InfoSectionStyled>
            <div className="content">
                <h4>Hi, I am <span>Gargi</span></h4>
                <p className="paragraph">
                    I help small businesses put AI to work on the manual tasks that slow
                    them down. Everything starts with the AI Tools Assessment: in one
                    week you get a custom report of the 3–7 AI tools that actually fit
                    your business — and it finds you 5+ hours a week or you pay nothing. The assessment is
                    the on-ramp. If you want the plan built for you, implementation is
                    where we scale.
                </p>
                <p className="paragraph">
                    I come at this as a full-stack software developer, which means I build the
                    whole system, not just one piece of it. Your automations and
                    custom tools integrate properly with the tools you already use and
                    keep working as your business grows. My background in Life Sciences
                    taught me to think in processes: before I automate anything, I map
                    out how the work actually flows, then remove the bottlenecks.
                </p>
                <p className="paragraph">
                    Based in Vancouver, BC, working with small businesses everywhere. If you're curious whether something in your day-to-day can be automated, the answer is probably yes. Let's talk.
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
