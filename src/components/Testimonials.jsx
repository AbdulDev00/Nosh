import React from 'react';

const testimonials = [
  {
    quote:
      '“Nosh AI helped us automate over 80% of our lead qualification calls. Our sales team now focuses only on ready-to-buy prospects.”',
    author: 'Sarah Malik',
    title: 'Head of Growth, AutoConnect Leads',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      '“The AI voice agent they built for us sounds incredibly human—and it books appointments better than our old call center team.”',
    author: 'James Lin',
    title: 'Operations Director, BrightSmile Clinics',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    quote:
      '“The chatbot and WhatsApp automation setup by Nosh AI saves us hours daily and keeps our customers engaged 24/7.”',
    author: 'Priya Desai',
    title: 'Founder, FitFusion Wellness',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      '“We went from missing leads to closing deals in half the time, all thanks to the systems Nosh AI built for us.”',
    author: 'Marco Reyes',
    title: 'CEO, Reyes Home Services',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      <div className="py-16 px-6" style={{ backgroundColor: '#0E1117' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">A Trusted Partner in AI</h2>
          <p className="text-white text-lg">Here’s what our clients say about working with Nosh AI Automation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between items-center text-center h-full bg-transparent p-6 rounded-xl min-h-[340px]"
            >
              <div className="relative p-4 rounded-md text-sm text-white mb-6 before:content-[''] before:absolute before:left-1/2 before:-bottom-2 before:-translate-x-1/2 before:border-8 before:border-t-transparent before:border-transparent before:border-t-solid"
                   style={{ backgroundColor: '#C95BA9' }}>
                <p>
                  {testimonial.quote.split(' ').map((word, i) => (
                    <span
                      key={i}
                      className={
                        ['poc', 'ai', 'delivered', 'velocity', '300%', 'game-changer'].includes(word.toLowerCase())
                          ? 'font-semibold'
                          : ''
                      }
                    >
                      {word + ' '}
                    </span>
                  ))}
                </p>
        
              </div>

              <div className="flex flex-col items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full mb-2"
                  style={{ border: '4px solid #005F5A' }}
                />
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-white">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
