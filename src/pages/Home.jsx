import React from 'react'
import Hero from '../sections/home/Hero'
import AboutPreview from '../sections/home/AboutPreview'
import LookingFor from '../sections/home/LookingFor'
import ServicesPreview from '../sections/home/ServicesPreview'
import TrainingSection from '../sections/home/TrainingSection'
import WhyChoose from '../sections/home/WhyChoose'
import Testimonials from '../sections/home/Testimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChoose />
      <LookingFor/>
      <ServicesPreview /> 
      <TrainingSection/>
      <Testimonials />
    </>
  )
}

export default Home
