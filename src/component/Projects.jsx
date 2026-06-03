import React from 'react';
import { PROJECTS, EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className='pb-4 relative'>
      
      {/* Background ambient glows for better UX */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* =========================================================
          SECTION 1: PROFESSIONAL EXPERIENCE (Timeline Style)
      ========================================================= */}
      <div className='border-b border-neutral-800/50 pb-24'>
        <motion.h1 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-30}}
          transition={{duration:0.6, ease: "easeOut"}}
          className='my-20 text-center text-4xl lg:text-5xl font-bold text-white tracking-tight'
        >
          Professional <span className='bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent'>Experience</span>
        </motion.h1>

        {/* TIMELINE CONTAINER */}
        <div className='relative max-w-5xl mx-auto pl-8 lg:pl-0'>
            
            {/* The Vertical Line with Gradient */}
            <div className='absolute left-8 lg:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/50 via-neutral-800 to-transparent -translate-x-1/2 hidden lg:block'></div>
            <div className='absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/50 via-neutral-800 to-transparent lg:hidden'></div>

            {EXPERIENCES.map((experience, index) => (
                <div key={index} className={`mb-16 flex flex-col lg:flex-row items-center w-full relative ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* THE DOT (Central Axis with Pulse effect) */}
                  <div className='absolute left-4 lg:left-1/2 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(168,85,247,0.6)] -translate-x-1/2 z-10 top-6'>
                    <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-20"></div>
                  </div>
                  
                  {/* SPACER (For Grid Alignment) */}
                  <div className='w-full lg:w-1/2'></div>

                  {/* THE CARD */}
                  <motion.div 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`w-full lg:w-1/2 pl-12 lg:pl-0 lg:px-10 ${index % 2 === 0 ? 'lg:pr-10 lg:pl-0' : 'lg:pl-10 lg:pr-0'}`}
                  >
                      {/* Premium Glassmorphism Card */}
                      <div className='bg-white/[0.03] backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 relative overflow-hidden group'>
                          
                          {/* Subtle Top Gradient Glow */}
                          <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500'></div>

                          {/* Header: Role & Year */}
                          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-5 gap-4'>
                              <div className='flex flex-col'>
                                  <h3 className='text-2xl font-bold text-neutral-100 group-hover:text-purple-400 transition-colors duration-300'>
                                      {experience.title_project}
                                  </h3>
                                  <span className='text-md text-purple-300 font-medium mt-1'>
                                      {experience.company || "Company Name"}
                                  </span>
                              </div>
                              
                              {/* The Pill Badge */}
                              <div className='px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-semibold whitespace-nowrap shadow-sm'>
                                  {experience.year}
                              </div>
                          </div>

                          {/* Description */}
                          <p className='mb-6 text-neutral-400 text-sm md:text-base leading-relaxed'>
                              {experience.description}
                          </p>

                          {/* Tech Tags */}
                          <div className='flex flex-wrap gap-2 pt-5 border-t border-white/5'>
                              {experience.technologies.map((tech, idx) => (
                                  <span key={idx} className='text-xs font-semibold tracking-wide text-neutral-300 bg-neutral-800/50 hover:bg-purple-500/20 hover:text-purple-300 border border-neutral-700 hover:border-purple-500/50 transition-all duration-300 px-3 py-1.5 rounded-full'>
                                      {tech}
                                  </span>
                              ))}
                          </div>

                      </div>
                  </motion.div>

                </div>
            ))}
        </div>
      </div>


      {/* =========================================================
          SECTION 2: PROJECTS (Premium Side-by-Side)
      ========================================================= */}
      <div className='pb-24 pt-10'>
        <motion.h1 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-30}}
          transition={{duration:0.6, ease: "easeOut"}}
          className='my-20 text-center text-4xl lg:text-5xl font-bold text-white tracking-tight'
        >
          My <span className='bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent'>Projects</span>
        </motion.h1>

        <div className="max-w-6xl mx-auto px-4 lg:px-8">
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-20 flex flex-col lg:flex-row items-center gap-10 group'>
                  
                  {/* Project Image Box */}
                  <motion.div
                    whileInView={{opacity:1, scale:1}}
                    initial={{opacity:0, scale:0.95}}
                    transition={{duration:0.6}}
                    className='w-full lg:w-2/5 flex justify-center'
                  >
                      <div className="relative w-full max-w-[350px] aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500">
                        {/* Overlay effect on hover */}
                        <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out'
                        />
                      </div>
                  </motion.div>

                  {/* Project Details Box */}
                  <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:50}}
                    transition={{duration:0.6, delay: 0.2}}
                    className='w-full lg:w-3/5 flex flex-col'
                  >
                      <h6 className='mb-4 text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300'>
                        {project.title}
                      </h6>
                      
                      <p className='mb-6 text-neutral-400 text-base md:text-lg leading-relaxed font-light'>
                        {project.description}
                      </p>
                      
                      <div className='flex flex-wrap gap-3'>
                        {project.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className='rounded-full bg-white/[0.05] px-4 py-1.5 text-sm font-medium text-purple-300 border border-white/10 hover:bg-purple-500/10 transition-colors duration-300'
                            >
                              {tech}
                            </span>
                        ))}
                      </div>
                  </motion.div>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
}

export default Projects;