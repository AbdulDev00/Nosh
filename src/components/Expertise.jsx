import React from 'react';
import { FaUserCheck, FaCheckCircle, FaUsers } from 'react-icons/fa';

const AIExpertiseSection = () => {
  return (
    <section className="bg-[#0f1218] text-white px-6 py-12 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold">
          It is easy to do <span className="text-white">AI.</span>
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-[#C95BA9] mt-2">
          It is hard to do well.
        </h2>

        {/* Description */}
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
          We act as your <strong> guide</strong> enabling you to maintain control of your strategy and ownership of your IP while helping you avoid pitfalls along the journey.
        </p>

        {/* Divider */}
        <div className="border-b border-gray-600 my-10" />

        {/* 3 Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <FaUserCheck className="mx-auto text-[#C95BA9] text-3xl mb-4" />
            <h3 className="text-xl font-semibold">The Right Expertise</h3>
            <p className="text-gray-400 mt-2">
              End to End AI and data expertise focused on getting you to ROI faster
            </p>
          </div>

          <div>
            <FaCheckCircle className="mx-auto text-[#C95BA9] text-3xl mb-4" />
            <h3 className="text-xl font-semibold">A Proven Approach</h3>
            <p className="text-gray-400 mt-2">
              Our unique <strong>Generative-Driven Development™</strong> approach combines AI and agents to deliver faster, higher-quality software in a bold new way
            </p>
          </div>

          <div>
            <FaUsers className="mx-auto text-[#C95BA9] text-3xl mb-4" />
            <h3 className="text-xl font-semibold">Top AI & Data Talent</h3>
            <p className="text-gray-400 mt-2">
              Accelerate your AI roadmap with the top AI and data talent across the World – all in your timezone
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-b border-gray-600 mt-10" />
      </div>
    </section>
  );
};

export default AIExpertiseSection;
