// components/AIStrategySection.jsx
import React from 'react';
import { Link } from "react-router-dom";

const CallToActionHome = () => {
  return (
    <section className="w-full bg-[#9F5CE1] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Discover how our AI automation solutions can transform your business operations and boost productivity. Let AI handle the routine work while you focus on growth.

        </h2>
       
        <Link   to="/contact" className="bg-[#C95BA9] text-white font-semibold py-2 px-6 rounded shadow inline-flex items-center transition duration-200">
          <svg
            className="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M12.293 9.293a1 1 0 011.414 0L17 12.586l-1.414 1.414L14 11.414V17h-2v-5.586l-1.586 1.586L9 12.586l3.293-3.293z" />
          </svg>
          Get Started Today
        </Link>
      </div>
    </section>
  );
};

export default CallToActionHome;
