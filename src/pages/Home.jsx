import React from 'react'
import Hero from '../components/Home/HeroSection'
import CtaContactSection from '../components/Home/CtaContactSection'
import CompletedProjects from '../components/Home/CompletedProjects'
import WhyChoose from '../components/Home/WhyChoose'
import About from '../components/Home/About'
import HowWeWork from '../components/Home/HowWeWork'
import Whowebuild from '../components/Home/Whowebuild'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyChoose />
      <HowWeWork />
      <Whowebuild />
      <CompletedProjects />
      <CtaContactSection />
    </div>
  )
};

export default Home;
