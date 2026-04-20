import React from 'react'
import Hero from '../components/Home/HeroSection'
import CtaContactSection from '../components/Home/CtaContactSection'
import CompletedProjects from '../components/Home/CompletedProjects'
import WhyChoose from '../components/Home/WhyChoose'
const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <CtaContactSection />
      <CompletedProjects />
    </div>
  )
}

export default Home
