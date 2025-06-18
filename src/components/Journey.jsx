import React from 'react';

const OurJourney = () => {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Image Section */}
      <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
        <img
          src="https://hatchworks.com/wp-content/uploads/2023/10/Asset-1-1024x696.png"
          alt="Team Collaboration"
          className="w-full max-w-md md:max-w-lg object-contain"
        />
      </div>

      {/* Right Text Section */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Delivering Quality Nearshore Solutions with Global Reach</h2>
        <h2 className="text-lg font-semibold text-black mb-4">
         While headquartered in Pakistan, NoshAI brings a global mindset with local execution. Our nearshore model offers the perfect balance of affordability, scalability, and quality; without compromising on accountability.
        </h2>
        
      </div>
    </section>
  );
};

export default OurJourney;
