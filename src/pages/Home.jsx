import React from 'react';
import AcceleratorsSection from "../components/Accelerators";
import AIExpertiseSection from "../components/Expertise";
import Footer from "../components/Footer";
import CallToActionHome from "../components/Home-CTA";
import HomeHero from "../components/Home-Hero";
import TestimonialsSection from "../components/Testimonials";
import CalendlyWidget from "../components/CalendlyWidget"; // ← import it
import Industries from '../components/Industries';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <AIExpertiseSection />
      
      <AcceleratorsSection />
            {/* Calendly Inline Embed */}
            <Industries />
      <div className="px-4 bg-[#0E1117]">
        <h2 className="text-center text-white text-3xl font-bold mb-6">Curious about how these services can help you? Schedule a free consultation today.</h2>
        <CalendlyWidget />
      </div>
      <TestimonialsSection />
      <CallToActionHome />



      <Footer />
    </>
  );
};

export default HomePage;
