import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const exploreVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
    },
  };

  const handleExploreClick = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-24 md:py-0"
    >
      {/* Background radial soft light highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2A2A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Side Info */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-premium text-white leading-[1.05]"
            variants={itemVariants}
          >
            Hi, I'm <br />
            <span className="text-white">Lokesh Zambare</span>
          </motion.h1>

          <motion.div 
            className="font-display font-black text-3xl md:text-5xl lg:text-6xl tracking-premium mt-3 mb-6 select-none leading-none"
            variants={itemVariants}
            style={{ 
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.85)', 
              color: 'transparent' 
            }}
          >
            Data Analyst & Business Analyst
          </motion.div>

          <motion.p
            className="text-white/60 text-base md:text-lg max-w-xl font-light leading-relaxed mb-10"
            variants={itemVariants}
          >
            Turning raw data into actionable insights. Skilled in Python, SQL, Machine Learning, Power BI, and Tableau — transforming complex datasets into strategic business decisions through clustering, EDA, and statistical analysis.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <a
              href="#projects"
              className="bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white/5 border border-white/20 text-white font-medium px-8 py-3.5 rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side circular glassmorphism explore button */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
          <motion.button
            onClick={handleExploreClick}
            className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center group cursor-pointer hover:border-[#FF2A2A] hover:scale-[1.06] hover:shadow-[0_0_50px_rgba(255,42,42,0.4)] transition-all duration-500"
            variants={exploreVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Spinning decorative light ring inside */}
            <div className="absolute inset-2 rounded-full border border-dashed border-white/5 animate-[spin_40s_linear_infinite] group-hover:border-[#FF2A2A]/20" />
            
            {/* Pulsing red glow filter */}
            <div className="absolute inset-0 rounded-full bg-[#FF2A2A]/0 group-hover:bg-[#FF2A2A]/5 transition-colors duration-500" />
            
            <span className="font-display font-extrabold text-lg md:text-xl tracking-[0.2em] text-white/90 group-hover:text-white group-hover:scale-110 transition-all duration-300">
              EXPLORE
            </span>
          </motion.button>
        </div>
      </div>

      {/* Bouncing scroll down arrow (Desktop only) */}
      <motion.div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center cursor-pointer pointer-events-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={handleExploreClick}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1.5,
            ease: 'easeInOut',
          }}
          className="text-white/40 hover:text-white transition-colors duration-300"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
