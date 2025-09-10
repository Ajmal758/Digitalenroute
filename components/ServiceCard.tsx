import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative h-full bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg shadow-cyan-900/10 border border-slate-700 overflow-hidden transition-all duration-300 ease-out hover:shadow-cyan-500/20 hover:border-cyan-600 hover:-translate-y-2 transform-style-3d hover:[transform:rotateY(10deg)_rotateX(5deg)]">
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105"
      ></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 text-cyan-400 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.7)] group-hover:[transform:scale(1.1)_translateZ(40px)]">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-300 [transform:translateZ(20px)]">
          {title}
        </h3>
        <div className="h-16 [transform:translateZ(10px)]">
          <p className="text-sky-200 opacity-0 transform translate-y-4 transition-all duration-300 ease-in-out group-hover:opacity-80 group-hover:translate-y-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;