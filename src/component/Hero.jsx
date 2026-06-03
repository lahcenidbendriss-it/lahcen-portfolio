import React from 'react'
import { HERO_CONTENT } from "../constants"
import profilepic from "../assets/avatar-6.png"
import { motion } from "framer-motion"



const PDF_FILE_URL = '/lahcen idbendriss.pdf'

function Hero() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  const handleDownload = () => {
    const fileName = PDF_FILE_URL.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = PDF_FILE_URL;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
   <div className='border-b border-neutral-800 pb-4 lg:mb-35 pt-20 mt-20'>
      <div className='flex flex-wrap'>
        
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-8 text-5xl font-light tracking-tight lg:mt-16 lg:text-8xl text-white'>
              Lahcen Idbendriss
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-500 bg-clip-text text-4xl tracking-tight text-transparent'>
              Full Stack Web Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-4 max-w-xl py-2 font-light tracking-tighter text-neutral-200'>
              {HERO_CONTENT}
            </motion.p>
             
            <motion.button
              variants={container(1.3)}
              initial="hidden"
              animate="visible"
              onClick={handleDownload}
              className='mr-4 mt-4 rounded-full bg-purple-600 px-8 py-3 text-xl font-medium text-white shadow-lg shadow-purple-500/30 hover:bg-purple-500 hover:scale-105 transition duration-300'>
              Download CV
            </motion.button>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 1.2 }}
              className='rounded-full bg-gradient-to-b from-purple-900/20 to-transparent p-2'>
              
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={profilepic} 
                alt='Lahcen Idbendriss'
                className="inline-block h-[400px] w-auto rounded-full shadow-2xl shadow-purple-900/50" 
              />
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
