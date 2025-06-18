import React, { useState } from 'react';

const ContactSection = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', company: '', email: '', message: '', referral: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://blueviolet-dolphin-597194.hostingersite.com/sendEmail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const text = await res.text();
      console.log('Status:', res.status);
      console.log('Raw response:', text);

      if (!res.ok) throw new Error('Network response was not ok');
      const data = JSON.parse(text);

      if (data.success) {
        setStatus('');
        setFormData({ firstName: '', lastName: '', company: '', email: '', message: '', referral: '' });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      } else {
        setStatus('Failed to send: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      console.error('Failed to parse response as JSON or network error:', err);
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <div className="relative">
      {showSuccess && (
        <div className="fixed top-5 right-5 z-50 bg-[#B55297] text-white px-6 py-3 rounded shadow-lg animate-slide-in">
          Message sent successfully!
        </div>
      )}

      {/* Main Section */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-start text-start text-gray-900">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Start Your AI <span className="font-extrabold">Journey</span>{' '}
                <span className="font-normal">with Us</span>
              </h2>
              <p className="mb-4">
                Transform your business with cutting-edge AI solutions tailored to your needs.
              </p>
              <p className="mb-6">
                Tell us what you’re looking for, and let’s build the future—together.
              </p>
              <div className="mb-4">
                <p className="font-semibold flex justify-left items-center gap-2 text-[#00786F]">
                  <i className="fas fa-phone-alt"></i> Let’s talk.
                </p>
                <a href="tel:1-800-621-7063" className="text-gray-900 font-bold block">
                  +923142752016
                </a>
              </div>
              <div className="mb-4">
                <p className="font-semibold flex justify-left items-center gap-2 text-[#00786F]">
                  <i className="fas fa-envelope"></i> Drop us a line.
                </p>
                <a href="mailto:noshaiautomation@gmail.com" className="text-gray-900 font-bold block">
                  noshaiautomation@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-1/2 bg-none p-8 rounded-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name*"
                  className="w-full p-3 border border-gray-300 text-gray-900 rounded placeholder-gray-500 focus:outline-none focus:border-black"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name*"
                  className="w-full p-3 border border-gray-300 text-gray-900 rounded placeholder-gray-500 focus:outline-none focus:border-black"
                  required
                />
              </div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name*"
                className="w-full p-3 border border-gray-300 text-gray-900 rounded placeholder-gray-500 focus:outline-none focus:border-black"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your company email*"
                className="w-full p-3 border border-gray-300 text-gray-900 rounded placeholder-gray-500 focus:outline-none focus:border-black"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what type of solution you are looking for*"
                className="w-full p-3 border border-gray-300 text-gray-900 rounded placeholder-gray-500 focus:outline-none focus:border-black"
                rows="3"
                required
              />
              <textarea
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                placeholder="How did you hear about Nosh AI?*"
                className="w-full p-3 border border-gray-300 text-gray-900 rounded placeholder-gray-500 focus:outline-none focus:border-black"
                rows="2"
                required
              />
              <button
                type="submit"
                className="bg-[#C95BA9] text-white px-6 py-3 rounded hover:bg-[#00635C] transition cursor-pointer"
              >
                Submit
              </button>
            </form>
            <p className="text-xs mt-4 text-gray-600">
              By submitting this form, you agree to our{' '}
              <a href="#" className="underline text-[#C95BA9]">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
