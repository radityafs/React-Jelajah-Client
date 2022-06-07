import '../css/landing.css';

import Header from '../components/Header';
import HeroSection from '../components/LandingPage/HeroSection';
import DiscoverSection from '../components/LandingPage/DiscoverSection';
import TopDestinationSection from '../components/LandingPage/TopDestinationSection';
import Footer from '../components/Footer';
//import aos
import AOS from 'aos';

export default function LandingPage() {
  AOS.init({
    duration: 2000
  });

  return (
    <>
      <Header data-aos={'zoom-in-up'} />
      <HeroSection />
      <DiscoverSection />
      <TopDestinationSection />
      <Footer />
    </>
  );
}
