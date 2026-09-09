import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";

import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="overflow-x-hidden antialiased text-white noise-bg">
      {/* Fixed background */}
      <div className="fixed inset-0 -z-10 bg-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(20,184,166,0.12),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(6,182,212,0.06),transparent)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;