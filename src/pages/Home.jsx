import React from 'react'
import Hero from '../components/Home/HeroSection'
import CtaContactSection from '../components/Home/CtaContactSection'
import CompletedProjects from '../components/Home/CompletedProjects'
const Home = () => {
  return (
    <div>
      <Hero />
      <CtaContactSection />
      <CompletedProjects />
    </div>
  )
}

export default Home
