import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Tecknologies from './component/Tecknologies'
import Projects from './component/Projects'
import Contact from './component/Contact'


function App() {

  
  return (
<div className='overflow-x-hidden antialiased text-white'>
  <div className='fixed top-0 -z-10 h-full w-full'>
    <div className='absolute top-0 z-[-2] h-screen w-screen bg-[#212227] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(168,85,247,0.25),rgba(33,34,39,0))]'></div>
  </div>

  <div className='container mx-auto px-8'>
    <Navbar />
    <section id='hero'>
      <Hero />

    </section>
    
     <section id="about">
      <About />
    </section>

    <section id="technologies">
      <Tecknologies />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="contact">
      <Contact />
    </section>
  </div>
</div>
  )
}

export default App