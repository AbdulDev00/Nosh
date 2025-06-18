import React from 'react';
import automotive from '../assets/automotive.png'
import healthcare from '../assets/healthcare.png'
import home from '../assets/home-services.png'
import resturants from '../assets/resturants.png'
import estate from '../assets/estate.png'
import ecommerce from '../assets/ecommerce.png'

const industryContent = [
    {
        image: healthcare,
        heading: 'Healthcare',
        subheading: 'Smarter Patient Engagement, 24/7',
        description:
            'We help healthcare providers automate appointment scheduling, follow-ups, and common patient queries using voice and chat AI. From clinics to wellness centers, we create HIPAA-conscious automations that enhance care while saving your team hours each week.',
        useCases: [
            'AI voice agent for appointment bookings & reminders',
            'Automated intake & follow-up messages',
            'Chatbots for FAQs and symptom screening',
        ],
    },
    {
        image: estate,
        heading: 'Real Estate',
        subheading: 'More Leads, Less Manual Work',
        description:
            'Real estate agents and brokerages use our AI to pre-qualify buyers and sellers, follow up instantly, and keep deals moving—all without lifting a finger. Never miss another hot lead again.',
        useCases: [
            'AI voice bots for lead follow-up & property inquiries',
            'Chatbots for listings, financing, and scheduling',
            'CRM automation for client touchpoints',
        ],
    },
    {
        image: automotive,
        heading: 'Automotive',
        subheading: 'Turn Browsers into Buyers',
        description:
            'From car dealerships to auto financing, we build AI voice agents that handle buyer questions, qualify prospects, and drive more test drives—without the phone tag.',
        useCases: [
            'Voice agent for vehicle info, finance pre-qualification',
            'WhatsApp & SMS bots for appointment setting',
            'Follow-up automation for cold leads & past inquiries',
        ],
    },
    {
        image: resturants,
        heading: 'Restaurants & Hospitality',
        subheading: 'Book More Tables with AI That Sounds Human',
        description:
            'We build voice bots that handle reservations, reschedules, and common guest questions—so your staff can focus on service. Perfect for fine dining, cafes, and high-volume venues.',
        useCases: [
            'AI reservation agent with human-like tone',
            'Voice/text automation for updates & cancellations',
            'Chatbots for menus, hours, and private dining info',
        ],
    },
    {
        image: ecommerce,
        heading: 'E-commerce',
        subheading: 'Always-On Customer Support',
        description:
            'E-commerce brands use our bots to handle order tracking, returns, product questions, and upsells—freeing up your team to focus on growth.',
        useCases: [
            'Chatbots for order status, shipping FAQs, returns',
            'Product recommendation bots',
            'Abandoned cart recovery automation',
        ],
    },
    {
        image: home,
        heading: 'Home Services',
        subheading: 'From Quote to Booked—All on Autopilot',
        description:
            'Whether you’re in plumbing, HVAC, cleaning, or landscaping, our AI handles inquiries, books jobs, and follows up—so you stay focused on the work.',
        useCases: [
            'Voice/text bots for quote requests & job scheduling',
            'Automated appointment confirmations & reminders',
            'Review collection and repeat customer nurturing',
        ],
    },
];



const Industries = () => {
    return (
        <section className="bg-[#0E1117] text-white py-16 px-4" id="services">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Industries We Serve</h2>
                    <p className="text-lg text-gray-400">
                        At Nosh AI Automation, we build custom AI voice agents and automation systems tailored to specific industries. Here's how we make an impact.
                    </p>
                </div>

                {industryContent.map((item, index) => {
                    const isEven = index % 2 === 0;


                    return (
                        <div
                            key={index}
                            className={`flex flex-col-reverse lg:flex-row items-center gap-10 mb-16 ${isEven ? '' : 'lg:flex-row-reverse'
                                }`}
                        >
                            {/* Content */}
                            <div className="w-full lg:w-1/2 text-left">
                                <h3 className="text-2xl font-bold mb-2">{item.heading}</h3>
                                <h4 className="text-xl text-gray-300 mb-4">{item.subheading}</h4>
                                <p className="text-gray-400 mb-4">{item.description}</p>
                                <h5 className="text-lg font-semibold text-white mb-2">Use Cases:</h5>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    {item.useCases.map((useCase, i) => (
                                        <li key={i}> {useCase}</li>
                                    ))}
                                </ul>
                            </div>

                   
<div className="w-full lg:w-1/2">
  <div className="relative group perspective-[1200px]">
    <div
      className="transform transition-transform duration-500 rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#1f2937] to-[#111827]"
    >
      <img
        src={item.image}
        alt={item.heading}
        className="w-full h-full object-cover mix-blend-lighten opacity-90"
      />
      {/* Glow with reduced spread */}
      <div
        className={`absolute w-34 h-24 bg-[#00FFD1] blur-[70px] opacity-50 rounded-full
          -bottom-6 ${isEven ? '-left-6' : '-right-6'}
        `}
      />
    </div>
  </div>
</div>



                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Industries;
