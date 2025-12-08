import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
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
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
      // Smooth scroll
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className='mb-24 flex items-center justify-between py-6 relative z-50'>
      
      {/* 1. LOGO */}
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent tracking-tight cursor-pointer'>
            IL
        </a>
      </div>

      {/* 2. DESKTOP MENU (Hidden on Mobile) */}
      <div className='hidden lg:flex items-center gap-8'>
        {NAV_LINKS.map((link, index) => (
          <a 
            key={index} 
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className='text-sm font-medium text-neutral-300 hover:text-purple-400 transition-colors duration-300'
          >
            {link.label}
          </a>
        ))}
      </div>
      
      {/* 3. SOCIAL ICONS (Desktop) */}
      <div className='hidden lg:flex items-center justify-center gap-6 text-2xl text-white'>
        <a href='https://www.linkedin.com/in/lahcen-idbendriss-1376a32b1/' className='transition-all duration-300 hover:text-purple-400 hover:scale-110'><FaLinkedin /></a>
        <a href='https://github.com/lahcenidbendriss-it' className='transition-all duration-300 hover:text-purple-400 hover:scale-110'><FaGithub /></a>
        <a href='https://www.instagram.com/lahcen_idbendriss/' className='transition-all duration-300 hover:text-purple-400 hover:scale-110'><FaInstagram /></a>
      </div>

      {/* 4. MOBILE HAMBURGER BUTTON (Visible only on Mobile) */}
      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='text-white text-2xl focus:outline-none'>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 5. MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className='absolute top-20 right-0 w-full bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 p-8 flex flex-col items-center gap-6 lg:hidden shadow-2xl rounded-b-2xl'>
            
            {/* Mobile Links */}
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

            {/* Mobile Socials */}
            <div className='flex gap-6 mt-4 text-2xl text-white'>
                <a href='https://www.linkedin.com/in/lahcen-idbendriss-1376a32b1/'><FaLinkedin /></a>
                <a href='https://github.com/lahcenidbendriss-it'><FaGithub /></a>
                <a href='https://www.instagram.com/lahcen_idbendriss/'><FaInstagram /></a>
            </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar;
