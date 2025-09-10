
import React, { useState, useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const HeroBanner: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const formRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!formRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = formRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    setRotation({ x: -y * 15, y: x * 15 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      localStorage.setItem('contactFormData', JSON.stringify(formData));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); 
    } catch (err) {
      setError('Failed to save your message. Please try again.');
      console.error('LocalStorage error:', err);
    }
  };


  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#030d31] to-[#0f172a] py-20 transform-style-3d">
      <div className="absolute inset-0 [transform:translateZ(-50px)_scale(1.5)]">
        <ParticleBackground />
      </div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between text-white gap-16">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left [transform:translateZ(20px)]">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-500">
            Amplify Your Digital Presence
          </h1>
          <p className="text-lg md:text-xl text-sky-200 opacity-80 mb-8 max-w-xl mx-auto lg:mx-0">
            Tailored digital marketing strategies for UK businesses to dominate the online space.
          </p>
          <a
            href="#consultation"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-cyan-500 rounded-lg transition-transform transform hover:scale-105 animate-pulse-glow"
          >
            Get a Free Consultation
          </a>
        </div>
        
        {/* Right Side: Contact Form */}
        <div 
          ref={formRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:w-1/2 w-full max-w-md transition-transform duration-200 ease-out"
          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl shadow-cyan-500/10 border border-slate-700 transform-style-3d">
            {isSubmitted ? (
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">Thank You!</h2>
                <p className="text-sky-200">Your message has been received. We'll be in touch shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-center mb-6 text-cyan-400 [transform:translateZ(20px)]">Request a Consultation</h2>
                <form onSubmit={handleSubmit} noValidate className="[transform:translateZ(10px)]">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sky-200 mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"
                      placeholder="Your Name"
                      required
                      aria-label="Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sky-200 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"
                      placeholder="your.email@example.com"
                      required
                      aria-label="Email"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sky-200 mb-2 font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"
                      placeholder="How can we help you?"
                      required
                      aria-label="Message"
                    ></textarea>
                  </div>
                  {error && <p className="text-red-400 text-center mb-4">{error}</p>}
                  <button
                    type="submit"
                    className="w-full px-8 py-3 text-lg font-semibold text-white bg-cyan-600 rounded-lg transition-all transform hover:scale-105 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-400"
                  >
                    Submit Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;