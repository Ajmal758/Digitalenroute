import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import InsightCard from './InsightCard';
import { AnalyticsIcon, ChatBubbleIcon } from './icons';

const insightsData = [
  {
    imageSrc: 'https://placehold.co/600x400/0f172a/67e8f9?text=SEO+Trends',
    title: 'Top SEO Trends to Watch in 2024',
    excerpt: 'Stay ahead of the curve with our expert analysis on the future of search engine optimization.',
  },
  {
    imageSrc: 'https://placehold.co/600x400/0f172a/67e8f9?text=Social+Media',
    title: 'The Power of Community on Social Media',
    excerpt: 'Learn how to build a loyal community that advocates for your brand and drives growth.',
  },
  {
    imageSrc: 'https://placehold.co/600x400/0f172a/67e8f9?text=Content+AI',
    title: 'AI in Content Marketing: A Game Changer',
    excerpt: 'Discover how artificial intelligence is revolutionizing content creation and strategy.',
  },
];

const InsightsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative w-full bg-slate-900/50 py-20 md:py-32 overflow-hidden transform-style-3d">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <AnalyticsIcon className="absolute top-[10%] left-[5%] w-16 h-16 text-cyan-500/10 animate-icon-drift [transform:translateZ(-80px)]" />
        <ChatBubbleIcon className="absolute top-[70%] right-[10%] w-20 h-20 text-cyan-500/10 animate-icon-drift animation-delay-2000 animation-duration-25s [transform:translateZ(-40px)]" />
        <AnalyticsIcon className="absolute top-[40%] right-[20%] w-12 h-12 text-cyan-500/5 animate-icon-drift animation-delay-4000 animation-duration-30s [transform:translateZ(-100px)]" />
        <ChatBubbleIcon className="absolute top-[80%] left-[15%] w-14 h-14 text-cyan-500/5 animate-icon-drift animation-delay-1000 animation-duration-20s [transform:translateZ(-20px)]" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-500">
            Our Latest Insights
          </h2>
          <p className="text-lg text-sky-200 opacity-80 max-w-2xl mx-auto mb-16">
            Explore our latest articles, trends, and thoughts on the digital marketing landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.map((insight, index) => (
            <div
              key={insight.title}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <InsightCard
                imageSrc={insight.imageSrc}
                title={insight.title}
                excerpt={insight.excerpt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;