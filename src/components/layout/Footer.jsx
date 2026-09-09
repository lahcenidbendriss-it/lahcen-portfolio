import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";
import { SOCIALS, NAV_LINKS } from "../../data/content";

function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-surface-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <a href="#hero" className="text-2xl font-heading font-bold gradient-text tracking-tight">
              LI
            </a>
            <p className="text-zinc-500 text-sm mt-2">
              IT Operations & Full Stack Development
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.filter((l) => l.label !== "Home").map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-zinc-500 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 text-zinc-400 hover:text-accent hover:bg-accent/10 border border-white/5 hover:border-accent/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 text-zinc-400 hover:text-accent hover:bg-accent/10 border border-white/5 hover:border-accent/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 text-zinc-400 hover:text-accent hover:bg-accent/10 border border-white/5 hover:border-accent/20 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-8 mb-6" />
        <p className="text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} Lahcen Idbendriss. Built with{" "}
          <FaHeart className="inline text-accent/60 mx-1" size={12} />
          using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
