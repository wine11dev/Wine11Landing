import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ConnectSection from './components/ConnectSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import AnnouncementBar from "./components/AnnouncementBar";


function App() {
  return (
    <>
      <Header />
      <AnnouncementBar />
      <HeroSection />
      <HowItWorks />
      <ConnectSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default App;
