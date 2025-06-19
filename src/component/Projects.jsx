import React from 'react'
import { PROJECTS } from '../constants'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"


function Projects() {
  return (
    <>
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-1}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>PROFESSIONAL EXPERIENCE</motion.h1>
        <div>
            {EXPERIENCES.map((experience,index)=>(
                <div key={index} className='mb-8 flex flex-wrap'>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0 , x:-100}}
                transition={{duration:1.5}}
                 className='w-full lg:w-1/4'>
                    <img src={experience.image} alt={experience.title} width={150} height={150} className='mb-6 rounded'/>
                    
                </motion.div>
               
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}

                className='w-full max-w-xl lg:w-3/4'>
                <h4 className='mb-2 font-semibold'>{experience.year}</h4>
                    <h6 className='mb-2 font-semibold'>{experience.title_project}</h6>
                    <p className='mb-4 text-neutral-600'>{experience.description}</p>
                    {experience.technologies.map((tech, index)=>(
                        <span key={index} className='mr-2 rounded bg-white-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                    

                        ) )} <br/>
                        <div className='pt-4 hover:text-blue-800 font-small underline'> 
                        <a href={experience.link} target="_blank" rel="noopener noreferrer">Visit Project</a>

                        </div>
                        
                </motion.div>


                </div>
                
            
            ))}
            </div>
    </div>



    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-1}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap'>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0 , x:-100}}
                transition={{duration:1.5}}
                 className='w-full lg:w-1/4'>
                    <img src={project.image} alt={project.title} width={150} height={150} className='mb-6 rounded'/>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}

                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-600'>{project.description}</p>
                    {project.technologies.map((tech, index)=>(
                        <span key={index} className='mr-2 rounded bg-white-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>

                        ) )}
                </motion.div>


                </div>
                
            
            ))}
            </div>
    </div>
    </>
  )
}

export default Projects;