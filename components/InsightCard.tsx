import React, { useRef, useState } from 'react';

interface InsightCardProps {
  imageSrc: string;
  title: string;
  excerpt: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ imageSrc, title, excerpt }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    setRotation({ x: -y * 10, y: x * 10 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-96 bg-slate-800 rounded-xl shadow-lg shadow-cyan-900/10 border border-slate-700 overflow-hidden cursor-pointer transform-style-3d transition-transform duration-200 ease-out"
      style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white text-left [transform:translateZ(20px)]">
        <div className="transform transition-all duration-500 ease-in-out group-hover:-translate-y-4">
          <h3 className="text-2xl font-bold mb-2 transition-transform duration-500 ease-in-out transform translate-y-8 group-hover:translate-y-0">
            {title}
          </h3>
          <div className="opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
            <p className="text-sky-200 opacity-90 mb-4">{excerpt}</p>
            <span className="inline-block text-cyan-400 font-semibold group-hover:text-cyan-300 relative">
              Read More
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;