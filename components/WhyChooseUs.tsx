import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GlobalIcon, UkFocusIcon, DataIcon, ReportIcon } from './icons';

interface FeatureColumnProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

const FeatureColumn: React.FC<FeatureColumnProps> = ({ icon, title, description, isVisible, delay }) => {
  return (
    <div
      className={`flex flex-col items-center text-center transition-all duration-700 [transform:rotateX(-15deg)] ${isVisible ? 'opacity-100 translate-y-0 [transform:rotateX(0deg)]' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`mb-6 text-cyan-400 ${isVisible ? 'animate-pop-in-bounce' : 'opacity-0'}`} style={{ animationDelay: `${delay + 100}ms` }}>
        {icon}
      </div>
      <h3
        className={`text-2xl font-bold text-white mb-3 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: `${delay + 300}ms` }}
      >
        {title}
      </h3>
      <p
        className={`text-sky-200 opacity-80 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: `${delay + 450}ms` }}
      >
        {description}
      </p>
    </div>
  );
};


const featuresData = [
  {
    icon: <GlobalIcon />,
    title: 'Global Expertise',
    description: 'Leveraging world-class strategies and insights from the global digital marketing landscape.',
  },
  {
    icon: <UkFocusIcon />,
    title: 'UK Market Focus',
    description: 'Specialized knowledge of the UK market to give your business a competitive, local edge.',
  },
  {
    icon: <DataIcon />,
    title: 'Data-Driven Results',
    description: 'Every decision is backed by data to ensure optimal performance and measurable ROI.',
  },
  {
    icon: <ReportIcon />,
    title: 'Transparent Reporting',
    description: 'Clear, concise, and honest reporting so you always know how your campaigns are performing.',
  },
];

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative w-full bg-slate-900 py-20 md:py-32 overflow-hidden transform-style-3d">
       <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-cyan-900/20 to-slate-900 animate-flowing-gradient opacity-30 [transform:translateZ(-50px)_scale(1.5)]"></div>
      <div className="relative container mx-auto px-4 text-center">
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-500">
            Why Partner With Us?
          </h2>
          <p className="text-lg text-sky-200 opacity-80 max-w-2xl mx-auto mb-16">
            We are more than just a marketing agency; we are your dedicated partners in growth, committed to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {featuresData.map((feature, index) => (
                <FeatureColumn 
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    isVisible={isVisible}
                    delay={index * 150}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;