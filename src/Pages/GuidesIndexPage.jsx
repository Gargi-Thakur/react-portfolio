import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import GuideCard from '../Components/GuideCard';
import FooterCTA from '../Components/FooterCTA';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { GUIDES, GUIDE_TOPICS, GUIDE_TOOLS } from '../data/guides';

const TOPIC_FILTERS = ['All', ...GUIDE_TOPICS];
const TOOL_FILTERS = ['All tools', ...GUIDE_TOOLS];

const GuidesIndexPage = () => {
    const [query, setQuery] = useState('');
    const [activeTopic, setActiveTopic] = useState('All');
    const [activeTool, setActiveTool] = useState('All tools');

    useDocumentMeta(
        'Free AI Guides for Vancouver Small Business | Gargi Thakur',
        'Free, copy-paste AI guides for Vancouver small businesses — reviews, quotes, Monday numbers, and whether you even need AI. No email required.'
    );

    const visibleGuides = useMemo(() => {
        const needle = query.trim().toLowerCase();

        return GUIDES.filter((g) => {
            if (activeTopic !== 'All' && g.topic !== activeTopic) return false;
            if (activeTool !== 'All tools' && g.tool !== activeTool) return false;
            if (!needle) return true;

            const haystack = [g.title, g.description, g.topic, g.tool].join(' ').toLowerCase();
            return haystack.includes(needle);
        });
    }, [query, activeTopic, activeTool]);

    const hasFilters = query.trim() || activeTopic !== 'All' || activeTool !== 'All tools';

    const clearFilters = () => {
        setQuery('');
        setActiveTopic('All');
        setActiveTool('All tools');
    };

    return (
        <MainLayout>
            <GuidesIndexPageStyled>
                <header className="library-hero">
                    <p className="library-label">the whole library</p>
                    <h1>
                        Free <span className="gradient-text">guides</span>
                    </h1>
                    <p className="library-lede">
                        Short, copy-paste setups for shop owners, studio operators, cafés,
                        and service businesses in Metro Vancouver — the same problems I
                        look at in an assessment. All free, no email required.
                    </p>
                </header>

                <InnerLayout>
                    <div className="search-block">
                        <label htmlFor="guide-search" className="filter-label">search the library</label>
                        <div className="search-field">
                            <SearchIcon aria-hidden="true" />
                            <input
                                id="guide-search"
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={'Try “spreadsheet”, “review” or “Claude”'}
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className="filter-block">
                        <p className="filter-label" id="topic-filter-label">filter by topic</p>
                        <div className="filter-row" role="group" aria-labelledby="topic-filter-label">
                            {TOPIC_FILTERS.map((topic) => (
                                <button
                                    key={topic}
                                    type="button"
                                    className={topic === activeTopic ? 'active' : ''}
                                    onClick={() => setActiveTopic(topic)}
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-block">
                        <p className="filter-label" id="tool-filter-label">filter by AI tool</p>
                        <div className="filter-row" role="group" aria-labelledby="tool-filter-label">
                            {TOOL_FILTERS.map((tool) => (
                                <button
                                    key={tool}
                                    type="button"
                                    className={tool === activeTool ? 'active' : ''}
                                    onClick={() => setActiveTool(tool)}
                                >
                                    {tool}
                                </button>
                            ))}
                        </div>
                    </div>

                    <p className="results-count" aria-live="polite">
                        Showing {visibleGuides.length} of {GUIDES.length} {GUIDES.length === 1 ? 'guide' : 'guides'}
                    </p>

                    {visibleGuides.length > 0 ? (
                        <div className="guides-grid">
                            {visibleGuides.map((g) => (
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
                    ) : (
                        <div className="empty-state">
                            <p>No guides match that search. Try a different word, or clear the filters.</p>
                            {hasFilters && (
                                <button type="button" onClick={clearFilters}>
                                    Clear search & filters
                                </button>
                            )}
                        </div>
                    )}
                </InnerLayout>

                <InnerLayout>
                    <FooterCTA headline={'This is one fix. The assessment finds all of them.'} />
                </InnerLayout>
            </GuidesIndexPageStyled>
        </MainLayout>
    );
};

const GuidesIndexPageStyled = styled.section`
    .library-hero{
        text-align: center;
        max-width: 42rem;
        margin: 0 auto 2.25rem;

        h1{
            font-family: 'Syne', sans-serif;
            font-size: clamp(2.4rem, 5vw, 3.6rem);
            font-weight: 700;
            letter-spacing: -0.04em;
            line-height: 1.05;
            color: var(--heading-color);
            max-width: none;
            margin-bottom: .85rem;
        }
    }

    .library-label,
    .filter-label{
        color: var(--primary-color);
        font-size: .72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .14em;
    }

    .library-label{
        margin-bottom: .85rem;
    }

    .library-lede{
        color: var(--text-muted);
        font-size: 1.08rem;
        line-height: 1.7;
    }

    .search-block{
        max-width: 36rem;
        margin: 0 auto 1.75rem;
        text-align: center;

        .filter-label{
            display: block;
            margin-bottom: .65rem;
        }
    }

    .search-field{
        display: flex;
        align-items: center;
        gap: .65rem;
        padding: .85rem 1.25rem;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-pill);
        background: var(--surface-solid);
        box-shadow: var(--shadow-lg);
        transition: border-color .2s ease, box-shadow .2s ease;

        &:focus-within{
            border-color: var(--accent-color);
            box-shadow: var(--shadow-lg), var(--shadow-glow);
        }

        svg{
            color: var(--text-muted);
            font-size: 1.2rem;
            flex-shrink: 0;
        }

        input{
            flex: 1;
            min-width: 0;
            border: 0;
            background: transparent;
            outline: none;
            font-size: .95rem;
            color: var(--heading-color);

            &::-webkit-search-cancel-button{
                cursor: pointer;
            }
        }
    }

    .filter-block{
        margin-bottom: 1.15rem;
        text-align: center;

        .filter-label{
            margin-bottom: .65rem;
        }
    }

    .filter-row{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: .5rem;

        button{
            border: 1px solid var(--border-color);
            border-radius: var(--radius-pill);
            background: var(--surface-solid);
            color: var(--text-muted);
            font-size: .82rem;
            font-weight: 600;
            padding: .5rem 1rem;
            cursor: pointer;
            transition: color .2s ease, border-color .2s ease, background-color .2s ease;

            &:hover{
                color: var(--heading-color);
                border-color: var(--border-strong);
            }

            &.active{
                color: #fff;
                background: var(--gradient-primary);
                border-color: transparent;
            }
        }
    }

    .results-count{
        text-align: center;
        font-size: .82rem;
        color: var(--text-muted);
        margin: 1.5rem 0 1.35rem;
    }

    .guides-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        align-items: stretch;
        margin-bottom: 1rem;

        @media screen and (max-width: 950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 650px){
            grid-template-columns: 1fr;
        }
    }

    .empty-state{
        text-align: center;
        padding: 2.5rem 1rem 2rem;
        border: 1px dashed var(--border-color);
        border-radius: var(--radius-xl);
        background: var(--surface-muted);

        p{
            color: var(--text-muted);
            margin-bottom: 1rem;
        }

        button{
            border: 1px solid var(--border-color);
            border-radius: var(--radius-pill);
            background: var(--surface-solid);
            color: var(--heading-color);
            font-size: .85rem;
            font-weight: 700;
            padding: .55rem 1.1rem;
            cursor: pointer;

            &:hover{
                border-color: var(--accent-color);
                color: var(--primary-color);
            }
        }
    }
`;

export default GuidesIndexPage;
