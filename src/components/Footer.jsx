import React from 'react';
import { Facebook, Youtube, Music2 } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0D1117] text-white py-16 px-4">
      <div className="border-t border-gray-700 pt-10">
        <div className="max-w-7xl mx-auto flex flex-row justify-evenly text-sm text-gray-300">
          
          <div className="text-left">
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
   <li>
    <Link to="/">
      <a className="hover:underline">Home</a>
    </Link>
  </li>
  <li>
    <Link to="/about-us">
      <a className="hover:underline">About</a>
    </Link>
  </li>
  <li>
    <Link to="/contact">
      <a className="hover:underline">Contact</a>
    </Link>
  </li>

            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">GET IN TOUCH</h3>
                   <ul className="space-y-1 ">
              <li>Email Us</li>
              <li>info@noshaiautomation.com</li>
            </ul>
            <ul className="space-y-1 mt-5">
              <li>Book a call</li>
              <li>+92 3142752016</li>
            </ul>
     
            <div className="flex gap-4 mt-4 text-white">
              <Facebook className="w-5 h-5" />
              <Youtube className="w-5 h-5" />
              <Music2 className="w-5 h-5" />
            </div>
          </div>

        </div>

     <p className="text-center text-xs text-gray-400 mt-10 px-4 select-none">
  &copy; 2025{' '}
  <span className="font-semibold text-[#C95BA9] hover:text-[#FF79C6] transition-colors duration-300 cursor-default">
    NoshAIAutomations
  </span>
</p>

      </div>
    </footer>
  );
};

export default Footer;
