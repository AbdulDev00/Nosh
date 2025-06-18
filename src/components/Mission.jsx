import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-[#9F5CE1] py-20 px-6 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://hatchworks.com/wp-content/uploads/2024/08/GenDD-.svg" // Replace with the actual path or use imported image
            alt="Generative-Driven Logo"
            className="max-w-[300px] w-full"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To make automation and AI accessible, effective, and scalable,
            helping businesses grow without the usual complexity or inflated
            costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
