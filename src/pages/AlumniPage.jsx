import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { BannerImage } from '../components/BannerImage';
import { ContentContainer } from '../styles/globalStyles.styled';
import AlumniBanner from '../images/banner-alumni.jpg';

export const AlumniPage = () => {
  return (
    <>
      <NavigationBar />
      <BannerImage
        image={AlumniBanner}
        title={'Alumni'}
      />
      <ContentContainer>
        <h1>Welcome Back to the Gamma Tau Chapter</h1>
        <p>We invite all alumni to explore this site and learn about ways to get involved with the chapter.</p>
        <h3>Get In Touch!</h3>
        <p>Share your knowledge with the chapter in a LEAD presentation, become an Alumni mentor, join our LinkedIn group to connect with old/new friends, or come for a visit on game day and see your old room! Connect with us on the <a href='https://www.facebook.com/GammaTauAlumni' target='_blank' rel='noopener noreferrer'>Gamma Tau Alumni Facebook page</a> to stay up to date on Alumni News</p>
      </ContentContainer>
      <Footer />
    </>
  )
}