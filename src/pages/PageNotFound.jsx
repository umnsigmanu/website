import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { Button, CenterContainer, ContentContainer } from '../styles/globalStyles.styled';

export const PageNotFound = () => {
  return (
    <>
      <NavigationBar />
      <ContentContainer>
        <h1>Page Not Found</h1>
        <CenterContainer>
          <p>We can't seem to find the page you're looking for.</p>
        </CenterContainer>
        <CenterContainer>
          <Button to='/'>Navigate to Home</Button>
        </CenterContainer>
      </ContentContainer>
      <Footer />
    </>
  )
}