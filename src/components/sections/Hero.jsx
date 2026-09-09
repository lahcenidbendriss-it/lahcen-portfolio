import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PROFILE, HERO_CONTENT } from "../../data/content";
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../../assets/avatar-6.png";

const PDF_FILE_URL = "/lahcen idbendriss.pdf";

/* ─── Floating particle dot ─── */
const Particle = ({ style }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={style}
    animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ─── Animated typewriter roles ─── */
const ROLES = [
  "IT Operations Engineer",
  "Full Stack Developer",
  "Linux & SQL Expert",
  "Incident Responder",
];

function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = ROLES[index];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, index]);

  return (
    <span className="hero-typewriter">
      {displayed}
      <span className="hero-cursor" />
    </span>
  );
}

/* ─── 3-D tilt card for profile image ─── */
function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 30 });
  const springY = useSpring(y, { stiffness: 200, damping: 30 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetTilt = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="hero-tilt-wrapper"
    >
      {children}
    </motion.div>
  );
}

/* ─── Stat counter card ─── */
function StatCard({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="hero-stat-card"
    >
      <span className="hero-stat-value">{value}</span>
      <span className="hero-stat-label">{label}</span>
    </motion.div>
  );
}

/* ─── HERO SECTION ─── */
function Hero() {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = PDF_FILE_URL;
    a.setAttribute("download", PDF_FILE_URL.split("/").pop());
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  /* random particles */
  const particles = Array.from({ length: 18 }, (_, i) => ({
    width: 3 + Math.random() * 4,
    height: 3 + Math.random() * 4,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    background: i % 2 === 0 ? "rgba(20,184,166,0.6)" : "rgba(6,182,212,0.5)",
    filter: "blur(1px)",
  }));

  return (
    <section id="hero" className="hero-section">
      {/* ── Grid overlay ── */}
      <div className="hero-grid-overlay" aria-hidden="true" />

      {/* ── Ambient glows ── */}
      <div className="hero-glow hero-glow-tl" aria-hidden="true" />
      <div className="hero-glow hero-glow-br" aria-hidden="true" />
      <div className="hero-glow hero-glow-center" aria-hidden="true" />

      {/* ── Floating particles ── */}
      {particles.map((style, i) => <Particle key={i} style={style} />)}

      {/* ── Horizontal scan line ── */}
      <motion.div
        className="hero-scan-line"
        aria-hidden="true"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="hero-container">
        <div className="hero-inner">

          {/* ════ TEXT COLUMN ════ */}
          <div className="hero-text-col">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-badge"
            >
              <span className="hero-badge-dot" />
              <span>Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hero-name"
            >
              {PROFILE.name.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "hero-name-accent" : ""}>{word} </span>
              ))}
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="hero-role-wrapper"
            >
              <span className="hero-role-prefix">I'm a&nbsp;</span>
              <TypewriterRole />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-description"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Stats row */}
            <div className="hero-stats-row">
              <StatCard value="3+" label="Years Experience" delay={0.5} />
              <StatCard value="10+" label="Projects Built" delay={0.6} />
              <StatCard value="2" label="Core Domains" delay={0.7} />
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="hero-cta-row"
            >
              <button onClick={handleDownload} className="hero-btn-primary">
                <FaDownload size={13} />
                <span>Download CV</span>
                <span className="hero-btn-shine" />
              </button>

              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hero-btn-outline"
              >
                View Experience
                <FaArrowRight size={11} className="hero-arrow-icon" />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="hero-socials"
            >
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <span className="hero-social-divider" />
              <span className="hero-social-label">Connect with me</span>
            </motion.div>
          </div>

          {/* ════ IMAGE COLUMN ════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hero-image-col"
          >
            <TiltCard>
              {/* Orbital rings */}
              <div className="hero-orbit hero-orbit-1" aria-hidden="true" />
              <div className="hero-orbit hero-orbit-2" aria-hidden="true" />
              <div className="hero-orbit hero-orbit-3" aria-hidden="true" />

              {/* Rotating dots on ring */}
              <motion.div
                className="hero-orbit-dot"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 50%" }}
              />

              {/* Glow behind avatar */}
              <div className="hero-avatar-glow" aria-hidden="true" />

              {/* Avatar border gradient ring */}
              <div className="hero-avatar-ring">
                <img
                  src={profilePic}
                  alt={PROFILE.name}
                  className="hero-avatar-img"
                  loading="eager"
                />
              </div>

              {/* Floating badge — location */}
              <motion.div
                className="hero-floating-badge hero-badge-location"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="hero-badge-icon">📍</span>
                <span>{PROFILE.location}</span>
              </motion.div>

              {/* Floating badge — tech stack */}
              <motion.div
                className="hero-floating-badge hero-badge-tech"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="hero-badge-icon">⚡</span>
                <span>React · Laravel · Linux</span>
              </motion.div>
            </TiltCard>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="hero-scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
        <span className="hero-scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;
