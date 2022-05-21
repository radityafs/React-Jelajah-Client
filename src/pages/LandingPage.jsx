import '../css/landing.css';

import Header from '../components/Header';
import HeroSection from '../components/LandingPage/HeroSection';
import DiscoverSection from '../components/LandingPage/DiscoverSection';
import TopDestinationSection from '../components/LandingPage/TopDestinationSection';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <DiscoverSection />
      <TopDestinationSection />
      <Footer />
    </>
  );
}
