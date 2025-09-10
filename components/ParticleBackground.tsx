
import React from 'react';

// This component uses hardcoded particle elements to adhere to the "no inline styles" rule.
// Custom animation utility classes are defined in index.html for delays and durations.
const ParticleBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="particle w-1 h-1 top-[10%] left-[5%] animation-duration-20s"></div>
      <div className="particle w-0.5 h-0.5 top-[20%] left-[80%] animation-duration-25s animation-delay-1000"></div>
      <div className="particle w-[3px] h-[3px] top-[50%] left-[50%] animation-duration-15s animation-delay-3000"></div>
      <div className="particle w-1 h-1 top-[90%] left-[15%] animation-duration-30s animation-delay-500"></div>
      <div className="particle w-0.5 h-0.5 top-[5%] left-[95%] animation-duration-20s animation-delay-2000"></div>
      <div className="particle w-1 h-1 top-[30%] left-[30%] animation-duration-35s animation-delay-700"></div>
      <div className="particle w-[2px] h-[2px] top-[70%] left-[70%] animation-duration-15s animation-delay-4000"></div>
      <div className="particle w-0.5 h-0.5 top-[85%] left-[40%] animation-duration-25s animation-delay-5000"></div>
      <div className="particle w-1 h-1 top-[40%] left-[5%] animation-duration-30s"></div>
      <div className="particle w-[3px] h-[3px] top-[60%] left-[90%] animation-duration-20s animation-delay-300"></div>
      <div className="particle w-0.5 h-0.5 top-[55%] left-[10%] animation-duration-25s animation-delay-1000"></div>
      <div className="particle w-1 h-1 top-[5%] left-[45%] animation-duration-15s animation-delay-5000"></div>
    </div>
  );
};

export default ParticleBackground;
