import React from 'react'
import { HERO_CONTENT } from "../constants"
import profilepic from "../assets/kevinRushProfile.jpg"
import { motion } from "framer-motion"

const PDF_FILE_URL = '/file_pdf.pdf'

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
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-6 lg:text-6xl'>
              Lahcen Idbendriss
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
              Backend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-1 max-w-xl py-4 font-light tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className='mr-4 rounded bg-purple-900 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 transition duration-300'
              onClick={handleDownload}>Download CV</motion.button>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilepic} alt='Lahcen Idbendriss' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
