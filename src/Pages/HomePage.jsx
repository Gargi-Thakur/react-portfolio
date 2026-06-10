import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import PrimaryButton from '../Components/PrimaryButton';
import useDocumentMeta from '../hooks/useDocumentMeta';

function HomePage() {
    useDocumentMeta(
        'Gargi Thakur | AI Insights Dashboards & Automation for Small Businesses',
        'Custom AI insights dashboards and email & workflow automation for small businesses. Know what\'s selling, what\'s slowing, and what to reorder. Full-stack developer in Vancouver, BC.'
    );
    return (
        <HomePageStyled>
            <div className="typography">
                <h1>Hi, I'm <span>Gargi Thakur</span></h1>
                <p className="lead">
                    I help small businesses save time with practical AI: sales dashboards
                    that tell you what to reorder, and automation for email, leads, and scheduling.
                </p>
                <p className="credibility">
                    Full-stack developer · Vancouver, BC
                </p>
                <div className="cta">
                    <NavLink to="/contact">
                        <PrimaryButton title={'Book a Free Consultation'} />
                    </NavLink>
                    <NavLink to="/services">
                        <PrimaryButton title={'Services & Pricing'} />
                    </NavLink>
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/gargithakur94/" className="icon i-linkedin" target="_blank" rel="noreferrer" >
                        <LinkedinIcon />
                    </a>
                    <a href="https://github.com/Gargi-Thakur" className="icon i-github" target="_blank" rel="noreferrer" >
                        <GithubIcon />
                    </a>
                    <a href="https://x.com/GargiGingerly" className="icon i-x" target="_blank" rel="noreferrer" >
                        <XIcon />
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
        max-width: 42rem;

        h1{
            margin-bottom: 1.25rem;
        }

        .lead{
            font-size: 1.15rem;
            line-height: 1.6;
            margin: 0 auto;
            max-width: 36rem;
        }

        .credibility{
            margin-top: 1rem;
            font-size: .9rem;
            opacity: .7;
            letter-spacing: 0.02em;
        }

        .cta{
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
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
