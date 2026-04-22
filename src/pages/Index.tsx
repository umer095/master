import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LookingForSection from "@/components/LookingForSection";
import ServicesSection from "@/components/ServicesSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LookingForSection />
      <ServicesSection />
      <CoursesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <SubscribeSection />
      <Footer />
    
      <WhatsAppButton />
    </div>
  );
};

export default Index;
