import React from 'react';

const SpinningGlobe: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Pulsing Core */}
        <circle cx="150" cy="150" r="40" fill="url(#coreGlow)" className="animate-pulse" />

        {/* Orbiting Rings Set 1 */}
        <g className="animate-spin-slow" style={{ transformOrigin: 'center' }}>
          <ellipse cx="150" cy="150" rx="100" ry="100" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="5 10" />
          <ellipse cx="150" cy="150" rx="120" ry="60" stroke="#0e7490" strokeWidth="1.5" fill="none" opacity="0.6" />
          <circle cx="150" cy="90" r="4" fill="#f0f9ff" className="animate-pulse animation-delay-500" />
          <circle cx="250" cy="135" r="3" fill="#f0f9ff" className="animate-pulse animation-delay-1000" />
        </g>
        
        {/* Orbiting Rings Set 2 (Reversed) */}
        <g className="animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s', transformOrigin: 'center' }}>
          <ellipse cx="150" cy="150" rx="70" ry="130" stroke="#67e8f9" strokeWidth="1" fill="none" opacity="0.5" />
          <ellipse cx="150" cy="150" rx="140" ry="80" stroke="#0e7490" strokeWidth="1" fill="none" opacity="0.3" transform="rotate(45 150 150)" />
          <circle cx="220" cy="150" r="4" fill="#f0f9ff" className="animate-pulse" />
          <circle cx="80" cy="150" r="3" fill="#f0f9ff" className="animate-pulse animation-delay-700" />
        </g>

        {/* Outer Grid Sphere */}
        <g className="animate-spin-slow" style={{ animationDuration: '60s', transformOrigin: 'center' }}>
            <path d="M 10,150 A 140 140 0 0 1 290 150" stroke="#083344" strokeWidth="1" fill="none" opacity="0.8" />
            <path d="M 54.3,64.3 A 140 140 0 0 1 245.7,235.7" stroke="#083344" strokeWidth="1" fill="none" opacity="0.8" />
            <path d="M 245.7,64.3 A 140 140 0 0 1 54.3,235.7" stroke="#083344" strokeWidth="1" fill="none" opacity="0.8" />
        </g>

      </svg>
    </div>
  );
};

export default SpinningGlobe;