import { useState } from 'react';
import { Button } from './Button';
import { Link } from "react-router-dom";
import heroVideo from '../assets/hero.mp4';

const HomeHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-start px-6 md:px-16 py-16">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-1"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Welcome to Nosh AI Automation –
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#C95BA9]">
          AI Automation For  Business Efficiency
        </h2>

        <div className="mt-8">
          <Link
            to="/contact"
            className="bg-[#9F5CE1] cursor-pointer inline-block px-4 py-2 rounded text-white font-semibold text-center"
          >
            Get in Touch
          </Link>


        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white text-black rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9F5CE1]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9F5CE1]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9F5CE1]"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9F5CE1]"
              />
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#9F5CE1] text-white px-6 py-2 rounded hover:bg-[#8c4ac5] cursor-pointer"
                >
                  Send Message
                </button>

              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeHero;
