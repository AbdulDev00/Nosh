import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const accelerators = [
  {
    title: 'AI Voice Agent Accelerator',
    description:
      'Launch smart voice agents for sales, appointment setting, and customer support—custom-trained for your business.',
    icon: '🔁',
  },
  {
    title: 'Lead Qualification System',
    description: 'End-to-end automation to qualify, nurture, and follow up with leads across calls, WhatsApp, and CRM.',
    icon: '⚡',
  },
  {
    title: 'AI Chatbot Builder',
    description:
      'Conversational AI bots for websites, Messenger, or WhatsApp—built to answer FAQs, qualify leads, and drive conversions.',
    icon: '📋',
  },
  {
    title: 'Automation & CRM Integration',
    description:
      'Connect your workflows across Make, Zapier, CRMs, and more to automate repetitive tasks and sync data in real time.',
    icon: '📡',
  },
  {
    title: 'AI Strategy & ROI Workshop',
    description:
      'Discover high-impact automation opportunities and map out an AI strategy that delivers measurable ROI.',
    icon: '🧠',
  },
  {
    title: 'Custom AI Projects',
    description:
      'Need something unique? We build tailored AI automation systems aligned with your goals—from idea to deployment.',
    icon: '⚙️',
  },
];

const AcceleratorsSection = () => {
  return (
    <section className="bg-[#0E1117] text-white py-16 px-4" id='services'>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Services</h2>
        <p className="text-lg text-gray-400 mb-10">AI systems built to grow your business on autopilot.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accelerators.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center text-center border border-gray-700 rounded-lg p-6 bg-[#0E1117] hover:bg-[#1A1D25] transition duration-300 min-h-[250px]"

            >
              <div>
                <FiArrowUpRight className="absolute top-4 right-4 text-gray-500" />
                <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
              {/* Icon watermark */}
              <div className="absolute top-4 right-4 opacity-10 text-6xl pointer-events-none select-none">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcceleratorsSection;
