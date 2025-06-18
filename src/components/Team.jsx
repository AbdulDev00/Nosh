import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import shayan from '../assets/shayan.PNG'
import saim from '../assets/saim.jpg'
import bilal from '../assets/bilal.jpeg'


const teamMembers = [
  {
    name: 'Shayan Arfeen',
    position: 'Founder & CEO',
    image: shayan,
  },
  {
    name: 'Muhammad Saif',
    position: 'Chief Operating Officer',
    image: 'https://source.unsplash.com/300x300/?man,portrait',
  },
  {
    name: 'Momin Sami',
    position: 'Business Development Manager',
    image: 'https://source.unsplash.com/300x300/?man,portrait',
  },
  {
    name: 'Syed Saim Hussain',
    position: 'AI Automation Consultant',
    image: saim,
  },
  {
    name: 'Bilal Zindani',
    position: 'Product Manager',
    image: bilal,
  },
  {
    name: 'Abdul Rehman',
    position: 'Full Stack Developer',
    image: 'https://source.unsplash.com/300x300/?businesswoman',
  },
];

const PrevArrow = ({ className, style, onClick }) => (
  <button
    className="absolute z-10 left-[-40px] top-1/2 transform -translate-y-1/2 text-white bg-[#C95BA9] p-2 rounded-full shadow-lg cursor-pointer"
    onClick={onClick}
    style={{ ...style }}
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    className="absolute z-10 right-[-40px] top-1/2 transform -translate-y-1/2 text-white bg-[#C95BA9] p-2 rounded-full shadow-lg cursor-pointer"
    onClick={onClick}
    style={{ ...style }}
  >
    <FaChevronRight />
  </button>
);


const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#0D1117] py-20 px-6 md:px-20 relative">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        Meet Our Team
      </h2>

      <div className="relative">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4">
              <div className="bg-transparent rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-white font-medium mb-2">{member.position}</p>
                <p className="text-white mb-4 text-sm">{member.bio}</p>
                <button className="mt-auto bg-[#C95BA9] text-white text-sm font-medium py-2 px-4 rounded hover:bg-[#004844] transition">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
