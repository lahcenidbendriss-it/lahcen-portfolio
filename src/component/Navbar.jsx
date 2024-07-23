import React from 'react'
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';



function Navbar() {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-3xl'>IL</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/lahcen-idbendriss-1376a32b1/'><FaLinkedin /></a>
            <a href='https://github.com/lahcenidbendriss-it'><FaGithub /></a>

            <a href='https://www.instagram.com/lahcen_idbendriss/'><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar