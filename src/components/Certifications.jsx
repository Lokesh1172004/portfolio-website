import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      title: 'Snowpro Associate: Platform',
      issuer: 'Snowflake',
      icon: <Cpu size={36} className="text-white mb-4" />,
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      icon: <Award size={36} className="text-white mb-4" />,
    },
    {
      title: 'SQL for Data Science',
      issuer: 'University of California, Davis',
      icon: <ShieldCheck size={36} className="text-white mb-4" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="certifications"
      className="relative bg-[#FF2A2A] text-white py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-premium uppercase text-white leading-tight">
            Certifications
          </h2>
        </div>

        {/* Responsive Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              className="bg-black/10 border border-white/20 backdrop-blur-md rounded-[1.5rem] p-8 flex flex-col items-center text-center hover:bg-black/20 hover:scale-105 hover:-translate-y-1.5 hover:border-white transition-all duration-300"
            >
              {/* Custom Icon Wrapper */}
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                {cert.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg mb-2 leading-snug">
                {cert.title}
              </h3>

              {/* Issuer Name */}
              <span className="text-red-200 text-sm font-medium tracking-wide uppercase">
                {cert.issuer}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
