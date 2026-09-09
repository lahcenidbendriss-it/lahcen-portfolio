import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ABOUT_TEXT, LANGUAGES, PROFILE } from "../../data/content";
import {
  FaMapMarkerAlt, FaBriefcase, FaCode, FaServer, FaShieldAlt,
  FaLinkedin, FaGithub,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import avatarImg from "../../assets/avatar-6.png";

/* ── Animated counter ── */
function Counter({ target, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return c.stop;
  }, [inView, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const STATS = [
  { val: 2,  suf: "+", label: "Years Exp." },
  { val: 10, suf: "+", label: "Projects"   },
  { val: 4,  suf: "",  label: "Companies"  },
  { val: 3,  suf: "",  label: "Languages"  },
];

const TAGS = [
  { icon: FaServer,    text: "IT Operations",  color: "#14b8a6" },
  { icon: FaCode,      text: "Full Stack Dev",  color: "#06b6d4" },
  { icon: FaShieldAlt, text: "Incident Mgmt",   color: "#2dd4bf" },
  { icon: FaCode,      text: "React & Laravel", color: "#a78bfa" },
  { icon: FaServer,    text: "Linux & Oracle",  color: "#f59e0b" },
  { icon: FaCode,      text: "SQL & MySQL",     color: "#34d399" },
];

const LANG_META = {
  Arabic:  { flag: "🇲🇦", pct: 100 },
  French:  { flag: "🇫🇷", pct: 85  },
  English: { flag: "🇬🇧", pct: 82  },
};

function LangRow({ flag, name, level, pct, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="ab-lang-row">
      <span className="ab-lang-flag">{flag}</span>
      <span className="ab-lang-name">{name}</span>
      <span className="ab-lang-lvl">{level}</span>
      <div className="ab-lang-track">
        <motion.div
          className="ab-lang-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="ab-section">
      <div className="ab-glow ab-glow-l" aria-hidden="true" />
      <div className="ab-glow ab-glow-r" aria-hidden="true" />

      <div className="ab-container">
        {/* Label + headline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="ab-header"
        >
          <span className="ab-pill"><HiSparkles /> Who I Am</span>
          <h2 className="ab-headline">
            About <span className="ab-accent">Me</span>
          </h2>
        </motion.div>

        {/* ══ SPLIT CARD ══ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="ab-card"
        >
          {/* ─── LEFT PANEL ─── */}
          <div className="ab-left">
            <div className="ab-topline" />

            {/* Avatar */}
            <div className="ab-avatar-wrap">
              <div className="ab-avatar-ring">
                <img src={avatarImg} alt={PROFILE.name} className="ab-avatar" />
              </div>
              <span className="ab-available-dot" title="Available for opportunities" />
            </div>

            <h3 className="ab-name">{PROFILE.name}</h3>
            <p className="ab-role">{PROFILE.title}</p>

            {/* Stats */}
            <div className="ab-stats">
              {STATS.map(({ val, suf, label }) => (
                <div key={label} className="ab-stat">
                  <span className="ab-stat-val"><Counter target={val} suffix={suf} /></span>
                  <span className="ab-stat-lbl">{label}</span>
                </div>
              ))}
            </div>

            {/* Chips */}
            <div className="ab-chips">
              <span className="ab-chip">
                <FaMapMarkerAlt size={10} /> {PROFILE.location}
              </span>
              <span className="ab-chip ab-chip-green">
                <FaBriefcase size={10} /> Open to Work
              </span>
            </div>

            {/* Socials */}
            <div className="ab-socials">
              <a
                href="https://www.linkedin.com/in/lahcen-idbendriss-1376a32b1/"
                target="_blank" rel="noreferrer"
                className="ab-social-btn"
              >
                <FaLinkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://github.com/lahcenidbendriss-it"
                target="_blank" rel="noreferrer"
                className="ab-social-btn"
              >
                <FaGithub size={14} /> GitHub
              </a>
            </div>
          </div>

          {/* ─── RIGHT PANEL ─── */}
          <div className="ab-right">
            {/* Bio */}
            <div className="ab-block">
              <span className="ab-block-label">Bio</span>
              <p className="ab-bio">{ABOUT_TEXT}</p>
            </div>

            {/* Expertise tags */}
            <div className="ab-block">
              <span className="ab-block-label">Expertise</span>
              <div className="ab-tags">
                {TAGS.map(({ icon: Icon, text, color }) => (
                  <span key={text} className="ab-tag" style={{ "--tc": color }}>
                    <Icon size={11} style={{ color }} />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="ab-block">
              <span className="ab-block-label">Languages</span>
              <div className="ab-langs">
                {LANGUAGES.map(({ name, level }, i) => {
                  const { flag, pct } = LANG_META[name] ?? { flag: "🌐", pct: 70 };
                  return (
                    <LangRow
                      key={name}
                      flag={flag}
                      name={name}
                      level={level}
                      pct={pct}
                      delay={i * 0.12}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
