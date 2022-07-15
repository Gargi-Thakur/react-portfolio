import React from 'react'
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';

const HomePage = () => (
    <HomePageStyled>
        <div className="particle-con">
            <Particle />
        </div>
        <ContainerStyled>
            <h1>Hi, I'm <span>Gargi Thakur</span></h1>
            <p>
                A Front-end Developer based in Vancouver, BC, Canada.

                I create custom websites and apps to help people go further online.
            </p>
            <IconGroupStyled>
                <IconLinkStyled href="https://www.linkedin.com/in/gargithakur94/" className="i-linkedin" target="_blank" rel="noreferrer" >
                    <LinkedinIcon />
                </IconLinkStyled>
                <IconLinkStyled href="https://github.com/Gargi-Thakur" className="i-github" target="_blank" rel="noreferrer" >
                    <GithubIcon />
                </IconLinkStyled>
                <IconLinkStyled href="https://twitter.com/GargiGingerly" className="icon i-twitter" target="_blank" rel="noreferrer" >
                    <TwitterIcon />
                </IconLinkStyled>
            </IconGroupStyled>
        </ContainerStyled>
    </HomePageStyled>
)

const ContainerStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
`

const IconGroupStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`

const IconLinkStyled = styled.a`
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
`
const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;     
`;

export default HomePage;
