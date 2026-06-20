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
        'About | Gargi Thakur - Operations Dashboards & Workflow Automation',
        'Full-stack Software Developer in Vancouver, BC helping small businesses with operations dashboards, workflow audits, and practical automation.'
    );
    return (
        <MainLayout>
            <AboutStyled >
                <Title
                    title={'About'}
                    label={'Profile'}
                    subtitle={'Full-stack Software Developer in Vancouver, BC. I build operations dashboards and workflow automation so your team spends less time in spreadsheets and manual follow-ups.'}
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
