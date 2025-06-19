import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {FaNodeJs, FaHtml5, FaCss3Alt, FaPhp} from "react-icons/fa"
import {DiJavascript1} from "react-icons/di"
import {BiLogoPostgresql} from "react-icons/bi"
import { motion } from "framer-motion"

function Tecknologies() {
  const iconVariante = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Tecknologies
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        <motion.div
          variants={iconVariante(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>

        <motion.div
          variants={iconVariante(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaHtml5 className='text-7xl text-orange-500'/>
        </motion.div>

        <motion.div
          variants={iconVariante(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaCss3Alt className='text-7xl text-blue-500'/>
        </motion.div>

        <motion.div
          variants={iconVariante(6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <DiJavascript1 className='text-7xl text-yellow-500'/>
        </motion.div>

        <motion.div
          variants={iconVariante(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaPhp className='text-7xl text-indigo-500'/>
        </motion.div>

        <motion.div
          variants={iconVariante(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaNodeJs className='text-7xl text-green-400'/>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tecknologies;
