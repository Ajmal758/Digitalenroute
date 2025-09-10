import React, { useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SpinningGlobe from './SpinningGlobe';

const VisionMission: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > sectionTop && window.scrollY < sectionTop + sectionRef.current.offsetHeight) {
        setOffsetY(window.scrollY - sectionTop);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-slate-900/50 py-20 md:py-40 overflow-hidden transform-style-3d">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Side: Text Content */}
        <div className={`lg:w-1/2 w-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={isVisible ? 'animate-fade-in-slide-left' : ''}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-500">
              Our Vision & Mission
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Our Vision</h3>
                <p className="text-lg text-sky-200 opacity-80">
                  To be the UK's leading digital growth partner, pioneering innovative strategies that create lasting value and measurable success for our clients in a constantly evolving digital world.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Our Mission</h3>
                <p className="text-lg text-sky-200 opacity-80">
                  To empower businesses with data-driven, transparent, and bespoke digital marketing solutions that drive growth, foster engagement, and build sustainable online dominance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Illustration with Parallax */}
        <div className="lg:w-1/2 w-full max-w-lg mx-auto">
          <div
            className="transition-transform duration-200 ease-out"
            style={{ transform: `translateY(${offsetY * 0.2}px) translateZ(${offsetY * -0.2}px)` }}
          >
            <SpinningGlobe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;