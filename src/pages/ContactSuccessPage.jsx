import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import {
  ContentContainer,
  CenterContainer,
} from '../styles/globalStyles.styled';

export const ContactSuccessPage = () => {
  return (
    <>
      <NavigationBar />
      <ContentContainer>
        <h3>Thank you for getting in touch!</h3>
        <CenterContainer>
          <p>We will respond to your message as soon as we can.</p>
        </CenterContainer>
      </ContentContainer>
      <Footer />
    </>
  );
};
