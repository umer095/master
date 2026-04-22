import React from 'react'
import { useParams } from "react-router-dom";
import { Courses } from "../data/courseData.js";

import PageHeader from "../components/PageHeader";
import CourseContent from '../sections/coursesDetail/CourseContent';
import CourseHighlights from '../sections/coursesDetail/CourseHighlights.jsx';
import CourseCTA from '../sections/coursesDetail/CourseCTA.jsx';

const ServiceDetail = () => {
  const { id } = useParams();

  const course = Courses.find((item) => item.id === Number(id));

  if (!course) return <h2>Course Not Found</h2>;

  return (
    <>
      <PageHeader title={course.title} />
      <CourseContent course={course} />
      <CourseHighlights course={course}/>
      <CourseCTA />
    </>
  )
}

export default ServiceDetail;
