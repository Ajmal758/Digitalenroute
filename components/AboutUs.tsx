import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import GlobalTeamIllustration from './GlobalTeamIllustration';

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section ref={sectionRef} className="relative w-full bg-slate-900 py-20 md:py-32 overflow-hidden transform-style-3d">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Side: Text Content */}
        <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transform: 'translateZ(30px)' }}>
          <div className={isVisible ? 'animate-fade-in-slide-left' : ''}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-500">
              Your Partner in Digital Growth
            </h2>
            <p className="text-lg text-sky-200 opacity-80 mb-4">
              Digital Enroute is a forward-thinking digital marketing agency dedicated to elevating UK businesses. We blend innovative strategies with data-driven insights to create powerful online experiences that convert.
            </p>
            <p className="text-lg text-sky-200 opacity-80">
              Our team of experts is passionate about navigating the complexities of the digital landscape to deliver measurable results. From SEO to social media, we're committed to helping you dominate your market.
            </p>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className={`lg:w-1/2 w-full max-w-lg mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transform: 'translateZ(-30px)' }}>
          <div className={isVisible ? 'animate-fade-in-scale-up animation-delay-200' : ''}>
            <GlobalTeamIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;