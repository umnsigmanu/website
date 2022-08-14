import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { BannerImage } from '../components/BannerImage';
import { CenterContainer, ContentContainer, Button } from '../styles/globalStyles.styled';
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
        <p>
          The Gamma Tau chapter of Sigma Nu Fraternity was founded at the
          University of Minnesota in 1904. Since our founding, our brothers have
          built a tradition of excellence and have dedicated their lives to our
          Fraternity's values of Love, Honor, and Truth.
        </p>
        <CenterContainer>
          <Button to='about'>About Our Chapter</Button>
        </CenterContainer>
        <h3>Follow Us on Instagram!</h3>
        <CenterContainer>
          <iframe src="https://embedsocial.com/api/pro_hashtag/ed07405eff6dd4e8fdd0d737fafab98e075ddb76" title="EmbedSocial widget" style={{width: '800px', height: '400px', overflowY: 'auto'}}></iframe>
        </CenterContainer>
      </ContentContainer>
      <Footer />
    </>
  );
};
