import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram, FaCommentDots } from 'react-icons/fa';

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Technologies" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='fixed top-6 left-0 right-0 flex justify-center z-50 px-4 w-full '>
        
        <nav className='flex items-center justify-between bg-[#1a1a1d]/90 backdrop-blur-md border border-neutral-800 rounded-full px-6 py-3 w-full max-w-5xl shadow-xl shadow-black/50'>
            
            <div className='flex flex-shrink-0 items-center pl-2'>
                <a href="/" className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent tracking-tighter cursor-pointer'>
                    IL
                </a>
            </div>

            <div className='hidden lg:flex items-center gap-8'>
                {NAV_LINKS.map((link, index) => (
                <a 
                    key={index} 
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className='text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors duration-300'
                >
                    {link.label}
                </a>
                ))}
            </div>
            
            <div className='hidden lg:flex items-center'>
                <a 
                    href="#contact"
                    onClick={(e) => handleScroll(e, "#contact")} 
                    className='flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105'
                >
                    Let's Talk <FaCommentDots />
                </a>
            </div>

            <div className='lg:hidden pr-2'>
                <button onClick={toggleMenu} className='text-white text-xl focus:outline-none pt-1'>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>

        {isMobileMenuOpen && (
            <div className='absolute top-20 w-[90%] max-w-md bg-[#1a1a1d] border border-neutral-800 rounded-2xl p-6 flex flex-col items-center gap-6 lg:hidden shadow-2xl'>
                
                {NAV_LINKS.map((link, index) => (
                <a 
                    key={index} 
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className='text-lg font-medium text-white hover:text-purple-400'
                >
                    {link.label}
                </a>
                ))}
                
                <a 
                    href="#contact"
                    onClick={(e) => handleScroll(e, "#contact")}
                    className='bg-purple-600 text-white px-6 py-2 rounded-full font-semibold'
                >
                    Let's Talk
                </a>

                <div className='flex gap-6 mt-2 text-2xl text-neutral-400'>
                    <a href='https://www.linkedin.com/in/lahcen-idbendriss-1376a32b1/'><FaLinkedin /></a>
                    <a href='https://github.com/lahcenidbendriss-it'><FaGithub /></a>
                    <a href='https://www.instagram.com/lahcen_idbendriss/'><FaInstagram /></a>
                </div>
            </div>
        )}
    </div>
  )
}

export default Navbar;
