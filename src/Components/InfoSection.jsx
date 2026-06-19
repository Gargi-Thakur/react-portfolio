import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import resume from '../data/Gargi_Resume2025.pdf';

const InfoSection = () => {
    return (
        <InfoSectionStyled>
            <div className="content">
                <h4>Hi, I am <span>Gargi</span></h4>
                <p className="paragraph">
                    I help small businesses see what is happening in their operations and
                    fix the manual work that slows them down. My lead offer is a Small
                    Business Operations Dashboard: the 3–5 metrics your team checks every
                    week, in one place, with alerts when something needs attention. If you
                    are not sure where to start, I run Workflow Automation Audits that
                    map where time and money leak before we build anything.
                </p>
                <p className="paragraph">
                    I come at this as a full-stack software developer, which means I build the
                    whole system, not just one piece of it. Your dashboards and
                    automations integrate properly with the tools you already use and
                    keep working as your business grows. My background in Life Sciences
                    taught me to think in processes: before I automate anything, I map
                    out how the work actually flows, then remove the bottlenecks.
                </p>
                <p className="paragraph">
                    Based in Vancouver, BC, working with small businesses everywhere. If you're curious whether something in your day-to-day can be automated, the answer is probably yes. Let's talk.
                </p>
                <br />
                <div className="buttons">
                    <NavLink to="/contact"><PrimaryButton title={'Book a Workflow Audit'} /></NavLink>
                    <a href={resume} download="Gargi_Resume2025.pdf"><PrimaryButton title={'Download Resume'} /></a>
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
            font-size: 1.6rem;
            color: var(--heading-color);
            font-weight: 700;
            span {
                font-size: inherit;
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
