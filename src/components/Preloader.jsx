import React from 'react';
import { motion } from 'framer-motion';

// Aapki image yahan import ho rahi hai
import logo from '../assets/logo12.jpeg'; 

const NewProfessionalPreloader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#FFFFFF', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
      }}
    >
      <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* 1. Outer Dashed Circle (Clockwise) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '2px dashed #FBB03B', 
            opacity: 0.6,
          }}
        />

        {/* 2. Inner Dashed Circle (Anti-Clockwise) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            width: '85%',
            height: '85%',
            borderRadius: '50%',
            border: '1.5px dashed #555', 
            opacity: 0.2,
          }}
        />

        {/* 3. Image Container (Nail Size) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{
            width: '50px', // Small & Professional size
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
            border: '2px solid #FBB03B'
          }}
        >
          {/* Yahan 'logo' variable use kiya hai */}
          <img 
            src={logo} 
            alt="Logo" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
        </motion.div>

        {/* 4. Pulse Effect */}
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          style={{
            position: 'absolute',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#FBB03B',
            zIndex: 5,
          }}
        />

      </div>
    </div>
  );
};

export default NewProfessionalPreloader;