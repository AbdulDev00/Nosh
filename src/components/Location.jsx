import React from "react";
import { MapPin } from "lucide-react";

const NoshAI = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 tracking-tight">
        <span className="inline-flex items-center gap-3">
          <MapPin className="text-teal-400 w-7 h-7" /> 
          NoshAI Across the Americas
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
        <img
          src="https://hatchworks.com/wp-content/uploads/2023/10/medellin-hatchworks-office-nearshore-latin-america-1024x768.webp"
          alt="NoshAI Team Collaboration"
          className="rounded-3xl shadow-xl w-full h-full object-cover "
        />

        <div className="space-y-8 text-center md:text-left">
          <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-teal-300 mb-2">USA Office</h3>
            <p className="text-gray-300">
              5900 Balcones Drive, Suite 100<br />
              Austin, TX 78731, United States
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-teal-300 mb-2">Pakistan Office</h3>
            <p className="text-gray-300">
              Plot No. 251, DMCH Society<br />
              Karachi, Sindh, Pakistan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoshAI;
