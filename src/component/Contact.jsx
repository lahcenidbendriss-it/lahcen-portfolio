import React, { useRef, useState } from 'react';
import { CONTACT } from '../constants';
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // This automatically gets the current date/time to fill your {{time}} variable
    const now = new Date().toLocaleString();
    
    // We add the time and a default title to the form data before sending
    const templateParams = {
        name: form.current.name.value,
        email: form.current.email.value,
        message: form.current.message.value,
        time: now,
        title: "Portfolio Inquiry" // This fills your {{title}} in the subject line
    };

    emailjs.send(
      'service_9gsictu',    // Get this from "Email Services" tab
      'template_iwcacta',   // Get this from "Email Templates" tab
      templateParams, 
      'OgQiDyunVUiq-ends'     // Get this from "Account" tab
    )
      .then((result) => {
          setStatusMessage("Message sent successfully! ✅");
          form.current.reset(); 
          setIsSending(false);
          setTimeout(() => setStatusMessage(""), 5000);
      }, (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send. Please try again. ❌");
          setIsSending(false);
      });
  };

  return (
    <div className='border-b border-neutral-900 pb-20 pt-10'>
        <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -50 }}
            transition={{duration:0.5}}
            className='my-10 text-center text-4xl text-white'
        >
            Get in <span className='text-purple-500'>Touch</span>
        </motion.h1>

        <div className='flex flex-col lg:flex-row justify-center gap-12 px-4 max-w-6xl mx-auto'>
            
            {/* Left Side: Contact Info */}
            <div className='flex flex-col gap-6 justify-center lg:w-1/3'>
                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x: -50 }}
                    transition={{duration:0.5}}
                    className='flex items-center gap-4 text-neutral-300'
                >
                    <div className='p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-purple-500'>
                        <FaMapMarkerAlt className='text-2xl' />
                    </div>
                    <div>
                        <p className='text-sm text-neutral-500'>Location</p>
                        <p className='font-medium'>{CONTACT.address}</p>
                    </div>
                </motion.div>

                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x: -50 }}
                    transition={{duration:0.6}}
                    className='flex items-center gap-4'
                >
                    <div className='p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-purple-500'>
                        <FaPhoneAlt className='text-2xl' />
                    </div>
                    <div>
                        <p className='text-sm text-neutral-500'>Phone</p>
                        <a href={`tel:${CONTACT.phoneNo}`} className='text-neutral-300 hover:text-white transition-colors font-medium'>
                            {CONTACT.phoneNo}
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x: -50 }}
                    transition={{duration:0.7}}
                    className='flex items-center gap-4'
                >
                    <div className='p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-purple-500'>
                        <FaEnvelope className='text-2xl' />
                    </div>
                    <div>
                        <p className='text-sm text-neutral-500'>Email</p>
                        <p className='text-neutral-300 font-medium'>{CONTACT.email}</p>
                    </div>
                </motion.div>
            </div>

            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x: 50 }}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2 bg-neutral-900/30 p-8 rounded-3xl border border-neutral-800 backdrop-blur-sm'
            >
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div>
                            <label className='text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 block'>Your Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                className='w-full bg-neutral-950/50 border border-neutral-800 rounded-xl p-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all'
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className='text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 block'>Email Address</label>
                            <input 
                                type="email" 
                                name="email" // Matches {{email}}
                                required 
                                className='w-full bg-neutral-950/50 border border-neutral-800 rounded-xl p-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all'
                                placeholder="email@example.com"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className='text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 block'>Message</label>
                        <textarea 
                            name="message" // Matches {{message}}
                            required 
                            rows="5"
                            className='w-full bg-neutral-950/50 border border-neutral-800 rounded-xl p-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all resize-none'
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSending}
                        className='group mt-2 flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:bg-neutral-800 disabled:text-neutral-500'
                    >
                        {isSending ? "Sending Message..." : "Send Message"}
                        <FaPaperPlane className={`text-sm transition-transform ${isSending ? 'translate-x-10 opacity-0' : 'group-hover:-translate-y-1 group-hover:translate-x-1'}`} />
                    </button>

                    {statusMessage && (
                        <motion.p 
                            initial={{opacity:0, y: 10}} 
                            animate={{opacity:1, y: 0}}
                            className={`text-center font-medium ${statusMessage.includes("successfully") ? "text-green-400" : "text-red-400"}`}
                        >
                            {statusMessage}
                        </motion.p>
                    )}
                </form>
            </motion.div>
        </div>
        
        <motion.div 
             whileInView={{opacity:1}}
             initial={{opacity:0}}
             transition={{delay: 0.5}}
             className='mt-20 text-center text-sm text-neutral-600'
        >
            <p>© {new Date().getFullYear()} Lahcen Idbendriss. All rights reserved.</p>
        </motion.div>
    </div>
  )
}

export default Contact;