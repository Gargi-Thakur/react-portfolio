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
                    subtitle={'Three focused offers for small businesses with real operations problems, not vague AI experiments.'}
                />
                <div className="skills">
                    <SkillCard
                        icon={<InsightsIcon />}
                        title={'Operations Dashboard'}
                        paragraph={"One screen for the 3–5 metrics your team checks every week: stock levels, reorder needs, sales trends, or transfer status. Built on your existing data so managers decide faster and stop living in spreadsheets."}
                    />
                    <SkillCard
                        icon={<ManageSearchIcon />}
                        title={'Workflow Automation Audit'}
                        paragraph={"A structured review of where manual work repeats: emails, follow-ups, order checks, inventory checks. You leave with an automation map and the top 3 fixes ranked by time and money saved."}
                    />
                    <SkillCard
                        icon={<AutorenewIcon />}
                        title={'Monthly Automation Partner'}
                        paragraph={"Ongoing dashboard maintenance, small automations, and reporting improvements for teams that need a developer on call without hiring full time."}
                    />
                </div>
                <p className="stack-note">
                    <NavLink to="/demo" className="services-link">
                        See the NovaFit example
                    </NavLink>
                    {' '}(multi-location inventory dashboard) or visit{' '}
                    <NavLink to="/services" className="services-link">Services</NavLink>
                    {' '}to pick the right starting point.
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
