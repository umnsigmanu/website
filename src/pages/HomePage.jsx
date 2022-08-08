import { NavigationBar } from '../components/NavigationBar';
import { BannerImage } from '../components/BannerImage';
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
      <div>Home page</div>
    </>
  )
}