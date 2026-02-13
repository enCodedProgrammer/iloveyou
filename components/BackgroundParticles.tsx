
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles: React.FC = () => {
  const hearts = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            y: '100vh', 
            x: `${Math.random() * 100}vw`,
            scale: 0.5 + Math.random() 
          }}
          animate={{ 
            opacity: [0, 0.2, 0], 
            y: '-10vh',
            x: `${(Math.random() * 100) + (Math.sin(i) * 10)}vw` 
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-[#800020] opacity-10"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="currentColor" />
          </svg>
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[#F8F5F0] opacity-80" />
    </div>
  );
};

export default BackgroundParticles;
