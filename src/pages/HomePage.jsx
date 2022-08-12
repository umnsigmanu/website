import { Link } from 'react-router-dom';

import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { BannerImage } from '../components/BannerImage';
import { ContentContainer, Button } from '../styles/globalStyles.styled';
import AboutBanner from '../images/banner-about.jpg';

export const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <BannerImage
        image={AboutBanner}
        title={'Sigma Nu Fraternity'}
        subTitle={'Inspiring leaders with values of Love, Honor, and Truth'}
      />
      <ContentContainer>
        <h1>Sigma Nu Fraternity</h1>
        <p>The Gamma Tau chapter of Sigma Nu Fraternity was founded at the University of Minnesota in 1904. Since our founding, our brothers have built a tradition of excellence and have dedicated their lives to our Fraternity's values of Love, Honor, and Truth.</p>
        <Button to="about">About Our Chapter</Button>
      </ContentContainer>
      <Footer />
    </>
  )
}