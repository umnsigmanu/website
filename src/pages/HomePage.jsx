import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { BannerImage } from '../components/BannerImage';
import { CenterContainer, ContentContainer, Button } from '../styles/globalStyles.styled';
import AboutBanner from '../images/banner-about.jpg';
import InstagramFeed from '../components/InstagramFeed';

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
        <p>
          The Gamma Tau chapter of Sigma Nu Fraternity was founded at the
          University of Minnesota in 1904. Since our founding, our brothers have
          built a tradition of excellence and have dedicated their lives to our
          Fraternity's values of Love, Honor, and Truth.
        </p>
        <CenterContainer>
          <Button to='about'>About Our Chapter</Button>
        </CenterContainer>
      </ContentContainer>
      <InstagramFeed />
      <Footer />
    </>
  );
};
