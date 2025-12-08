import React from 'react';
import { PROJECTS, EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className='pb-4'>
      
      {/* =========================================================
          SECTION 1: PROFESSIONAL EXPERIENCE
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
                </div>
            ))}
        </div>
      </div>


      {/* =========================================================
          SECTION 2: PROJECTS
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

export default Projects;
