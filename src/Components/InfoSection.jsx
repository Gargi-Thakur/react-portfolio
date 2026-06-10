import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import resume from '../data/janResume.pdf';

const InfoSection = () => {
    return (
        <InfoSectionStyled>
            <div className="content">
                <h4>Hi, I am <span>Gargi</span></h4>
                <p className="paragraph">
                    I help small businesses save time with practical AI automation. If your team is buried in repetitive work — answering the same emails, chasing leads, juggling appointment bookings — I build systems that handle it for you, so you can focus on the work that actually grows your business.
                </p>
                <p className="paragraph">
                    I come at this as a full-stack developer (React, TypeScript/Next.js, Python/Django), which means your automations aren't held together with duct tape — they're built to integrate properly with the tools you already use and to keep working as your business grows. My background in Life Sciences taught me to think in processes: before I automate anything, I map out how the work actually flows, then remove the bottlenecks.
                </p>
                <p className="paragraph">
                    Based in Vancouver, BC, working with small businesses everywhere. If you're curious whether something in your day-to-day can be automated, the answer is probably yes — let's talk.
                </p>
                <br />
                <div className="buttons">
                    <NavLink to="/contact"><PrimaryButton title={"Let's Talk"} /></NavLink>
                    <a href={resume} download="Gargi_Resume.pdf"><PrimaryButton title={'Download Resume'} /></a>
                </div>
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
