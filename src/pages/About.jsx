import React from 'react'
import aboutImg from "../assets/page-title/about.jpg"
import PageHeader from '../components/PageHeader'
import MissionSection from '../sections/about/MissionSection'
import GoalSection from '../sections/about/GoalSection'
import TeamSection from '../sections/about/TeamSection'
import TeamDetail from '../sections/about/TeamDetail'


const About = () => {
  return (
    <div>
      <PageHeader title="About Us" bgImage={aboutImg} />
      <MissionSection />
      <GoalSection />
      <TeamSection />
      <TeamDetail />
      <p>Welcome to the About page!</p>
    </div>
  )
}

export default About
