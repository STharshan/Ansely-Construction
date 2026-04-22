import React from 'react'
import AboutGallery from '../components/About/AboutGallery'
import AboutHero from '../components/About/AboutHero'
import OurTeam from '../components/About/OurTeam'
import Testimonial from '../components/About/Testimonial'
import VideoSection from '../components/About/VideoSection'
import OurStory from '../components/About/OurStory'

const About = () => {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <VideoSection />
      <OurTeam />
      <Testimonial />
      <AboutGallery />
    </div>
  )
}

export default About
