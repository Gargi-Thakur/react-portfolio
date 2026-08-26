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
                    title={'The work'}
                    subtitle={'The $999 assessment first. A build after, if you want one.'}
                />
                <div className="skills">
                    <SkillCard
                        icon={<InsightsIcon />}
                        title={'AI Tools Assessment'}
                        paragraph={"A 45-minute call, then a report of the 3–7 tools that fit: what to do first, a 4-day start plan, and what each fix is worth. 5+ hours/week, or you get the money back."}
                    />
                    <SkillCard
                        icon={<ManageSearchIcon />}
                        title={'Implementation'}
                        paragraph={"After the report: automations, custom workflows, knowledge systems, or a fuller build. Fixed price, written scope, usually weeks not months."}
                    />
                    <SkillCard
                        icon={<AutorenewIcon />}
                        title={'A working example'}
                        paragraph={"I built the NovaFit inventory dashboard so you can click around. Same bar your build has to clear: it has to work, not just look like a slide."}
                    />
                </div>
                <p className="stack-note">
                    <NavLink to="/proof" className="services-link">
                        See the NovaFit example
                    </NavLink>
                    {' — fake retailer, real dashboard. Or see '}
                    <NavLink to="/implementation" className="services-link">Implementation</NavLink>
                    {' for what a build looks like after the assessment.'}
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
