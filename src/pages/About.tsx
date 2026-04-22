import React from 'react';
import { motion } from 'framer-motion';
import aboutBg from '../assets/image-2.webp'; 
import missionImg from '../assets/Mission3.svg';
import OurGoal from '../assets/OurGoal.svg';
import logo from '../assets/logo12.jpeg';
import aboutTeamImg from '../assets/employee.avif';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';


const AboutPage = () => {

    

  return (
    <div className=''>
    <div className="bg-white">
      {/* --- Section 1: Hero Banner --- */}
      <section 
        className="d-flex align-items-center position-relative"
        style={{ 
          backgroundImage: `url(${aboutBg})`, 
          height: '500px', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(2px)' }}></div>
        <div className="container position-relative z-index-1">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="display-4 fw-bold text-dark"
          >
            About Us
          </motion.h1>
          <nav className="fs-5 fw-bold mt-2">
            <span className="text-muted">Home</span> 
            <span className="mx-2 text-dark">›</span> 
            <span className="text-primary">About Us</span>
          </nav>
        </div>
      </section>

<section className="container py-5">
  <div className="row align-items-center g-5 py-5">
    
    {/* Left Side: Text Content */}
    <div className="col-12 col-lg-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="bg-light w-25 text-center rounded-3 fw-bold mb-4 text-dark p-1" style={{ fontSize: '1rem' }}>Our Story</h2>
        <h3 className="fs-3 mb-4 fw-bold">From Idea to Completion - That's Our Promise</h3>
        <p className="fs-5 text-muted mb-4" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
          DEZYCODE was born from a simple yet powerful idea: businesses shouldn't have to work with multiple 
          vendors to bring their visions to life. Our founders recognized the 
          challenges companies face when trying to coordinate different service providers for their projects.
        </p>
        <p className="fs-5 text-muted mb-5" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
          Today, we've evolved into a comprehensive solution provider that handles everything from initial 
          business consultation to final project delivery. Our integrated approach ensures 
          seamless execution, better communication, and superior results.
        </p>
      </motion.div>
    </div>

    <div className="col-12 col-lg-6 position-relative d-flex justify-content-center align-items-center" style={{ minHeight: '450px' }}>
      
      {/* Dashed Circle Animation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="position-absolute border border-dashed rounded-circle opacity-25"
        style={{ width: '400px', height: '400px', border: '2px dashed #000' }}
      >
        <div className="position-absolute translate-middle rounded-circle" style={{ top: '0', left: '50%', width: '18px', height: '18px', backgroundColor: '#FBB03B' }}></div>
        <div className="position-absolute translate-middle rounded-circle" style={{ bottom: '-18px', left: '50%', width: '18px', height: '18px', backgroundColor: 'black' }}></div>
      </motion.div>

      {/* Main Image Container */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="position-relative z-index-2 w-75"
      >
        <img src={aboutTeamImg} alt="Our Team" className="img-fluid rounded-4 shadow-lg" />

        {/* --- Pink Success Rate Badge --- */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="position-absolute d-flex flex-column align-items-center justify-content-center text-white shadow-lg rounded-3"
          style={{
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            backgroundColor: '#FF007F', // Vivid Pink
            zIndex: 3
          }}
        >
          <span className="fw-bold h3 mb-0">98%</span>
          <span style={{ fontSize: '0.7rem' }}>Success Rate</span>
        </motion.div>

        {/* --- Blue Happy Clients Badge --- */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="position-absolute d-flex flex-column align-items-start justify-content-center text-white shadow-lg rounded-3 p-3"
          style={{
            bottom: '-30px',
            left: '-20px',
            width: '140px',
            height: '90px',
            backgroundColor: '#0047AB', // Deep Blue
            zIndex: 3
          }}
        >
          <span className="fw-bold h2 mb-0">500+</span>
          <span style={{ fontSize: '0.8rem' }}>Happy Clients</span>
        </motion.div>

      </motion.div>
    </div>

  </div>
</section>

      <section className="container py-5">
        <div className="row align-items-center g-5 py-5">
          
          {/* Left Side: Animated Image */}
          <div className="col-12 col-lg-6 position-relative d-flex justify-content-center align-items-center" style={{ minHeight: '450px' }}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="position-absolute border border-dashed rounded-circle opacity-25"
              style={{ width: '400px', height: '400px', border: '2px dashed #000' }}
            >
              <div className="position-absolute translate-middle rounded-circle" style={{ top: '0', left: '50%', width: '18px', height: '18px', backgroundColor: '#FBB03B' }}></div>
              <div className="position-absolute translate-middle rounded-circle" style={{ bottom: '-18px', left: '50%', width: '18px', height: '18px', backgroundColor: 'black' }}></div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="position-relative z-index-2 w-75"
            >
              <img src={missionImg} alt="Our Mission" className="img-fluid" />
            </motion.div>
          </div>

          {/* Right Side: Text Content */}
          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="display-5 fw-bold mb-4 text-dark">Our Mission</h2>
              <p className="fs-5 text-dark mb-4" style={{ lineHeight: '1.8' }}>
                At <strong>Dezykode IT Solutions Pvt Ltd</strong>, our mission is to empower businesses and 
                individuals by delivering exceptional IT development services, cutting-edge 
                training programs, and hands-on internship opportunities.
              </p>
              <p className="fs-5 text-dark mb-5" style={{ lineHeight: '1.8' }}>
                We are committed to providing innovative and reliable solutions that drive 
                digital transformation for our clients, while simultaneously equipping aspiring 
                IT professionals with the skills needed to thrive.
              </p>

              <div className="p-4 bg-light border-start border-5 border-warning rounded shadow-sm">
                <h3 className="h4 fw-bold text-dark">Our Vision</h3>
                <p className="fs-5 fst-italic text-secondary mb-0">
                  "To be a globally recognized leader in IT solutions and talent development, 
                  inspiring innovation and excellence in every project we undertake."
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <section className="container py-5">
        <div className="row align-items-center g-5 py-5">
          
          {/* Left Side: Animated Image */}
         

          {/* Right Side: Text Content */}
          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="display-5 fw-bold mb-4 text-dark">Our Goal</h2>
              <p className="fs-5 text-dark mb-4" style={{ lineHeight: '1.8' }}>
                At <strong>Dezykode IT Solutions Pvt Ltd</strong>, At Dezykode IT Solutions Pvt Ltd, our goal is to deliver 
                innovative and high-quality IT development services that empower businesses to succeed in the digital age
                 while simultaneously bridging the skills gap through comprehensive IT training and valuable internship 
                 opportunities.
              </p>
              <p className="fs-5 text-dark mb-5" style={{ lineHeight: '1.8' }}>
               We aim to equip aspiring professionals with the practical experience and 
               technical expertise required to excel in the ever-evolving tech landscape,
                fostering a culture of continuous learning and innovation. By building long-term 
                relationships with clients and creating real-world opportunities for students, we strive to 
                contribute to both the growth of our clients' businesses and the development of a skilled workforce,
                 driving success for all stakeholders involved.
              </p>

            </motion.div>
          </div>

           <div className="col-12 col-lg-6 position-relative d-flex justify-content-center align-items-center" style={{ minHeight: '450px' }}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="position-absolute border border-dashed rounded-circle opacity-25"
              style={{ width: '400px', height: '400px', border: '2px dashed #000' }}
            >
                
              <div className="position-absolute translate-middle rounded-circle" style={{ top: '0', left: '50%', width: '18px', height: '18px', backgroundColor: '#FBB03B' }}></div>
              <div className="position-absolute translate-middle rounded-circle" style={{ bottom: '-18px', left: '50%', width: '18px', height: '18px', backgroundColor: 'black' }}></div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="position-relative z-index-2 w-75"
            >
              <img src={OurGoal} alt="Our Mission" className="img-fluid" />
            </motion.div>
          </div>

        </div>
      </section>

       <section className="container py-5">
        <div className="row align-items-center g-5 py-5">
          
          {/* Left Side: Animated Image */}
          <div className="col-12 col-lg-6 position-relative d-flex justify-content-center align-items-center" style={{ minHeight: '450px' }}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="position-absolute border border-dashed rounded-circle opacity-25"
              style={{ width: '400px', height: '400px', border: '2px dashed #000' }}
            >
              <div className="position-absolute translate-middle rounded-circle" style={{ top: '0', left: '50%', width: '18px', height: '18px', backgroundColor: '#FBB03B' }}></div>
              <div className="position-absolute translate-middle rounded-circle" style={{ bottom: '-18px', left: '50%', width: '18px', height: '18px', backgroundColor: 'black' }}></div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="position-relative z-index-2 w-75"
            >
              <img src={missionImg} alt="Our Mission" className="img-fluid" />
            </motion.div>
          </div>

          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="display-5 fw-bold mb-4 text-dark">Our Team</h2>
              <p className="fs-5 text-dark mb-4" style={{ lineHeight: '1.8' }}>
                At <strong>Dezykode IT Solutions Pvt Ltd</strong>, our mission is to empower businesses and 
                consisting of skilled professionals who are passionate about technology, innovation,
                 and education. Our development team brings expertise in a wide range of technologies, 
                 delivering high-quality IT services that help businesses scale and succeed in the digital era.
              </p>
              <p className="fs-5 text-dark mb-5" style={{ lineHeight: '1.8' }}>
               In parallel, our trainers and mentors are dedicated to providing hands-on, 
               industry-relevant learning experiences, empowering the next generation of IT professionals.
                We also have a team of dedicated internship coordinators who work closely with aspiring tech 
                talents to ensure they gain meaningful, real-world experience. 
                By fostering a collaborative, growth-oriented environment, we ensure that our team’s 
                collective knowledge and skills are always evolving, allowing us to 
               provide cutting-edge solutions and top-tier training services to our clients and interns.
              </p>

            </motion.div>
          </div>

        </div>
      </section>

      

      <section className="bg-light py-5">
        <div className="container py-5 text-center">
          <h2 className="fw-bold mb-5 display-6">Our Core Values</h2>
          <div className="row g-4">
            {['Innovation', 'Integrity', 'Collaboration', 'Excellence'].map((value) => (
              <div key={value} className="col-6 col-md-3">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white p-4 rounded shadow-sm h-100 border"
                >
                  <div className="rounded-circle mx-auto mb-3" style={{ width: '15px', height: '15px', backgroundColor: '#FBB03B' }}></div>
                  <h4 className="fw-bold fs-5 mb-0 text-dark">{value}</h4>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutPage;