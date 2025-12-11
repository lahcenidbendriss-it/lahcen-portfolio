import React from 'react';
import { PROJECTS, EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className='pb-4'>
      
      {/* =========================================================
<<<<<<< HEAD
          SECTION 1: PROFESSIONAL EXPERIENCE (Timeline Style)
=======
          SECTION 1: PROFESSIONAL EXPERIENCE
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
      ========================================================= */}
      <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-50}}
          transition={{duration:0.5}}
          className='my-20 text-center text-4xl text-white tracking-wide'
        >
          Professional <span className='text-purple-500'>Experience</span>
        </motion.h1>

<<<<<<< HEAD
        {/* TIMELINE CONTAINER */}
        <div className='relative max-w-4xl mx-auto pl-8 lg:pl-0'>
            
            {/* The Vertical Line */}
            <div className='absolute left-8 lg:left-1/2 top-0 h-full w-[2px] bg-neutral-800 -translate-x-1/2 hidden lg:block'></div>
            <div className='absolute left-4 top-0 h-full w-[2px] bg-neutral-800 lg:hidden'></div>

            {EXPERIENCES.map((experience, index) => (
                <div key={index} className={`mb-12 flex flex-col lg:flex-row items-center w-full relative ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* THE DOT (Central Axis) */}
                  <div className='absolute left-4 lg:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-neutral-900 -translate-x-1/2 z-10 top-6'></div>
                  
                  {/* SPACER (For Grid Alignment) */}
                  <div className='w-full lg:w-1/2'></div>

                  {/* THE CARD */}
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    transition={{ duration: 0.8 }}
                    className='w-full lg:w-1/2 pl-12 lg:pl-0 lg:px-8'
                  >
                      <div className='bg-[#1a1a1d] p-6 rounded-2xl border border-neutral-800 hover:border-purple-500/50 transition-colors duration-300 shadow-lg relative overflow-hidden group'>
                          
                          {/* Subtle Gradient Glow in Card */}
                          <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600'></div>

                          {/* Header: Role & Year */}
                          <div className='flex flex-wrap justify-between items-start mb-4 gap-2'>
                              <div className='flex flex-col'>
                                  <h3 className='text-xl font-bold text-white group-hover:text-purple-400 transition-colors'>
                                      {experience.title_project}
                                  </h3>
                                  <span className='text-sm text-neutral-400 font-medium'>
                                      {experience.company || "Company Name"}
                                  </span>
                              </div>
                              
                              {/* The Pill Badge (Like in the image) */}
                              <div className='px-4 py-1 rounded-full bg-purple-600 text-white text-sm font-bold shadow-md shadow-purple-900/20 whitespace-nowrap'>
                                  {experience.year}
                              </div>
                          </div>

                          {/* Description */}
                          <p className='mb-4 text-neutral-400 text-sm leading-relaxed'>
                              {experience.description}
                          </p>

                          {/* Tech Tags */}
                          <div className='flex flex-wrap gap-2 mt-4 pt-4 border-t border-neutral-800'>
                              {experience.technologies.map((tech, idx) => (
                                  <span key={idx} className='text-xs font-medium text-purple-300 bg-purple-900/20 px-2 py-1 rounded'>
                                      {tech}
                                  </span>
                              ))}
                          </div>

                      </div>
                  </motion.div>

=======
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className='mb-16 flex flex-wrap lg:justify-center'>
                  
                  <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4 flex flex-col items-center lg:items-start'
                  >
                      <img 
                        src={experience.image} 
                        alt={experience.title} 
                        width={150} 
                        height={150} 
                        className='mb-4 rounded-xl border border-neutral-700 shadow-lg shadow-purple-900/20 object-cover'
                      />
                      <div className='mb-4 lg:mb-0 px-3 py-1 text-sm text-purple-400 border border-purple-500/30 rounded-full bg-purple-500/10'>
                        {experience.year}
                      </div>
                  </motion.div>
                
                  <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4 px-4 lg:px-0'
                  >
                      <h6 className='mb-2 text-xl font-bold text-white'>
                        {experience.title_project}
                      </h6>
                      
                      <p className='mb-6 text-neutral-400 leading-relaxed font-light'>
                        {experience.description}
                      </p>
                      
                      <div className='flex flex-wrap gap-2'>
                        {experience.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className='rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-300 border border-neutral-800 hover:border-purple-500 transition-colors'
                            >
                              {tech}
                            </span>
                        ))}
                      </div>

                      {/* Optional Link (Uncomment if needed) */}
                      {/* 
                      <div className='mt-4'> 
                        <a href={experience.link} target="_blank" rel="noopener noreferrer" className='text-purple-400 hover:text-white underline decoration-purple-500 underline-offset-4 transition-colors'>
                           Visit Project →
                        </a>
                      </div> 
                      */}
                  </motion.div>
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
                </div>
            ))}
        </div>
      </div>


      {/* =========================================================
<<<<<<< HEAD
          SECTION 2: PROJECTS (Kept as Side-by-Side for Images)
=======
          SECTION 2: PROJECTS
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
      ========================================================= */}
      <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-50}}
          transition={{duration:0.5}}
          className='my-20 text-center text-4xl text-white tracking-wide'
        >
          My <span className='text-purple-500'>Projects</span>
        </motion.h1>

        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-16 flex flex-wrap lg:justify-center'>
                  
                  <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4 flex justify-center lg:justify-start lg:pr-8'
                  >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        width={250} 
                        height={250} 
                        className='mb-6 rounded-xl border border-neutral-800 shadow-2xl transition-transform hover:scale-105 duration-500 object-cover'
                      />
                  </motion.div>

                  <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4 px-4 lg:px-0'
                  >
                      <h6 className='mb-2 text-2xl font-bold text-white'>
                        {project.title}
                      </h6>
                      
                      <p className='mb-6 text-neutral-400 leading-relaxed font-light'>
                        {project.description}
                      </p>
                      
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className='rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-300 border border-neutral-800'
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

<<<<<<< HEAD
export default Projects;
=======
export default Projects;
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
