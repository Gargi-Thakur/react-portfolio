import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SkillCard from '../Components/SkillCard';
import MailOutlineIcon from '@mui/icons-material/MailOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const SkillsSection = () => {
    return (
        <InnerLayout>
            <SkillsSectionStyled>
                <Title title={'Services'} span={'Services'} />
                <div className="skills">
                    <SkillCard
                        icon={<MailOutlineIcon />}
                        title={'Email Automation'}
                        paragraph={"Stop spending hours in your inbox. I build systems that sort incoming email, draft replies in your voice, and route what matters to the right person — so routine messages handle themselves."}
                    />
                    <div className="mid-card">
                        <SkillCard
                            icon={<TrendingUpIcon />}
                            title={'Lead Follow-up'}
                            paragraph={"Leads go cold fast. I set up automated follow-up that responds to every enquiry within minutes, nurtures prospects over time, and tells you exactly who's ready to buy — no one slips through the cracks."}
                        />
                    </div>
                    <SkillCard
                        icon={<EventAvailableIcon />}
                        title={'Smart Scheduling'}
                        paragraph={"Bookings, reminders, rescheduling, and no-show reduction on autopilot. Your clients book themselves in, your calendar stays organized, and you stop playing phone tag."}
                    />
                </div>
                <p className="stack-note">
                    Every automation is built on a real engineering foundation — React, TypeScript/Next.js, and Python/Django — so it integrates cleanly with your existing tools and keeps working as you grow.
                </p>
            </SkillsSectionStyled>
        </InnerLayout>
    )
}

const SkillsSectionStyled = styled.section`
    .skills{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }

    .stack-note{
        margin-top: 2rem;
        font-size: .95rem;
        opacity: .8;
    }
`;

export default SkillsSection;
