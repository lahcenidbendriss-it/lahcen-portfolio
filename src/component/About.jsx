import React from 'react';
import aboutImg from "../assets/programmer-clipart.png"; 
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

function About() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl text-white'>
            About
            <span className='text-neutral-500'> Me</span>
        </h1>

        <div className='flex flex-wrap'>
            
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className='w-full lg:w-1/2 lg:p-8'
            >
                <div className='flex items-center justify-center'>
                    <div className='relative group'>
                        
                        <div className='absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-75 transition duration-500'></div>
                        <img 
                            className='relative rounded-2xl border-2 border-neutral-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]' 
                            src={aboutImg} 
                            alt='About Lahcen'
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8 }}
                className='w-full lg:w-1/2'
            >
                <div className='flex justify-center lg:justify-start flex-col h-full'>
                    <div className='hidden lg:block w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent mb-6 rounded-full'></div>
                    
                    <p className='my-2 max-w-xl py-6 text-neutral-300 text-lg leading-relaxed font-light tracking-wide'>
                        {ABOUT_TEXT}
                    </p>
                    
                    <div className='mt-4 flex gap-4'>
                        <div className='px-4 py-2 rounded-full border border-purple-500/30 text-purple-400 text-sm'>
                            Problem Solver
                        </div>
                        <div className='px-4 py-2 rounded-full border border-purple-500/30 text-purple-400 text-sm'>
                            Curious Learner
                        </div>
                    </div>
                </div>
            </motion.div>
            
        </div>
    </div>
  );
}

export default About;
