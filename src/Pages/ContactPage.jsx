import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SubmitButton from '../Components/SubmitButton';
import useDocumentMeta from '../hooks/useDocumentMeta';

const ContactPage = () => {
    useDocumentMeta(
        'Contact | Gargi Thakur — AI Automation for Small Businesses',
        'Book a free consultation to find out what AI automation can do for your small business — email automation, lead follow-up, and scheduling.'
    );

    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
                <div className="content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                        <p>
                            Tell me what's eating up your time — repetitive emails, leads going cold, scheduling back-and-forth — and I'll tell you honestly whether automation can fix it. No jargon, no obligation.
                        </p>
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
                                <input type="text" id="subject" name="entry.141461250" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="textarea">Message*</label>
                                <textarea id="textarea" cols="30" rows="10" name="entry.850096426" required ></textarea>
                        </div>
                        <div className="form-field f-button">
                                <SubmitButton title={'Send Email'} type="submit" />
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
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
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
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;

export default ContactPage
