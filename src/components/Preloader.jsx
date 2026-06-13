import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // 1.6 seconds for the fill animation, then wait 400ms for exit shutter trigger
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#FF2A2A] flex items-center justify-center pointer-events-auto"
      style={{ zIndex: 100000 }}
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
      }}
    >
      <motion.div
        className="relative flex items-center justify-center font-display font-black text-7xl md:text-9xl tracking-premium select-none"
        initial={{ scale: 1, opacity: 1 }}
        exit={{ 
          scale: 0.85, 
          opacity: 0,
          transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
        }}
      >
        {/* Base dark transparent text */}
        <span className="text-black/20">Lokesh.</span>
        
        {/* Foreground white text with clip-path water fill */}
        <span 
          className="absolute inset-0 text-white animate-water-fill"
          style={{ mixBlendMode: 'normal' }}
        >
          Lokesh.
        </span>
      </motion.div>
    </motion.div>
  );
}
