import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Tecknologies from './component/Tecknologies'
import Projects from './component/Projects'
import Contact from './component/Contact'


function App() {

  
  return (
    <div className='overflow-x-hidden  antialiased   '>
    <div className='fixed top-0 -z-10 h-full w-full'>
    {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> */}
    {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
    <div class='absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>

    </div>
    <div className='container mx-auto px-8'>

    <Navbar />
    <Hero />
    <About />
    <Tecknologies />
    <Projects />
    <Contact />
    </div>

    

    

    
 
    
    </div>
  )
}

export default App