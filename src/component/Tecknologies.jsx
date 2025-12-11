import React from 'react';
import { motion } from "framer-motion";

import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaDocker, FaWordpress, FaLaravel, FaSymfony, FaVuejs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb, SiMysql, SiNextdotjs, SiPrestashop, SiWoocommerce, SiPostman, SiSwagger } from "react-icons/si";

function Tecknologies() {
  
  const iconVariants = (duration) => ({
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

  const TechIcon = ({ icon: Icon, color, duration, name }) => (
    <motion.div 
      variants={iconVariants(duration)} 
      initial="initial" 
      animate="animate"
      title={name} 
      className='rounded-2xl border-4 border-neutral-800 bg-neutral-900/50 p-4 transition-colors duration-300 hover:border-purple-500 cursor-help flex flex-col items-center justify-center w-24 h-24'
    >
      {Icon ? (
        <Icon className={`text-5xl ${color}`} />
      ) : (
        <span className="text-white font-bold text-sm text-center">{name}</span>
      )}
    </motion.div>
  );

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl text-white'
      >
        Technologies
      </motion.h1>

      <div className='flex flex-wrap justify-center gap-8 px-4'>
        
        <div className='w-full lg:w-1/4 flex flex-col items-center'>
            <h2 className='mb-8 text-2xl text-purple-400 font-semibold border-b-2 border-purple-500/30 pb-2'>Frontend</h2>
            <div className='flex flex-wrap justify-center gap-4'>
                <TechIcon icon={FaHtml5} color="text-orange-500" duration={2.5} name="HTML5" />
                <TechIcon icon={FaCss3Alt} color="text-blue-500" duration={3} name="CSS3" />
                <TechIcon icon={DiJavascript1} color="text-yellow-500" duration={5} name="JavaScript" />
                <TechIcon icon={RiReactjsLine} color="text-cyan-400" duration={6} name="React.js" />
                <TechIcon icon={RiTailwindCssFill} color="text-cyan-500" duration={4} name="Tailwind" />
                <TechIcon icon={SiNextdotjs} color="text-white" duration={2} name="Next.js" />
                <TechIcon icon={FaVuejs} color="text-green-500" duration={4} name="Vue.js" />
            </div>
        </div>

        <div className='w-full lg:w-2/5 flex flex-col items-center'>
            <h2 className='mb-8 text-2xl text-purple-400 font-semibold border-b-2 border-purple-500/30 pb-2'>Backend & CMS</h2>
            <div className='flex flex-wrap justify-center gap-4'>
                <TechIcon icon={FaNodeJs} color="text-green-400" duration={2} name="Node.js" />
                <TechIcon icon={FaPhp} color="text-indigo-400" duration={6} name="PHP" />
                <TechIcon icon={FaLaravel} color="text-red-600" duration={3} name="Laravel" />
                <TechIcon icon={FaSymfony} color="text-white" duration={5} name="Symfony" />
                <TechIcon icon={BiLogoPostgresql} color="text-sky-500" duration={5} name="PostgreSQL" />
                <TechIcon icon={SiMysql} color="text-orange-400" duration={2.5} name="MySQL" />
                <TechIcon icon={SiMongodb} color="text-green-500" duration={3.5} name="MongoDB" />
                <TechIcon icon={FaWordpress} color="text-blue-200" duration={4} name="WordPress" />
                <TechIcon icon={SiPrestashop} color="text-pink-500" duration={2} name="PrestaShop" />
                <TechIcon icon={SiWoocommerce} color="text-purple-500" duration={5} name="WooCommerce" />
                <TechIcon icon={FaDocker} color="text-blue-400" duration={4.5} name="Docker" />
            </div>
        </div>

        <div className='w-full lg:w-1/4 flex flex-col items-center'>
            <h2 className='mb-8 text-2xl text-purple-400 font-semibold border-b-2 border-purple-500/30 pb-2'>  Test & Automation </h2>
            <div className='flex flex-wrap justify-center gap-4'>
                <TechIcon icon={SiPostman} color="text-orange-500" duration={2} name="Postman" />
                
                <TechIcon icon={null} duration={3} name="n8n" />
                <TechIcon icon={null} duration={4} name="Make" />
                <TechIcon icon={SiSwagger} color="text-green-600" duration={3.5} name="Swagger" />

            </div>
        </div>

      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Tecknologies;
=======
export default Tecknologies;
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
