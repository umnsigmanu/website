import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { ContentContainer, ImageGrid } from '../styles/globalStyles.styled';

import PlaceholderImage from '../images/portrait-placeholder.png';
import { MemberProfile } from '../components/MemberProfile';
import JP from '../images/JP_Exec.jpg';
import Karabas from '../images/Karabas_Exec.jpg';
import RyanH from '../images/RyanH_Exec.jpg';
import RyanS from '../images/RyanS_Exec.jpg';
import Dom from '../images/Dom_Exec.jpg';
import Max from '../images/Max_Exec.jpg';
import Owen from '../images/OwenW.jpg';
import Jensen from '../images/Jensen_Exec.jpg';
import Hugo from '../images/Hugo_Exec.jpg';
import THISGUY from '../images/Keegan_AR.jpg';
import Will from '../images/Will_AR.jpg'


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
        <MemberProfile image={Karabas} name={'James Karabas'} position={'Eminent Commander'} email={'karab035@umn.edu'} />
        <MemberProfile image={Jensen} name={'Jensen Rocke'} position={'Lieutenant Commander'} email={'rocke074@umn.edu'} />
        <MemberProfile image={RyanS} name={'Ryan Schultze'} position={'Treasurer'} email={'schu4649@umn.edu'} />
        <MemberProfile image={RyanH} name={'Ryan Horejsi'} position={'Recorder'} email={'horej028@umn.edu'} />
        <MemberProfile image={Hugo} name={'Hugo Drews'} position={'Marshal'} email={'drews093@umn.edu'} />
        <MemberProfile image={Dom} name={'Dominic Pries'} position={'Chaplain'} email={'pries155@umn.edu'} />
        <MemberProfile image={JP} name={'Jacob Peterson'} position={'LEAD Chairman'} email={'pete04381@umn.edu'} />
        <MemberProfile image={Max} name={'Max Unitan'} position={'Recruitment Chair'} email={'unita004@umn.edu'} />
        <MemberProfile image={Owen} name={'Owen Hezlep'} position={'Alumni Relations Chair'} email={'hezle003@umn.edu'} />
        <MemberProfile image={THISGUY} name={'Keegan McDevitt'} position={'Assistant Recruitment Chair'} email={'mcdev036@umn.edu'} />
        <MemberProfile image={Will} name={'Will Davis'} position={'Assistant Recruitment Chair'} email={'davi4579@umn.edu'} />
      
      </ImageGrid>
      <Footer />
    </>
  )
}
