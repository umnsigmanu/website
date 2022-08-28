import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { ContentContainer, ImageGrid } from '../styles/globalStyles.styled';

import PlaceholderImage from '../images/portrait-placeholder.png';
import testImage from '../images/logo.png';
import { MemberProfile } from '../components/MemberProfile';

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
      <h3>Current Officers</h3>
      <ImageGrid>
        <MemberProfile image={PlaceholderImage} name={'Thomas Elliot'} position={'Eminent Commander'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Henry Larson'} position={'Lieutenant Commander'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Luke Deselich'} position={'Treasurer'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Sam Ericson'} position={'Recorder'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Quin Bates-Janigo'} position={'Marshal'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Joe Hennessy'} position={'Chaplain'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Daniel Caballero'} position={'LEAD Chair'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Carson Greenlee'} position={'Recruitment Chair'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Brady Wentzel'} position={'Alumni Relations Chair'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Name'} position={'position'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Briar Volkman'} position={'Webmaster'} email={'volkm074@umn.edu'} />
      </ImageGrid>
      <Footer />
    </>
  )
}