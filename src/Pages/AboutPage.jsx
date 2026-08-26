import React from 'react'
import styled from 'styled-components';
import InfoSection from '../Components/InfoSection';
import DemoShowcase from '../Components/DemoShowcase';
import Title from '../Components/Title';
import { MainLayout } from '../styles/Layouts';
import SkillsSection from '../Components/SkillsSection';
import useDocumentMeta from '../hooks/useDocumentMeta';

const AboutPage = () => {
    useDocumentMeta(
        'About | Gargi Thakur — AI for Small Business',
        'Full-stack Software Developer in Vancouver, BC helping small businesses put AI to work — assessments, automation, and custom builds.'
    );
    return (
        <MainLayout>
            <AboutStyled >
                <Title
                    title={'About'}
                    label={'Profile'}
                    subtitle={'Full-stack Software Developer in Vancouver, BC. I put AI to work for my own business first, then bring what works to yours.'}
                />
                <InfoSection />
                <DemoShowcase />
                <SkillsSection />
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export default AboutPage
