import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Data Engineering',
      skills: ['Python', 'SQL', 'C++', 'NumPy', 'Pandas', 'ETL', 'Data Modeling'],
    },
    {
      title: 'Analytics & Visualization',
      skills: ['EDA', 'A/B Testing', 'Hypothesis Testing', 'KPIs', 'Matplotlib', 'Tableau', 'Power BI', 'Excel'],
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'K-Means', 'DBSCAN', 'PCA', 'KNN', 'Decision Trees', 'Hierarchical Clustering'],
    },
    {
      title: 'Tools & APIs',
      skills: ['GitHub', 'FastAPI', 'REST APIs', 'OpenAI APIs', 'Streamlit', 'Data Structures & Algorithms'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="skills"
      className="relative bg-white text-black py-24 md:py-32 px-6 md:px-12 grid-bg-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="bg-[#FF2A2A] text-white font-mono text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            What I Know
          </span>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-premium uppercase text-black leading-tight">
            Skills & Technologies
          </h2>
        </div>

        {/* Responsive Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="bg-white border-2 border-neutral-100 rounded-[1.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-[#FF2A2A] hover:shadow-[0_15px_40px_rgba(255,42,42,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Title */}
                <h3 className="font-display font-black text-xl md:text-2xl text-[#FF2A2A] uppercase tracking-wide mb-6">
                  {category.title}
                </h3>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#1C1C1C] text-white hover:bg-[#FF2A2A] hover:text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-sm select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
