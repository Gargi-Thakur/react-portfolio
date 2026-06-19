import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import useDocumentMeta from '../hooks/useDocumentMeta';

const sections = [
    {
        title: 'Who this applies to',
        body: 'This policy describes how Gargi Thakur ("I", "me") handles information on gargithakur.com. I am based in Vancouver, BC, Canada.',
    },
    {
        title: 'What I collect',
        body: 'If you use the contact form, I collect the name, email address, subject, and message you submit. I do not ask for payment details on this website.',
    },
    {
        title: 'Why I collect it',
        body: 'I use contact form information to respond to inquiries, scope projects, and follow up about services such as workflow audits or operations dashboard work.',
    },
    {
        title: 'Where your data goes',
        body: 'Contact form submissions are sent to a Google Form linked to my Google Workspace account. The site itself is hosted on Netlify. Netlify may process standard server logs (such as IP address, browser type, and pages visited) for security and performance.',
    },
    {
        title: 'Local storage',
        body: 'This site saves your theme preference (light or dark mode) in your browser local storage so the site remembers your choice. That data stays on your device unless you clear it.',
    },
    {
        title: 'Analytics and cookies',
        body: 'This site does not currently use analytics tools such as Google Analytics or advertising pixels. If that changes, this page will be updated.',
    },
    {
        title: 'How long I keep information',
        body: 'I keep contact form messages for as long as needed to respond and manage a business relationship, then delete or archive them when they are no longer needed.',
    },
    {
        title: 'Your choices',
        body: 'You can ask what information I have about you, request correction, or ask me to delete contact messages you sent. To make a request, use the contact page.',
    },
    {
        title: 'Links to other sites',
        body: 'This site links to external pages such as LinkedIn, the NovaFit demo, and Google Form processing. Those sites have their own privacy practices.',
    },
];

const PrivacyPage = () => {
    useDocumentMeta(
        'Privacy Policy | Gargi Thakur',
        'How gargithakur.com handles contact form data, hosting, and local theme preferences. Based in Vancouver, BC.'
    );

    return (
        <MainLayout>
            <Title
                title={'Privacy Policy'}
                label={'Legal'}
                subtitle={'Plain-language summary of what this site collects and how it is used.'}
            />
            <PrivacyPageStyled>
                <InnerLayout>
                    <p className="updated">Last updated: June 2026</p>
                    {sections.map((section) => (
                        <section className="policy-block" key={section.title}>
                            <h2>{section.title}</h2>
                            <p>{section.body}</p>
                        </section>
                    ))}
                    <p className="contact-note">
                        Questions about privacy?{' '}
                        <NavLink to="/contact">Contact me</NavLink>.
                    </p>
                </InnerLayout>
            </PrivacyPageStyled>
        </MainLayout>
    );
};

const PrivacyPageStyled = styled.section`
    .updated{
        font-size: .9rem;
        color: var(--text-muted);
        margin-bottom: 2rem;
    }

    .policy-block{
        margin-bottom: 1.75rem;
        padding-bottom: 1.75rem;
        border-bottom: 1px solid var(--border-color);

        &:last-of-type{
            border-bottom: none;
        }

        h2{
            font-family: 'Syne', sans-serif;
            font-size: 1.15rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            color: var(--heading-color);
            margin-bottom: .5rem;
        }

        p{
            max-width: 42rem;
            line-height: 1.7;
            color: var(--text-muted);
        }
    }

    .contact-note{
        margin-top: 1rem;
        font-size: .95rem;
        color: var(--text-muted);

        a{
            color: var(--primary-color);
            font-weight: 600;
            &:hover{
                text-decoration: underline;
            }
        }
    }
`;

export default PrivacyPage;
