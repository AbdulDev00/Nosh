import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-[#0d1117] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="md:w-1/2 w-full mb-10 md:mb-0">
        <p className="text-[#9F5CE1] text-md font-medium mb-2">
          About NoshAI
        </p>
        <h3 className="text-3xl md:text-3xl font-bold leading-tight mb-4">
     Founded by visionary technologist Shayan ul Arfeen in 2023, NoshAI is a modern AI and automation company bridging the gap between cost-effective execution and high touch client service. Originally from Pakistan and now based in Texas, Shayan launched NoshAI to solve a problem he encountered too often; vendors who overpromise and underdeliver.
        </h3>
    
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="https://hatchworks.com/wp-content/uploads/2024/01/ai-nearshore.svg"
          alt="AI Illustration"
          className="w-xl max-w-md md:max-w-full object-contain"
        />
      </div>
    </section>
  );
};

export default AboutHero;
