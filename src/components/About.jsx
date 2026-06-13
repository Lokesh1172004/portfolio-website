import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function About() {
  // Floating animation for tech logos
  const logoFloat = (delayValue) => ({
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: delayValue,
      },
    },
  });

  return (
    <section
      id="about"
      className="relative bg-[#FF2A2A] text-black py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Floating abstract black stars */}
      <motion.div
        className="absolute top-12 left-10 text-black/15 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Star size={36} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-12 text-black/10 pointer-events-none"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Star size={48} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/4 text-black/15 pointer-events-none"
        animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, 60, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <Star size={28} fill="currentColor" />
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Developer ID Badge hanging from lanyard */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Lanyard Strap */}
          <div className="w-3 h-24 bg-black rounded-t-full shadow-md relative z-10" />
          
          {/* Lanyard Metal Clip */}
          <div className="w-8 h-8 bg-zinc-300 border-2 border-zinc-400 rounded-lg shadow-md -mt-1 flex items-center justify-center relative z-20">
            <div className="w-4 h-4 bg-zinc-600 rounded-full" />
            <div className="absolute -bottom-2 w-2 h-4 bg-zinc-500 rounded" />
          </div>

          {/* ID Card Wrapper with tilt */}
          <motion.div
            className="w-full max-w-[340px] bg-[#1C1C1C] rounded-[1.5rem] p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-2 border-black/40 mt-1 relative z-30 select-none text-white cursor-pointer origin-top"
            style={{ rotate: -3 }}
            whileHover={{ 
              rotate: 0, 
              y: -8,
              scale: 1.02,
              shadow: '0 35px 60px -15px rgba(0,0,0,0.7)',
              transition: { duration: 0.3 }
            }}
          >
            {/* Hologram Badge Dot & Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                CIRCULANTS STAFF ID
              </span>
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)] animate-pulse" />
            </div>

            {/* Photo Box */}
            <div className="w-full aspect-square bg-[#111] rounded-xl overflow-hidden mb-5 border border-white/10 flex items-center justify-center relative">
              <img
                src="/profile.png"
                alt="Lokesh Zambare"
                className="w-full h-full object-cover grayscale contrast-[1.1]"
              />
              {/* Badge visual lines */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Info Section */}
            <div className="space-y-3">
              <div>
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                  NAME
                </div>
                <div className="font-display font-black text-xl tracking-tight text-white">
                  LOKESH ZAMBARE
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    ROLE
                  </div>
                  <div className="text-sm font-semibold text-[#FF2A2A]">
                    Business Analyst
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    DEPT
                  </div>
                  <div className="text-sm font-semibold text-white/80">
                    Clinical Data
                  </div>
                </div>
              </div>

              {/* Barcode representation */}
              <div className="border-t border-white/10 pt-4 flex flex-col items-center">
                <div className="h-6 w-full flex items-center justify-between space-x-[2px] opacity-40">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white h-full"
                      style={{ width: `${(i % 3 === 0 ? 3 : i % 2 === 0 ? 1 : 2)}px` }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[9px] text-white/30 tracking-widest mt-1">
                  *2026-MANIT-Bhopal*
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Text & floating logos */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <h2 className="font-display font-black text-6xl md:text-8xl tracking-premium mb-8 uppercase text-black leading-none">
            Hello!
          </h2>

          <p className="text-black/80 text-lg md:text-xl font-medium leading-relaxed mb-8">
            I'm Lokesh Zambare, a final-year B.Tech Electrical Engineering student at Maulana Azad National Institute of Technology (MANIT), Bhopal, with a strong focus on data analytics and machine learning. I currently work as a Business Analyst Intern at Circulants Software, where I analyze clinical and commercial datasets and support data governance initiatives. I specialize in Python, SQL, machine learning, and data visualization — passionate about turning complex datasets into business decisions through clustering, EDA, and statistical analysis.
          </p>

          <div className="font-display font-extrabold text-xl md:text-2xl tracking-wide text-black mb-12">
            NAME:{' '}
            <span className="bg-black text-[#FF2A2A] px-3 py-1 font-black inline-block transform -rotate-1">
              LOKESH ZAMBARE
            </span>
          </div>

          {/* Large floating tech logos */}
          <div className="flex items-center space-x-12 pt-4 pl-2">
            {/* Python logo */}
            <motion.div
              variants={logoFloat(0)}
              animate="animate"
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center justify-center cursor-pointer group"
            >
              <svg className="w-16 h-16 text-black/70 group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.968 0C5.395 0 5.61 2.871 5.61 2.871l.011 2.977h6.41v.898H3.344S0 6.331 0 12.06c0 5.727 2.909 5.568 2.909 5.568h1.737v-2.435s-.088-2.91 2.842-2.91h6.402s2.809.053 2.809-2.738V4.148S17.067 0 11.968 0zM8.344 1.83a.925.925 0 1 1 0 1.85.925.925 0 0 1 0-1.85zm3.688 22.17c6.572 0 6.357-2.871 6.357-2.871l-.01-2.978h-6.411v-.897h8.688s3.344.415 3.344-5.314c0-5.728-2.91-5.569-2.91-5.569h-1.737v2.435s.088 2.91-2.842 2.91h-6.402s-2.808-.052-2.808 2.738v6.397S6.933 24 12.032 24zm3.624-1.83a.925.925 0 1 1 0-1.85.925.925 0 0 1 0 1.85z" />
              </svg>
              <span className="font-mono text-xs font-bold mt-2 text-black/50 group-hover:text-black transition-colors uppercase tracking-widest">
                Python
              </span>
            </motion.div>

            {/* SQL database icon */}
            <motion.div
              variants={logoFloat(0.5)}
              animate="animate"
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center justify-center cursor-pointer group"
            >
              <svg className="w-16 h-16 text-black/70 group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5V12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12V5"></path>
                <path d="M3 12V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V12"></path>
              </svg>
              <span className="font-mono text-xs font-bold mt-2 text-black/50 group-hover:text-black transition-colors uppercase tracking-widest">
                SQL
              </span>
            </motion.div>

            {/* Scikit-learn (Machine Learning Node Graph) */}
            <motion.div
              variants={logoFloat(1)}
              animate="animate"
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center justify-center cursor-pointer group"
            >
              <svg className="w-16 h-16 text-black/70 group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              <span className="font-mono text-xs font-bold mt-2 text-black/50 group-hover:text-black transition-colors uppercase tracking-widest">
                Scikit-Learn
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ripped / Jagged white divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 select-none">
        <svg className="relative block w-full h-10 text-white fill-current" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,20 L40,65 L80,30 L120,60 L160,25 L200,65 L240,20 L280,55 L320,30 L360,65 L400,20 L440,55 L480,30 L520,65 L560,20 L600,55 L640,30 L680,65 L720,20 L760,55 L800,30 L840,65 L880,20 L920,55 L960,30 L1000,65 L1040,20 L1080,55 L1120,30 L1160,65 L1200,20 L1200,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
}
