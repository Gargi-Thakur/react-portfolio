import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import PrimaryButton from '../Components/PrimaryButton';
import useDocumentMeta from '../hooks/useDocumentMeta';
// import Particle from '../Components/Particle';

function HomePage() {
    useDocumentMeta(
        'Gargi Thakur | AI Automation for Small Businesses in Vancouver, BC',
        'I help small businesses save time with practical AI automation — email automation, lead follow-up, and scheduling. Full-stack developer based in Vancouver, BC.'
    );
    return (
        <HomePageStyled>
            <div className="particle-con">
                {/* <Particle /> */}
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Gargi Thakur</span></h1>
                <p>
                    I help small businesses save time with practical AI automation —
                    email handling, lead follow-up, and scheduling that runs itself.
                </p>
                <p className="credibility">
                    Full-stack developer (React, TypeScript/Next.js, Python/Django) based in Vancouver, BC, Canada.
                </p>
                <div className="cta">
                    <NavLink to="/contact">
                        <PrimaryButton title={'Book a Free Consultation'} />
                    </NavLink>
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/gargithakur94/" className="icon i-linkedin" target="_blank" rel="noreferrer" >
                        <LinkedinIcon />
                    </a>
                    <a href="https://github.com/Gargi-Thakur" className="icon i-github" target="_blank" rel="noreferrer" >
                        <GithubIcon />
                    </a>
                    <a href="https://twitter.com/GargiGingerly" className="icon i-twitter" target="_blank" rel="noreferrer" >
                        <TwitterIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .credibility{
            margin-top: .8rem;
            font-size: .95rem;
            opacity: .8;
        }

        .cta{
            margin-top: 1.5rem;
        }

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

        }
    }
`;

export default HomePage;
