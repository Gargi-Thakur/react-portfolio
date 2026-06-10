import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SkillCard from '../Components/SkillCard';
import InsightsIcon from '@mui/icons-material/Insights';
import MailOutlineIcon from '@mui/icons-material/MailOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';

const SkillsSection = () => {
    return (
        <InnerLayout>
            <SkillsSectionStyled>
                <Title title={'What I Do'} span={'What I Do'} />
                <div className="skills">
                    <SkillCard
                        icon={<InsightsIcon />}
                        title={'AI Insights Dashboard'}
                        paragraph={"A custom dashboard wired to your sales and ecommerce data that tells you, in plain language, what's selling, what's slowing, and what stock or raw materials to reorder, and when. No spreadsheets to decode."}
                    />
                    <div className="mid-card">
                        <SkillCard
                            icon={<MailOutlineIcon />}
                            title={'Email & Workflow Automation'}
                            paragraph={"Routine email handling, lead follow-up, and client scheduling, with replies drafted for your review. Every enquiry gets answered within minutes, nothing slips through, and the phone tag stops."}
                        />
                    </div>
                    <SkillCard
                        icon={<StorefrontIcon />}
                        title={'Web & Ecommerce Development'}
                        paragraph={"Clean, fast online stores and websites built on a real engineering foundation (React, TypeScript/Next.js, Python/Django), so they integrate properly with your tools and keep working as you grow."}
                    />
                </div>
                <p className="stack-note">
                    Pricing for every service is published openly on the{' '}
                    <NavLink to="/services" className="services-link">Services page</NavLink>
                    , including discounted founding-client rates for my first few clients.
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
        .services-link{
            color: var(--primary-color);
            text-decoration: underline;
        }
    }
`;

export default SkillsSection;
