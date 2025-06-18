import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import '../index.css';
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Common link classes for desktop links
  const desktopLinkClass = "hover:text-[#9F5CE1] cursor-pointer transition-colors duration-300 font-semibold";
  // Common button classes for scroll buttons
  const scrollButtonClass = "hover:text-[#9F5CE1] bg-transparent border-none cursor-pointer font-semibold transition-colors duration-300";

  // For mobile links and buttons
  const mobileLinkClass = "hover:text-[#9F5CE1] block w-full text-left py-2 font-semibold";

  return (
    <nav className="bg-black text-white">
      <div className="max-w-full py-6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold flex items-center">
              <img src={logo} alt="Logo" className="h-30 w-auto ml-2" />
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" onClick={handleLinkClick} className={desktopLinkClass}>
              Home
            </Link>

            <Link to="/about-us" onClick={handleLinkClick} className={desktopLinkClass}>
              About Us
            </Link>




          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right mr-2">
              <p className="text-sm">databricks</p>
              <p className="text-[10px] text-gray-400">OFFICIAL PARTNER</p>
            </div>
            <Link
              to="/contact"
              className="bg-[#9F5CE1] text-white px-5 py-1 rounded text-sm font-semibold border-none cursor-pointer inline-block text-center"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="focus:outline-none">
              {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden custom-mobile-menu px-4 pb-4 space-y-2 bg-black text-white">
          <Link to="/" onClick={handleLinkClick} className={mobileLinkClass}>
            Home
          </Link>

          <Link to="/about-us" onClick={handleLinkClick} className={mobileLinkClass}>
            About Us
          </Link>

          <button
            onClick={() => scrollToSection("services")}
            className={`${mobileLinkClass} bg-transparent border-none cursor-pointer text-left`}
          >
            Our Services
          </button>





          <div className="mt-4">
            <div className="text-sm text-gray-300 mb-2">
              databricks
              <br />
              <span className="text-[10px] text-gray-500">OFFICIAL PARTNER</span>
            </div>
            <button
              onClick={() => scrollToSection("contact-us")}
              className="bg-[#9F5CE1] text-white px-5 py-1 rounded text-sm font-semibold border-none cursor-pointer w-full"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
