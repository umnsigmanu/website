import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { CenterContainer, ContentContainer, FormContainer } from '../styles/globalStyles.styled';

export const ContactPage = () => {
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
          >
            <label style={{ display: 'none' }}>
              Field: <input name='bot-field' />
            </label>

            <input type='text' name='name' placeholder='Your Name' />
            <input type='email' name='email' placeholder='Email'/>
            <textarea name='message' placeholder='Message'></textarea>
            <button type='submit'>Send</button>
          </FormContainer>
        </CenterContainer>
      </ContentContainer>
      <Footer />
    </>
  );
};
