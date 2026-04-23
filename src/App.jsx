import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import NewProfessionalPreloader from './components/Preloader'; // Path check kar lena
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 4.5 seconds ka timer set kiya hai
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup timer agar component unmount ho jaye
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          // Jab loading true ho, tab preloader dikhega
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" } 
            }}
          >
            <NewProfessionalPreloader />
          </motion.div>
        ) : (
          // Jab loading false ho jaye, tab aapke routes load honge
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AppRoutes />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;