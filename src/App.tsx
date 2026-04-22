import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion"; // Exit animation ke liye
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Navbar from "./components/Navbar"; 
import Preloader from "./components/Preloader";
import PromoPopup from "./components/PromoPopup"; 

// Pages
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Training from "./pages/Training.tsx";
import Internship from "./pages/Internship.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 5 seconds ke baad loading false ho jayegi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* AnimatePresence helps in smooth exit transitions */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div key="loader">
              <Preloader />
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BrowserRouter>
                <PromoPopup />
                <Navbar /> 
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/internship" element={<Internship />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </motion.div>
          )}
        </AnimatePresence>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;