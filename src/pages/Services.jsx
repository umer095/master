
import React from 'react'
import ServicesCards from '../sections/Service/ServicesCards'
import PageHeader from '../components/PageHeader'
import serviceImg from "../assets/page-title/services.webp"

const Services = () => {
  return (
    <div>
      <PageHeader title="Our Services" />
      <ServicesCards/>
    </div>
  )
}

export default Services
