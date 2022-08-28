import { useState } from 'react';

import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import {
  CenterContainer,
  ContentContainer,
  FormContainer,
} from '../styles/globalStyles.styled';

export const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', name, email, message, honeypot }),
      })
    }
    catch {
      alert('Error when submitting form, please try again');
    }
  };

  return (
    <>
      <NavigationBar />
      <ContentContainer>
        <h1>Contact Us</h1>
        <CenterContainer>
          <FormContainer
            name='contact'
            method='POST'
            data-netlify='true'
            netlify-honeypot='bot-field'
            // action='/contact/success'
            onSubmit={handleSubmit}
          >
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Your Name'
            />
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            <textarea
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Message'
            ></textarea>

            {/* NOTE: this is a spam prevention input field. If a bot fills this field out, Netlify will reject the form submission as spam */}
            <input
              type='text'
              name='bot-field'
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              // style={{display: 'none'}}
              placeholder='TODO honeypot'
            />
            <button type='submit'>Send</button>
          </FormContainer>
        </CenterContainer>
      </ContentContainer>
      <Footer />
    </>
  );
};
