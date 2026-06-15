import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Footer() {
  const footerRef = useRef(null);

  // Track scroll progress of footer
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  // Parallax reveal calculations
  const opacity = useTransform(scrollYProgress, [0.1, 0.95], [0.15, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.95], [60, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.95], [0.96, 1]);

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative bg-[#111111] text-[#F4F4F4] min-h-[60vh] flex flex-col justify-between pt-20 pb-8 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Background red soft glow light in corner */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF2A2A]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Grid (3 columns) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 border-b border-white/10 pb-12 mb-16">
        
        {/* Left Col - Services */}
        <div className="flex flex-col space-y-2.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            Services
          </span>
          <div className="flex flex-col font-mono text-xs text-[#D4D4D4] space-y-1.5 uppercase tracking-wider">
            <span>Business Analytics</span>
            <span>Data Analysis</span>
            <span>Data Visualization</span>
            <span>Machine Learning</span>
          </div>
        </div>

        {/* Center Col - Building duration */}
        <div className="flex flex-col space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            EXPERIENCE
          </span>
          <div className="text-sm font-medium text-[#D4D4D4]">
            6 Months of Business Analyst Intern
          </div>
        </div>

        {/* Right Col - Availability */}
        <div className="flex flex-col space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            AVAILABILITY
          </span>
          <div className="text-sm font-medium text-[#D4D4D4]">
            Open to Opportunities
          </div>
          <span className="text-xs font-mono text-white/50">Current Year: 2026</span>
        </div>
      </div>

      {/* Center Hero: Massive bold "lokeshzambare" scroll parallax text */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-center my-6 relative z-10">
        <motion.h2
          style={{ opacity, y, scale }}
          className="font-display font-black text-[12vw] tracking-tighter text-[#F4F4F4]/90 select-none text-center leading-none lowercase hover:text-white hover:drop-shadow-[0_0_35px_rgba(255,42,42,0.3)] transition-all duration-500 cursor-default"
        >
          lokeshzambare
        </motion.h2>
      </div>

      {/* Bottom Grid (3 columns) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-end relative z-10 text-xs text-white/60 pt-12 border-t border-white/5 font-mono">
        
        {/* Bottom Left */}
        <div className="flex flex-col space-y-1">
          <a href="#contact" className="hover:text-white transition-colors duration-200">
            Contact
          </a>
        </div>

        {/* Bottom Center */}
        <div className="flex flex-col space-y-1 md:items-center">
          <a
            href="mailto:lokeshzambare30@gmail.com"
            className="text-[#F4F4F4] hover:text-white transition-colors duration-200 text-sm font-semibold relative group py-0.5 inline-block"
          >
            lokeshzambare30@gmail.com
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF2A2A] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="tel:+919322510547"
            className="hover:text-white transition-colors duration-200"
          >
            +91-9322510547
          </a>
        </div>

        {/* Bottom Right */}
        <div className="flex space-x-6 md:justify-end">
          <a
            href="https://www.linkedin.com/in/lokesh-zambare-1a2375299/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/lokeshzambare30"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 uppercase tracking-widest"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
