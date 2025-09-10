
import React from 'react';

const TechGlobe: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center animate-float">
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
        <defs>
          <radialGradient id="globeGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.8" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Globe Body */}
        <circle cx="100" cy="100" r="90" fill="url(#globeGradient)" opacity="0.4" filter="url(#glow)" />
        <circle cx="100" cy="100" r="90" fill="transparent" stroke="rgba(100, 220, 255, 0.5)" strokeWidth="1" />

        {/* Orbiting Lines */}
        <path d="M 10,100 A 90,50 0 0 1 190,100" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
           <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 10,100 A 90,50 0 0 0 190,100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
        
        <path d="M 100,10 A 50,90 0 0 1 100,190" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" >
           <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 100,10 A 50,90 0 0 0 100,190" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />

        {/* Pulsing Data Points */}
        <circle cx="80" cy="70" r="4" fill="#f0f9ff" className="animate-pulse" />
        <circle cx="135" cy="115" r="3" fill="#f0f9ff" className="animate-pulse animation-delay-300" />
        <circle cx="90" cy="150" r="3" fill="#f0f9ff" className="animate-pulse animation-delay-500" />
        <circle cx="45" cy="105" r="2" fill="#f0f9ff" className="animate-pulse animation-delay-700" />
        <circle cx="160" cy="90" r="4" fill="#f0f9ff" className="animate-pulse animation-delay-1000" />
      </svg>
    </div>
  );
};

export default TechGlobe;
