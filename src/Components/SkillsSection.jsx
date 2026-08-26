import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SkillCard from '../Components/SkillCard';
import InsightsIcon from '@mui/icons-material/Insights';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const SkillsSection = () => {
    return (
        <InnerLayout>
            <SkillsSectionStyled>
                <Title
                    as="h2"
                    title={'What I Do'}
                    subtitle={'The $999 assessment is the on-ramp. Implementation is where we scale.'}
                />
                <div className="skills">
                    <SkillCard
                        icon={<InsightsIcon />}
                        title={'AI Tools Assessment'}
                        paragraph={"The on-ramp. A 45-minute call, then a custom report of the 3–7 AI tools that fit your business: priority matrix, 4-day quick-start plan, and the dollar impact of each fix. It finds 5+ hours/week, or you pay nothing."}
                    />
                    <SkillCard
                        icon={<ManageSearchIcon />}
                        title={'Implementation'}
                        paragraph={"After the assessment: automation builds, custom workflows, knowledge systems, and full AI implementation. Fixed price, scoped in writing, delivered in weeks."}
                    />
                    <SkillCard
                        icon={<AutorenewIcon />}
                        title={'Proof, Not Promises'}
                        paragraph={"I build my own systems first. The NovaFit AI Inventory Hub is working software you can open and click through — the same standard your build gets."}
                    />
                </div>
                <p className="stack-note">
                    <NavLink to="/proof" className="services-link">
                        See the NovaFit example
                    </NavLink>
                    {' '}(multi-location inventory dashboard) or visit{' '}
                    <NavLink to="/implementation" className="services-link">Implementation</NavLink>
                    {' '}for the expansion menu after the assessment.
                </p>
            </SkillsSectionStyled>
        </InnerLayout>
    )
}

const SkillsSectionStyled = styled.section`
    margin-top: 0;
    padding-top: 0;

    > div:first-child{
        margin-bottom: 1.25rem;
    }

    .skills{
        margin-top: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        align-items: stretch;
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
