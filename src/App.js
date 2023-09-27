import './App.css';
import './Assets/Css/Root.css';
import React, { useEffect } from "react";
// import CvNavbar from './Components/CvNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Path from './Components/Path';
import ThemeSection from './Components/ThemeSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Powerfultools from './Components/Powerfultools';
import Helpyou from './Components/Helpyou';
import ProfessionalDesign from './Components/ProfessionalDesign';
import JobApplying from './Components/JobApplying';
import ClientsSay from './Components/ClientsSay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackToTop from './Components/BacktoTop';
import Preloader from './Components/Preloader';
function App() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 170,
      disable: 'mobile',
    });
  }, [])


  return (

    <>
      <div className='overflow-hidden'>
        <Preloader />
        <Header />
        <ThemeSection />
        <Powerfultools />
        <Helpyou />
        <ProfessionalDesign />
        <JobApplying />
        <ClientsSay />
        <Faq />
        <Path />
        <Footer />
        <BackToTop />
      </div>

    </>
  );
}

export default App;
