import React, { useState } from 'react';
import { aboutObj, specialsObj, rewardsObj } from '../components/InfoSection/Data';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import AboutBackGround from '../assets/images/about-background.jpg';
import RewardsBackGround from '../assets/images/rewards-background.jpg';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...aboutObj} background={AboutBackGround}/>
      <InfoSection {...specialsObj} />
      <InfoSection {...rewardsObj} background={RewardsBackGround}/>
      <Footer />
    </>
  )
}

export default Home;
