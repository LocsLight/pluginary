import React from 'react';
import HeroSection from '../../components/HeroSection'
import InfoSection from '../../components/InfoSection'
import  Navbar from '../../components/Navbar/navbar'
import  {InfoObj, InfoObj2, InfoObj3, InfoObj4} from '../../components/InfoSection/Data'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <InfoSection {...InfoObj}/>
      <InfoSection {...InfoObj2}/>
      <InfoSection {...InfoObj3}/>
      <InfoSection {...InfoObj4}/>
    </div>
  );
}

export default Home;
