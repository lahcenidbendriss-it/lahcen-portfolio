import React from 'react';
import { CONTACT } from '../constants';
import { motion } from "framer-motion";
<<<<<<< HEAD
=======
// Make sure to install these icons if you haven't: npm install react-icons
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20 pt-10'>
        
<<<<<<< HEAD
=======
        {/* Main Heading */}
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
        <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -50 }}
            transition={{duration:0.5}}
            className='my-10 text-center text-4xl text-white'
        >
            Get in <span className='text-purple-500'>Touch</span>
        </motion.h1>

<<<<<<< HEAD
=======
        {/* Introduction Text */}
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
        <motion.p 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -30 }}
            transition={{duration:0.6}}
            className='text-center text-neutral-400 mb-12 max-w-xl mx-auto'
        >
            Have a project in mind or just want to say hi? I'm always open to discussing new products, creative ideas, and opportunities.
        </motion.p>

        <div className='flex flex-col items-center justify-center gap-6 tracking-wide'>
            
<<<<<<< HEAD
=======
            {/* Address Section */}
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x: -50 }}
                transition={{duration:0.5}}
                className='flex items-center gap-4 text-neutral-300'
            >
                <div className='p-3 rounded-full bg-neutral-900 border border-neutral-800 text-purple-500'>
                    <FaMapMarkerAlt className='text-xl' />
                </div>
                <p>{CONTACT.address}</p>
            </motion.div>

<<<<<<< HEAD
=======
            {/* Phone Section (Clickable) */}
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x: 50 }}
                transition={{duration:0.5}}
                className='flex items-center gap-4'
            >
                <div className='p-3 rounded-full bg-neutral-900 border border-neutral-800 text-purple-500'>
                    <FaPhoneAlt className='text-xl' />
                </div>
<<<<<<< HEAD
=======
                {/* Replaces spaces to make 'tel:' link work properly */}
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
                <a 
                    href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`} 
                    className='text-neutral-300 hover:text-white transition-colors duration-300'
                >
                    {CONTACT.phoneNo}
                </a>
            </motion.div>

<<<<<<< HEAD
=======
            {/* Email Section (Main CTA) */}
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
            <motion.a 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y: 50 }}
                transition={{duration:0.5}}
                href={`mailto:${CONTACT.email}`}
                className='mt-4 flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:border-purple-500 hover:bg-purple-500/10 hover:scale-105 transition-all duration-300 group'
            >
                <FaEnvelope className='text-purple-500 group-hover:text-white transition-colors' />
                <span className='font-medium border-b border-transparent group-hover:border-white'>
                    {CONTACT.email}
                </span>
            </motion.a>

        </div>
        
<<<<<<< HEAD
=======
        {/* Copyright / Footer Text */}
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
        <motion.div 
             whileInView={{opacity:1}}
             initial={{opacity:0}}
             transition={{delay: 1, duration:1}}
             className='mt-20 text-center text-sm text-neutral-600'
        >
            <p>© {new Date().getFullYear()} Lahcen Idbendriss. All rights reserved.</p>
        </motion.div>
    </div>
  )
}

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> b0fb4aead1213f831b9fc2a06e5637978f27e378
