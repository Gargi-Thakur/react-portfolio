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
        'Full-stack developer in Vancouver. I help small businesses put AI on the boring work: assessments, automations, and builds.'
    );
    return (
        <MainLayout>
            <AboutStyled >
                <Title
                    title={'About'}
                    label={'Vancouver'}
                    subtitle={'Full-stack developer in Vancouver. I try this on my own work first, then bring over what holds up.'}
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
