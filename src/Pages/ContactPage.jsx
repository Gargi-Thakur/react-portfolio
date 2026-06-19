import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SubmitButton from '../Components/SubmitButton';
import useDocumentMeta from '../hooks/useDocumentMeta';

const ContactPage = () => {
    useDocumentMeta(
        'Contact | Gargi Thakur - Operations Dashboards & Workflow Automation',
        'Book a workflow audit or scope an operations dashboard for your small business. Tell me what is slowing your team down.'
    );

    return (
        <MainLayout>
            <Title
                title={'Contact'}
                label={'Start here'}
                subtitle={'Book a workflow audit or tell me what you want to see on one screen. I will reply with an honest next step.'}
            />
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
                <div className="content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                        <p>
                            Useful things to mention: what you check manually each week,
                            where your data lives today (POS, spreadsheets, Shopify, etc.),
                            and whether you saw the NovaFit example. No jargon, no obligation.
                        </p>
                        <ul className="contact-prompts">
                            <li>Book a Workflow Automation Audit</li>
                            <li>Scope a Small Business Operations Dashboard</li>
                            <li>Ask about ongoing monthly support</li>
                        </ul>
                    </div>
                        <form className="form" id="contactForm" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdBDwt5jPc00ipcqlMnPS9ulBjGSyCycdaRWayEM_InehfKZQ/formResponse" target="_blank" >
                        <div className="form-field">
                            <label htmlFor="userName" >Name*</label>
                                <input type="text" id="userName" name="entry.1440995342" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Your email*</label>
                                <input type="email" id="email" name="emailAddress" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Subject*</label>
                                <input type="text" id="subject" name="entry.141461250" required placeholder="e.g. Workflow audit for my retail shop" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="textarea">Message*</label>
                                <textarea id="textarea" cols="30" rows="10" name="entry.850096426" required placeholder="What do you check manually each week? Where does your data live today?" ></textarea>
                        </div>
                        <div className="form-field f-button">
                                <SubmitButton title={'Send Message'} type="submit" />
                        </div>
                    </form> 
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .contact-title{
            h4{
                font-family: 'Syne', sans-serif;
                color: var(--heading-color);
                padding: 1rem 0 .5rem;
                font-size: 1.35rem;
                font-weight: 700;
                letter-spacing: -0.02em;
            }
            p{
                color: var(--text-muted);
                max-width: 34rem;
                line-height: 1.65;
            }
            .contact-prompts{
                margin-top: 1rem;
                li{
                    color: var(--text-muted);
                    padding: .25rem 0;
                    padding-left: 1rem;
                    position: relative;
                    &::before{
                        content: '•';
                        position: absolute;
                        left: 0;
                        color: var(--primary-color);
                        font-weight: 700;
                    }
                }
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--surface-solid);
                    padding: 0 .5rem;
                    font-size: .85rem;
                    font-weight: 600;
                    color: var(--heading-color);
                }
                input{
                    border: 1px solid var(--border-strong);
                    border-radius: var(--radius-md);
                    outline: none;
                    background: var(--surface-solid);
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    font-size: 1rem;
                    line-height: 1.5;
                    transition: border-color .2s ease, box-shadow .2s ease;
                    &:focus{
                        border-color: var(--primary-color);
                        box-shadow: 0 0 0 3px var(--primary-soft);
                    }
                }
                textarea{
                    background-color: var(--surface-solid);
                    border: 1px solid var(--border-strong);
                    border-radius: var(--radius-md);
                    outline: none;
                    color: var(--font-light-color);
                    width: 100%;
                    min-height: 10rem;
                    padding: .85rem 1rem;
                    font-size: 1rem;
                    line-height: 1.6;
                    resize: vertical;
                    transition: border-color .2s ease, box-shadow .2s ease;
                    &:focus{
                        border-color: var(--primary-color);
                        box-shadow: 0 0 0 3px var(--primary-soft);
                    }
                }
            }

            
        }
    }
`;

export default ContactPage
