import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ServiceCard from './ServiceCard';
import { SeoIcon, AdsIcon, SocialIcon, ContentIcon, WebDevIcon } from './icons';

const servicesData = [
  {
    icon: <SeoIcon />,
    title: 'SEO Optimization',
    description: 'Boost your visibility and rank higher on search engines with our data-driven SEO strategies.',
  },
  {
    icon: <AdsIcon />,
    title: 'Google Ads',
    description: 'Drive targeted traffic and generate leads with expertly managed PPC campaigns.',
  },
  {
    icon: <SocialIcon />,
    title: 'Social Media Marketing',
    description: 'Engage your audience and build your brand across all major social platforms.',
  },
  {
    icon: <ContentIcon />,
    title: 'Content Marketing',
    description: 'Create valuable content that attracts, informs, and converts your target audience.',
  },
  {
    icon: <WebDevIcon />,
    title: 'Website Development',
    description: 'Build fast, responsive, and user-friendly websites that serve as your digital storefront.',
  },
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative w-full bg-slate-900/50 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-500">
            Our Core Services
          </h2>
          <p className="text-lg text-sky-200 opacity-80 max-w-2xl mx-auto mb-16">
            We provide a complete suite of digital marketing services designed to grow your business and dominate the competition.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
