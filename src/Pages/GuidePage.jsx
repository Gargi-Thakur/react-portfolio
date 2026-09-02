import React from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import CopyBox from '../Components/CopyBox';
import FooterCTA from '../Components/FooterCTA';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { getGuideBySlug } from '../data/guides';

const GuidePage = () => {
    const { slug } = useParams();
    const guide = getGuideBySlug(slug);

    // Hooks must run unconditionally — call with safe fallbacks, redirect after.
    useDocumentMeta(
        guide ? `${guide.title} | Gargi Thakur` : 'Guide not found | Gargi Thakur',
        guide ? guide.description : ''
    );

    if (!guide) {
        return <Navigate to="/guides" replace />;
    }

    return (
        <MainLayout>
            <GuidePageStyled>
                <NavLink to="/guides" className="back-link">← All free guides</NavLink>

                <Title
                    label={`${guide.topic} · ${guide.tool}`}
                    title={guide.title}
                    subtitle={guide.description}
                />

                <p className="intro">{guide.intro}</p>

                <InnerLayout>
                    <ol className="steps">
                        {guide.steps.map((step) => (
                            <li key={step.n}>
                                <div className="step-head">
                                    <span className="num">{step.n}</span>
                                    <span className="eyebrow">{step.eyebrow}</span>
                                </div>
                                <h3>{step.heading}</h3>
                                <p>{step.body}</p>
                                {step.copy && <CopyBox text={step.copy} />}
                            </li>
                        ))}
                    </ol>
                </InnerLayout>

                <InnerLayout>
                    <div className="bridge-note">
                        <p>{guide.bridge}</p>
                    </div>
                </InnerLayout>

                <InnerLayout>
                    <FooterCTA />
                </InnerLayout>
            </GuidePageStyled>
        </MainLayout>
    );
};

const GuidePageStyled = styled.section`
    .back-link{
        display: inline-block;
        margin-bottom: 1.25rem;
        font-size: .85rem;
        font-weight: 600;
        color: var(--text-muted);
        transition: color .2s ease;
        &:hover{
            color: var(--primary-color);
        }
    }

    .intro{
        max-width: 46rem;
        color: var(--text-muted);
        font-size: 1.02rem;
        line-height: 1.75;
        margin-bottom: .5rem;
    }

    .steps{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        padding: 0;
        max-width: 46rem;

        li{
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg, 18px);
            background: var(--surface-muted);
            padding: 1.5rem;

            .step-head{
                display: flex;
                align-items: baseline;
                gap: .75rem;
                margin-bottom: .6rem;

                .num{
                    font-family: 'Syne', sans-serif;
                    font-weight: 700;
                    font-size: 1.1rem;
                    background: var(--gradient-primary);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                .eyebrow{
                    font-size: .72rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: .08em;
                    color: var(--text-muted);
                }
            }

            h3{
                font-family: 'Syne', sans-serif;
                color: var(--heading-color);
                font-size: 1.08rem;
                margin-bottom: .5rem;
            }

            p{
                color: var(--text-muted);
                font-size: .92rem;
                line-height: 1.7;
            }
        }
    }

    .bridge-note{
        max-width: 46rem;
        border-left: 3px solid var(--primary-color);
        background: var(--primary-soft);
        border-radius: 0 var(--radius-lg, 18px) var(--radius-lg, 18px) 0;
        padding: 1.1rem 1.4rem;

        p{
            color: var(--heading-color);
            font-size: .92rem;
            line-height: 1.7;
            font-weight: 600;
        }
    }
`;

export default GuidePage;
