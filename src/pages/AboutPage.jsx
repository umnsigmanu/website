import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { ContentContainer, ImageGrid } from '../styles/globalStyles.styled';

import PlaceholderImage from '../images/portrait-placeholder.png';
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
        <h3>Current Officers</h3>
        <ImageGrid>
          <MemberProfile image={PlaceholderImage} name={'Placeholder name'} position={'position'} email={'email@gmail.com'} />
          <MemberProfile image={PlaceholderImage} name={'Placeholder name'} position={'position'} email={'email@gmail.com'} />
          <MemberProfile image={PlaceholderImage} name={'Placeholder name'} position={'position'} email={'email@gmail.com'} />
          <MemberProfile image={PlaceholderImage} name={'Placeholder name'} position={'position'} email={'email@gmail.com'} />
          <MemberProfile image={PlaceholderImage} name={'Placeholder name'} position={'position'} email={'email@gmail.com'} />
          <MemberProfile image={PlaceholderImage} name={'Placeholder name'} position={'position'} email={'email@gmail.com'} />
          <MemberProfile image={PlaceholderImage} name={'Placeholder name'} position={'position'} email={'email@gmail.com'} />
          <MemberProfile image={PlaceholderImage} name={'Placeholder name'} position={'position'} email={'email@gmail.com'} />
        </ImageGrid>
      </ContentContainer>
      <Footer />
    </>
  )
}