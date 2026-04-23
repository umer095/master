import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import ServiceDetail from '../pages/ServiceDetail'
import Services from '../pages/Services'
import Courses from '../pages/Courses'
import CourseDetail from '../pages/CourseDetail'
import Internship from '../pages/Internship'
import InternshipDetail from '../pages/InternshipDetail'
import ScrollToTop from '../components/ScrollToTop'
import PromoPopup from '../components/PromoPopup'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PromoPopup /> 
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/service-detail/:id" element={<ServiceDetail />} />
          <Route path='courses' element={<Courses/>} />
          <Route path='courses/courses-detail/:id' element={<CourseDetail/>} />
          <Route path='internship' element={<Internship />} />
          <Route path='internship/internship-detail/:id' element={<InternshipDetail /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;