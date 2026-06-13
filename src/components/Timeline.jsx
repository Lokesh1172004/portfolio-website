import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Timeline() {
  const containerRef = useRef(null);
  
  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Animate the path length based on scroll progress
  const pathLength = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);

  const journeySteps = [
    {
      step: '01',
      title: 'B.Tech, Electrical Engineering',
      institution: 'Maulana Azad National Institute of Technology (MANIT)',
      location: 'Bhopal',
      date: 'Nov 2022 – May 2026',
      description: 'Acquiring strong analytical foundations and engineering principles. Actively focusing on advanced data analytics, statistical modeling, and machine learning structures.',
      align: 'right', // card position relative to line on desktop
      rotation: 2,
    },
    {
      step: '02',
      title: 'Business Analyst Intern',
      institution: 'Circulants Software Pvt. Ltd.',
      location: 'Pune (Remote)',
      date: 'Jan 2026 – July 2026',
      description: 'Analyzed clinical & commercial datasets, organized healthcare data assets using Alation Data Catalog, standardized 30+ glossary terms, and supported Master Data Management (MDM) initiatives to improve data governance.',
      align: 'left',
      rotation: -2.5,
    },
    {
      step: '03',
      title: 'Event Manager',
      institution: 'MAFFICK (Annual Fest)',
      location: 'MANIT Bhopal',
      date: 'Oct 2024 – Nov 2025',
      description: 'Planned, coordinated, and executed large-scale college events — managing logistics, budgets, timelines, and stakeholder communication for successful project delivery.',
      align: 'right',
      rotation: 1.5,
    },
  ];

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative bg-white text-black py-24 md:py-32 px-6 md:px-12 grid-bg-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <span className="bg-[#FF2A2A] text-white font-mono text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            My Journey
          </span>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-premium uppercase text-black leading-tight">
            Experience & Education
          </h2>
        </div>

        {/* Timeline body wrapper */}
        <div className="relative min-h-[800px] flex flex-col items-center">
          
          {/* Desktop SVG S-path (centered) */}
          <div className="absolute inset-0 hidden md:block w-full h-full pointer-events-none select-none z-0">
            <svg
              className="absolute left-1/2 -translate-x-1/2 w-[300px] h-full"
              viewBox="0 0 300 800"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Background gray line */}
              <path
                d="M 150,0 Q 280,200 150,400 T 150,800"
                stroke="#E5E5E5"
                strokeWidth="4"
                strokeDasharray="8 8"
              />
              {/* Foreground animated red line */}
              <motion.path
                d="M 150,0 Q 280,200 150,400 T 150,800"
                stroke="#FF2A2A"
                strokeWidth="4"
                strokeDasharray="8 8"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Mobile Straight vertical line (aligned left) */}
          <div className="absolute left-4 top-0 bottom-0 md:hidden w-1 pointer-events-none select-none z-0">
            <div className="w-full h-full bg-neutral-200 border-l border-dashed border-neutral-300 relative">
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#FF2A2A]"
                style={{
                  height: useTransform(scrollYProgress, [0.15, 0.75], ['0%', '100%']),
                }}
              />
            </div>
          </div>

          {/* Cards container */}
          <div className="w-full flex flex-col space-y-16 md:space-y-0 md:relative z-10">
            {journeySteps.map((step, idx) => {
              const isLeft = step.align === 'left';
              return (
                <div
                  key={step.step}
                  className={`w-full flex flex-col md:flex-row items-center justify-between md:min-h-[250px] ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left spacer / right spacer on desktop */}
                  <div className="hidden md:block w-[45%]" />
                  
                  {/* Anchor Point indicator on desktop */}
                  <div className="hidden md:flex items-center justify-center w-[10%] relative z-20">
                    <motion.div 
                      className="w-5 h-5 rounded-full bg-white border-4 border-neutral-200"
                      whileInView={{
                        borderColor: '#FF2A2A',
                        scale: 1.25,
                      }}
                      viewport={{ once: false, amount: 0.8 }}
                    />
                  </div>

                  {/* Card wrapper */}
                  <motion.div
                    className="w-full md:w-[45%] pl-10 md:pl-0"
                    initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Glowing card */}
                    <motion.div
                      className="relative bg-white text-black p-8 rounded-[2rem] border-2 border-neutral-100 shadow-[0_15px_30px_rgba(0,0,0,0.03)] cursor-pointer"
                      style={{ rotate: step.rotation }}
                      initial={{ 
                        backgroundColor: '#FFFFFF', 
                        color: '#000000', 
                        borderColor: '#F5F5F5',
                        boxShadow: '0 15px 30px rgba(0,0,0,0.03)'
                      }}
                      whileInView={{ 
                        backgroundColor: '#FF2A2A', 
                        color: '#FFFFFF',
                        borderColor: '#FF2A2A',
                        boxShadow: '0 25px 50px rgba(255, 42, 42, 0.35)',
                      }}
                      viewport={{ once: false, amount: 0.4 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Badge Hole Punch at the top */}
                      <div className="w-4 h-4 rounded-full bg-white border border-neutral-200 shadow-inner mx-auto mb-4" />

                      {/* Italic step number */}
                      <div className="absolute top-6 right-8 font-display italic font-black text-5xl opacity-10 select-none">
                        {step.step}
                      </div>

                      {/* Timeline content details */}
                      <div className="text-xs font-mono font-bold tracking-wider opacity-85 mb-2 uppercase">
                        {step.date}
                      </div>
                      
                      <h3 className="font-display font-black text-xl md:text-2xl tracking-tight leading-snug mb-1 uppercase">
                        {step.title}
                      </h3>
                      
                      <div className="text-sm font-semibold opacity-90 mb-4">
                        {step.institution} {step.location ? `| ${step.location}` : ''}
                      </div>
                      
                      <p className="text-sm font-normal leading-relaxed opacity-80">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cursive text sign-off */}
        <div className="flex justify-center items-center mt-24 text-center select-none">
          <motion.span
            className="font-display italic font-bold text-3xl md:text-5xl text-[#FF2A2A] tracking-wider inline-block -rotate-3"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Always Growing!
          </motion.span>
        </div>
      </div>
    </section>
  );
}
