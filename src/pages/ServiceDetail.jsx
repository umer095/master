// import React from 'react'
// import DetailedService from '../sections/servicesDetail/DetailedService'
// import ServicesDiamond from '../sections/servicesDetail/ServicesDiamond'
// import Benefits from '../sections/servicesDetail/Benifits'

// const ServiceDetail = () => {
//   return (
//     <>
//       <DetailedService/>
//       <ServicesDiamond />
//       <Benefits  />
//     </>
//   )
// }

// export default ServiceDetail

import React from 'react'
import { useParams } from "react-router-dom";
import { Services } from "../data/serviceData";

import DetailedService from '../sections/servicesDetail/DetailedService';
import ServicesDiamond from '../sections/servicesDetail/ServicesDiamond';
import Benefits from '../sections/servicesDetail/Benifits';
import PageHeader from "../components/PageHeader";

const ServiceDetail = () => {
  const { id } = useParams();

  const service = Services.find((item) => item.id === Number(id));

  if (!service) return <h2>Service Not Found</h2>;

  return (
    <>
      <PageHeader title={service.title} />
      <DetailedService service={service} />
      <ServicesDiamond />
      <Benefits
        benefits={service.benefits} 
        quote={service.quote} 
      />
    </>
  )
}

export default ServiceDetail;