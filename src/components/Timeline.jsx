import React from 'react';

const timelineItems = [
  {
   
    title: 'Built, not bought',
    description:
      'Unlike others who grow through acquisitions or subcontracting, we’ve built our team from the ground up.',
  },
  {

    title: 'Unified culture',
    description:
      'This intentional approach has led to a 98.5% employee retention rate, proof of our commitment to team stability and trust.',
  },
  {

    title: 'High performance delivery',
    description:
      'Our "Hatchers" are relentless in staying ahead of the curve, pushing technological boundaries to deliver beyond expectations.',
  },
];

const Timeline = () => {
  return (
    <section className="bg-[#0D1117] py-20 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-center text-white mb-16">
        How We're Different
      </h2>

      <div className="flex justify-center">
        <ol className="relative border-s border-gray-700 max-w-2xl w-full ps-4">
          {timelineItems.map((item, index) => (
            <li key={index} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                {item.date}
              </time>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mb-4 text-base font-normal text-gray-400">
                {item.description}
              </p>
    
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
