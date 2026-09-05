import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LinkedinIcon } from '../Components/Icons';
import OutlineButton from '../Components/OutlineButton';
import TextLink from '../Components/TextLink';
import DashboardPreview from '../Components/DashboardPreview';
import AssessmentCTA from '../Components/AssessmentCTA';
import GuaranteeBadge from '../Components/GuaranteeBadge';
import FooterCTA from '../Components/FooterCTA';
import GuideCard from '../Components/GuideCard';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { GUIDES } from '../data/guides';

const featuredGuides = GUIDES.slice(0, 3);

const proofPoints = [
    { value: '3–7', label: 'AI tools picked for your business' },
    { value: '1 wk', label: 'From first call to finished report' },
    { value: '5+ hrs', label: 'Found per week — or a full refund' },
];

const howItWorks = [
    {
        step: '1',
        name: 'Discovery call',
        text: '45 minutes. You walk me through a normal day — what you dread, where work piles up, what you’ve tried. I pull the problems. No pitch.',
    },
    {
        step: '2',
        name: 'AI analysis',
        text: 'I match your workflows to the tools that fit — then add picks from my own toolkit. You get 3 to 7 recommendations, not a generic list.',
    },
    {
        step: '3',
        name: 'The report',
        text: 'Top-3 summary, priority matrix, tool-by-tool recommendations, a 4-day quick-start, and the dollars each fix is worth.',
    },
    {
        step: '4',
        name: 'Review call',
        text: '30 minutes. We walk every recommendation together, then decide what’s urgent, DIY or help, and your timeline.',
    },
];

function HomePage() {
    useDocumentMeta(
        'AI Automation for Small Business in Vancouver | Gargi Thakur',
        'AI automation for small businesses in Vancouver. The $999 AI Tools Assessment finds the 3–7 tools your week actually needs — 5+ hours back, or you pay nothing.'
    );
    return (
        <HomePageStyled>
            <section className="hero">
                <p className="eyebrow hero-eyebrow">
                    <span className="dot" aria-hidden="true" />
                    Vancouver, BC · AI automation for small business
                </p>
                <div className="hero-copy">
                    <h1>
                        {'The 3–7 AI tools your business actually needs. I find you '}
                        <span className="gradient-text">5+ hours a week</span>
                        {' — or you pay nothing.'}
                    </h1>
                    <p className="lead">
                        I do AI automation for small businesses in Vancouver, starting with
                        the AI Tools Assessment: a custom report in one week, for $999.
                        Implementation is where we scale — only if you want help after.
                    </p>
                    <div className="cta">
                        <AssessmentCTA />
                        <NavLink to="/proof">
                            <OutlineButton title={'See a real example'} />
                        </NavLink>
                    </div>
                    <div className="guarantee-row">
                        <GuaranteeBadge />
                    </div>
                    <div className="proof-row">
                        {proofPoints.map((item) => (
                            <div className="proof-item" key={item.label}>
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="secondary-links">
                        <NavLink to="/guides"><TextLink title={'Free AI guides'} /></NavLink>
                        <NavLink to="/ai-automation-vancouver"><TextLink title={'AI automation for small business'} /></NavLink>
                        <NavLink to="/implementation"><TextLink title={'Implementation services'} /></NavLink>
                        <a href="https://www.linkedin.com/in/gargithakur94/" target="_blank" rel="noreferrer" className="linkedin-link">
                            <LinkedinIcon />
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="visual-glow" aria-hidden="true" />
                    <DashboardPreview />
                    <p className="visual-caption">NovaFit AI Inventory Hub · built by me — I don’t just recommend, I build</p>
                </div>
            </section>

            <section className="how-it-works">
                <h2>How it works</h2>
                <div className="steps">
                    {howItWorks.map((item) => (
                        <div className="step-card" key={item.step}>
                            <span className="step-num">{item.step}</span>
                            <h3>{item.name}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="guides-teaser">
                <div className="guides-teaser-head">
                    <p className="eyebrow">
                        <span className="dot" aria-hidden="true" />
                        Free, no email required
                    </p>
                    <h2>Copy-paste AI guides</h2>
                    <p>
                        The same busy-week problems I look at in an assessment — messy
                        spreadsheets, reviews, quotes, and whether you even need AI.
                    </p>
                </div>
                <div className="guides-teaser-grid">
                    {featuredGuides.map((g) => (
                        <GuideCard
                            key={g.slug}
                            slug={g.slug}
                            topic={g.topic}
                            tool={g.tool}
                            title={g.title}
                            description={g.description}
                            readTime={g.readTime}
                        />
                    ))}
                </div>
                <div className="guides-teaser-cta">
                    <NavLink to="/guides">
                        <OutlineButton title={'Browse all free guides'} />
                    </NavLink>
                </div>
            </section>

            <section className="objection-strip">
                <p>
                    You don’t need to be technical. You don’t need new software you’ll never open.
                    Most of what I recommend works with the tools you already use.
                </p>
            </section>

            <FooterCTA />
        </HomePageStyled>
    )
}

const HomePageStyled = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    padding: 1.25rem 1.5rem 4rem;
    width: 100%;

    .hero{
        display: grid;
        grid-template-columns: 1.12fr .88fr;
        grid-template-areas:
            "eyebrow eyebrow"
            "copy visual";
        gap: 0 3rem;
        align-items: start;
        min-height: auto;
        padding-top: 0.25rem;
    }

    .hero-eyebrow{
        grid-area: eyebrow;
        margin-bottom: 0.85rem;
        width: fit-content;
        max-width: 100%;
        justify-self: start;
    }

    .hero-copy{
        grid-area: copy;

        h1{
            font-size: clamp(2.15rem, 4.2vw, 3.45rem);
            line-height: 1.05;
        }
    }

    .hero-visual{
        grid-area: visual;
        position: relative;
        align-self: start;
        .visual-glow{
            position: absolute;
            inset: 10% -5% -5%;
            background: var(--shadow-glow);
            filter: blur(40px);
            z-index: 0;
        }
        > *:not(.visual-glow){
            position: relative;
            z-index: 1;
        }
        .visual-caption{
            margin-top: 1rem;
            font-size: .78rem;
            color: var(--text-muted);
            text-align: center;
            letter-spacing: .02em;
        }
    }

    .eyebrow{
        display: inline-flex;
        align-items: center;
        gap: .55rem;
        padding: .4rem .85rem .4rem .65rem;
        border-radius: var(--radius-pill);
        border: 1px solid var(--border-color);
        background: var(--surface-muted);
        color: var(--text-muted);
        font-size: .78rem;
        font-weight: 600;
        letter-spacing: .02em;
        .dot{
            width: .45rem;
            height: .45rem;
            border-radius: 50%;
            background: var(--gradient-primary);
            box-shadow: 0 0 12px rgba(99, 102, 241, 0.6);
        }
    }

    .lead{
        margin-top: 0.9rem;
        max-width: 34rem;
        font-size: 1.05rem;
        line-height: 1.55;
        color: var(--text-muted);
    }

    .cta{
        margin-top: 1.25rem;
        display: flex;
        flex-wrap: wrap;
        gap: .85rem;
    }

    .proof-row{
        margin-top: 2.5rem;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: .85rem;
        max-width: 36rem;
    }

    .proof-item{
        padding: 1rem .95rem;
        border-radius: var(--radius-lg);
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(12px);
        strong{
            display: block;
            font-family: 'Syne', sans-serif;
            font-size: 1.35rem;
            font-weight: 700;
            letter-spacing: -0.03em;
            color: var(--heading-color);
            line-height: 1.1;
        }
        span{
            display: block;
            margin-top: .35rem;
            font-size: .78rem;
            line-height: 1.4;
            color: var(--text-muted);
        }
    }

    .secondary-links{
        margin-top: 1.35rem;
        display: flex;
        align-items: center;
        gap: 1.25rem;
        flex-wrap: wrap;
        .linkedin-link{
            display: inline-flex;
            align-items: center;
            gap: .35rem;
            color: var(--text-muted);
            font-size: .92rem;
            font-weight: 600;
            svg{ font-size: 1.1rem; }
            &:hover{ color: var(--primary-color); }
        }
    }

    @media screen and (max-height: 880px){
        .hero-eyebrow{
            margin-bottom: 0.65rem;
        }

        .hero-copy h1{
            font-size: clamp(1.95rem, 3.8vw, 3.1rem);
        }

        .lead{
            margin-top: 0.7rem;
            font-size: 1rem;
            line-height: 1.5;
        }

        .cta{
            margin-top: 1rem;
        }
    }

    @media screen and (max-width: 960px){
        .hero{
            grid-template-columns: 1fr;
            grid-template-areas:
                "eyebrow"
                "visual"
                "copy";
            gap: 0;
            min-height: auto;
        }
        .hero-eyebrow{
            margin-bottom: 0.75rem;
        }
        .hero-visual{
            order: unset;
            margin-bottom: 2.5rem;
        }
        .proof-row{
            grid-template-columns: 1fr;
            max-width: 100%;
        }
    }

    @media screen and (max-width: 642px){
        padding: .5rem 1rem 3rem;
    }

    .guarantee-row{
        margin-top: 1rem;
    }

    .how-it-works{
        margin-top: 4.5rem;
        h2{
            font-family: 'Syne', sans-serif;
            color: var(--heading-color);
            font-size: clamp(1.5rem, 2.6vw, 2rem);
            letter-spacing: -0.02em;
            margin-bottom: 1.5rem;
        }
        .steps{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
            @media screen and (max-width: 978px){
                grid-template-columns: 1fr 1fr;
            }
            @media screen and (max-width: 620px){
                grid-template-columns: 1fr;
            }
        }
        .step-card{
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            background: var(--surface-muted);
            padding: 1.5rem;
            .step-num{
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                background: var(--gradient-primary);
                color: white;
                font-weight: 700;
                font-size: .9rem;
                margin-bottom: .85rem;
            }
            h3{
                font-family: 'Syne', sans-serif;
                color: var(--heading-color);
                font-size: 1.05rem;
                margin-bottom: .45rem;
            }
            p{
                color: var(--text-muted);
                font-size: .92rem;
                line-height: 1.65;
            }
        }
    }

    .guides-teaser{
        margin-top: 4.5rem;

        .guides-teaser-head{
            max-width: 38rem;
            margin-bottom: 1.75rem;

            h2{
                font-family: 'Syne', sans-serif;
                color: var(--heading-color);
                font-size: clamp(1.5rem, 2.6vw, 2rem);
                letter-spacing: -0.02em;
                margin: .85rem 0 .5rem;
            }

            > p:last-child{
                color: var(--text-muted);
                font-size: 1.02rem;
                line-height: 1.7;
            }
        }

        .guides-teaser-grid{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            align-items: stretch;

            @media screen and (max-width: 950px){
                grid-template-columns: 1fr 1fr;
            }
            @media screen and (max-width: 650px){
                grid-template-columns: 1fr;
            }
        }

        .guides-teaser-cta{
            margin-top: 1.5rem;
            display: flex;
            justify-content: center;
        }
    }

    .objection-strip{
        margin-top: 3rem;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg);
        background: var(--glass-bg);
        backdrop-filter: blur(12px);
        padding: 1.5rem 2rem;
        text-align: center;
        p{
            color: var(--text-muted);
            font-size: 1rem;
            line-height: 1.7;
            max-width: 46rem;
            margin: 0 auto;
        }
    }
`;

export default HomePage;
