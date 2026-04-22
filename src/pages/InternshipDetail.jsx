import React from 'react'
import PageHeader from '../components/PageHeader'
import {internships} from "../data/internships"

import InternshipContain from '../sections/internshipDetail/InternshipContain'
import { useParams } from 'react-router-dom'

const InternshipDetail = () => {
   const { id } = useParams();
   const data = internships.find(item => item.id === parseInt(id))

   if(!data) return <h2>Not Found</h2>;
  return (
    <>
      <PageHeader title={data.title} />
      <InternshipContain data={data} />
    </>
  )
}

export default InternshipDetail
