import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaCommentDots } from "react-icons/fa";
import { NAV_LINKS, SOCIALS } from "../../data/content";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-surface/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-2xl font-heading font-bold gradient-text tracking-tight hover:opacity-80 transition-opacity"
        >
          LI
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-lg ${
                activeSection === link.href
                  ? "text-accent"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-5 py-2 rounded-full text-sm font-semibold hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
          >
            Let&apos;s Talk <FaCommentDots size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-zinc-300 hover:text-white p-2 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="fixed top-0 right-0 h-full w-72 bg-surface-card border-l border-white/5 z-50 flex flex-col p-8 gap-2 lg:hidden animate-fade-up">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end text-zinc-400 hover:text-white mb-8"
              aria-label="Close menu"
            >
              <FaTimes size={20} />
            </button>

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-lg py-3 px-4 rounded-xl transition-all duration-200 ${
                  activeSection === link.href
                    ? "text-accent bg-accent/5"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="mt-auto pt-6 border-t border-white/5">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block text-center bg-accent text-surface font-semibold py-3 rounded-xl hover:bg-accent-light transition-colors"
              >
                Let&apos;s Talk
              </a>
              <div className="flex justify-center gap-6 mt-6 text-zinc-400">
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
                <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

export default Navbar;
