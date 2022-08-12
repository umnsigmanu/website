import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { BannerImage } from '../components/BannerImage';
import { ContentContainer, Button } from '../styles/globalStyles.styled';
import AboutBanner from '../images/banner-about.jpg';

export const AboutPage = () => {
  return (
    <>
      <NavigationBar />
      <ContentContainer>
        <h1>About Our Fraternity</h1>
        <p>The last few years have been an exciting time for the Gamma Tau chapter. We have been awarded 6 consecutive Rock Chapter awards, the highest award offered by Sigma Nu National Fraternity. This award measures chapter performance across all aspects of fraternity life including:</p>
        <ul>
          <li>Academic performance and support</li>
          <li>Service and philanthropy</li>
          <li>Brotherhood</li>
          <li>Values-based recruitment</li>
          <li>Chapter operations</li>
          <li>Campus involvement</li>
        </ul>
      </ContentContainer>
      <Footer />
    </>
  )
}