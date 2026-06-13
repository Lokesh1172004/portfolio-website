import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      title: 'EV Market Segmentation Analysis of India',
      description: 'Applied KNN, PCA, K-Means, and hierarchical clustering to segment the Indian EV market, identifying distinct customer and regional segments. Performed data preprocessing, feature scaling, and dimensionality reduction to uncover hidden consumer behavior patterns and deliver actionable insights.',
      tags: ['Python', 'Clustering', 'PCA', 'Segmentation'],
      link: 'https://colab.research.google.com/drive/12Gbt8xSYw2JcT-Lx2uyLszzGW7sY6F8d##scrollTo=YHYr423E3mSZ',
    },
    {
      title: "Skin Care Industry Analysis: A VC's P.O.V.",
      description: "Extracted and analyzed market sizing data from 50+ public sources using SQL and Python, quantifying India's $28.9B beauty market with 40% CAGR potential. Evaluated 5 companies on market share, strategy, and funding to map investment and M&A trends.",
      tags: ['SQL', 'Python', 'Market Analysis'],
      link: 'https://drive.google.com/file/d/1rIdRGg495fW1lAzsAgklIbHxlYpS_53C/view',
    },
    {
      title: 'Customer Intelligence Platform: Behavioral Clustering',
      description: 'Engineered a customer segmentation model analyzing 9,000 credit card holders across 18 behavioral features using K-Means, DBSCAN, and K-Medoids. Optimized the ML pipeline with 4 scaling methods + PCA (91.3% variance) and deployed an end-to-end Streamlit app.',
      tags: ['Python', 'DBSCAN', 'Streamlit', 'ML'],
      link: 'https://github.com/Lokesh1172004/Customer-Intelligence-Platform-Behavioral-Clustering-Model.1',
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="relative bg-[#111111] text-white py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF2A2A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="bg-[#FF2A2A] text-white font-mono text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            My Work
          </span>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-premium uppercase text-white leading-tight">
            Featured Projects
          </h2>
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[1.5rem] p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(255,42,42,0.15)] hover:border-[#FF2A2A] hover:-translate-y-2 transition-all duration-500 group"
            >
              <div>
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 text-white/80 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-xl mb-4 group-hover:text-[#FF2A2A] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full border border-[#FF2A2A] text-[#FF2A2A] group-hover:bg-[#FF2A2A] group-hover:text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-full flex items-center justify-center space-x-2 transition-all duration-300 shadow-sm"
              >
                <span>View Project</span>
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
