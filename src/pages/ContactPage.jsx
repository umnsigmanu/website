import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { CenterContainer, ContentContainer } from '../styles/globalStyles.styled';

export const ContactPage = () => {
  return (
    <>
      <NavigationBar />
      <ContentContainer>
        <h1>Contact Us</h1>
        <CenterContainer>
          <form
            name='contact'
            method='POST'
            data-netlify='true'
            netlify-honeypot='bot-field'
          >
            <p style={{ display: 'none' }}>
              <label>
                Field: <input name='bot-field' />
              </label>
            </p>
            <p>
              <label>
                Your Name: <input type='text' name='name' />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type='email' name='email' />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name='message'></textarea>
              </label>
            </p>
            <p>
              <button type='submit'>Send</button>
            </p>
          </form>
        </CenterContainer>
      </ContentContainer>
      <Footer />
    </>
  );
};
