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
        'About | Gargi Thakur - AI Automation for Small Businesses',
        'Full-stack developer in Vancouver, BC helping small businesses automate email, lead follow-up, and scheduling with practical AI systems.'
    );
    return (
        <MainLayout>
            <AboutStyled >
                <Title
                    title={'About'}
                    subtitle={'I build dashboards that show what to reorder and automation that handles email, leads, and scheduling, so your team spends less time in spreadsheets.'}
                />
                <InfoSection />
                <DemoShowcase />
                <SkillsSection />
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
