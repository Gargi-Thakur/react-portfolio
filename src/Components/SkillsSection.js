import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SkillCard from '../Components/SkillCard';
import htmlCssJs from '../img/html-css-js.png';
import mernStack from '../img/MERN-logo.png';
import webDesign from '../img/web-design.png';

function SkillsSection() {
    return (
        <InnerLayout>
            <SkillsSectionStyled>
                <Title title={'Skills'} span={'Skills'} />
                <div className="skills">
                    <SkillCard
                        image={htmlCssJs}
                        title={'HTML / CSS / JS'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                    <div className="mid-card">
                        <SkillCard 
                            image={mernStack} 
                            title={'MERN Stack'} 
                            paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                        />
                    </div>
                    <SkillCard
                        image={webDesign}
                        title={'Web Design'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                </div>
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
`;

export default SkillsSection;
