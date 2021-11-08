import React, {useState} from 'react';
import Sidebar from '../../components/Sidebar'
import  Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import InfoSection from '../../components/InfoSection'
import  {InfoObj, InfoObj2, InfoObj3, InfoObj4} from '../../components/InfoSection/Data'
import Footer from '../../components/Footer'
import ServicesSection from '../../components/ServicesSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...InfoObj}/>
      <InfoSection {...InfoObj2}/>
      <InfoSection {...InfoObj3}/>
      <InfoSection {...InfoObj4}/>
      <ServicesSection/>
      <Footer/>
    </>
  );
}

export default Home;
