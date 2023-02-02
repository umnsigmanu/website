import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { ContentContainer, ImageGrid } from '../styles/globalStyles.styled';

import PlaceholderImage from '../images/portrait-placeholder.png';
import { MemberProfile } from '../components/MemberProfile';
import Briar from '../images/BriarW.jpg';
import Carson from '../images/CarsonW.jpg';
import Dane from '../images/DaneW.jpg';
import Franz from '../images/FranzW.jpg';
import Goob from '../images/GoobW.jpg';
import Krop from '../images/KropW.jpg';
import Owen from '../images/OwenW.jpg';
import Vijay from '../images/VijayW.jpg';


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
        <MemberProfile image={Carson} name={'Carson Greenlee'} position={'Eminent Commander'} email={'gree3219@umn.edu'} />
        <MemberProfile image={Vijay} name={'Nathan Vijay'} position={'Lieutenant Commander'} email={'vijay156@umn.edu'} />
        <MemberProfile image={Franz} name={'Nate Franz'} position={'Treasurer'} email={'franz448@umn.edu'} />
        <MemberProfile image={Dane} name={'Dane Unitan'} position={'Recorder'} email={'email@umn.edu'} />
        <MemberProfile image={Owen} name={'Owen Hezlep'} position={'Marshal'} email={'email@umn.edu'} />
        <MemberProfile image={Goob} name={'Gabe Anderson'} position={'Chaplain'} email={'email@umn.edu'} />
        <MemberProfile image={Briar} name={'Briar Volkman'} position={'LEAD Chairman/Webmaster'} email={'volkm074@umn.edu'} />
        <MemberProfile image={Krop} name={'Joseph Kropinak'} position={'Recruitment Chair'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Jacob Brown'} position={'Alumni Relations Chair'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Name'} position={'position'} email={'email@umn.edu'} />
        <MemberProfile image={PlaceholderImage} name={'Name'} position={'position'} email={'email@umn.edu'} />
      </ImageGrid>
      <Footer />
    </>
  )
}