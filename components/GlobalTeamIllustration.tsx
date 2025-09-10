import React from 'react';

const GlobalTeamIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: 'rgba(56, 189, 248, 0.4)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(56, 189, 248, 0)', stopOpacity: 1 }} />
          </radialGradient>
          <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Globe Background */}
        <circle cx="200" cy="150" r="140" fill="url(#glowGradient)" opacity="0.5" />
        <path d="M60 150 A 140 140 0 0 1 340 150" stroke="#0e7490" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M110 57.1 A 140 140 0 0 1 290 242.9" stroke="#0e7490" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M290 57.1 A 140 140 0 0 1 110 242.9" stroke="#0e7490" strokeWidth="1" fill="none" opacity="0.5" />

        {/* Team Member 1 (Center) */}
        <g transform="translate(175 160)">
          <rect x="0" y="0" width="50" height="30" rx="5" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
          <rect x="5" y="5" width="40" height="20" fill="#22d3ee" opacity="0.3" className="animate-pulse" />
          <path d="M 25 30 L 25 45 L 20 60 H 30 L 25 45" fill="#083344" />
        </g>
        
        {/* Team Member 2 (Left) */}
        <g transform="translate(80 100)">
          <rect x="0" y="0" width="40" height="24" rx="4" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
          <rect x="4" y="4" width="32" height="16" fill="#22d3ee" opacity="0.2" className="animate-pulse animation-delay-300" />
           <path d="M 20 24 L 20 35 L 16 48 H 24 L 20 35" fill="#083344" />
        </g>
        
        {/* Team Member 3 (Right) */}
        <g transform="translate(280 120)">
          <rect x="0" y="0" width="45" height="27" rx="4.5" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
          <rect x="4.5" y="4.5" width="36" height="18" fill="#22d3ee" opacity="0.4" className="animate-pulse animation-delay-500" />
          <path d="M 22.5 27 L 22.5 40 L 18 54 H 27 L 22.5 40" fill="#083344" />
        </g>

        {/* Floating Icons */}
        <g className="animate-icon-float" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
          <path d="M 50 80 L 60 70 L 70 80 L 60 90 Z" fill="#67e8f9" opacity="0.8" filter="url(#glow-filter)" />
        </g>
        <g className="animate-icon-float animation-delay-1000" style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDuration: '6s' }}>
          <circle cx="350" cy="190" r="8" fill="#a5f3fc" opacity="0.8" filter="url(#glow-filter)" />
        </g>
        <g className="animate-icon-float animation-delay-500" style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDuration: '4s' }}>
          <rect x="150" y="50" width="12" height="12" rx="3" fill="#cffafe" opacity="0.8" filter="url(#glow-filter)" />
        </g>
      </svg>
    </div>
  );
};

export default GlobalTeamIllustration;