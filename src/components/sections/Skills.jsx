import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SKILLS } from "../../data/content";
import { FaServer, FaDatabase, FaCode, FaPalette } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const CAT_CFG = {
  "IT Operations":       { icon: FaServer,   color: "#f59e0b", hex: "245,158,11"  },
  "Systems & Databases": { icon: FaDatabase, color: "#06b6d4", hex: "6,182,212"   },
  "Back-end":            { icon: FaCode,     color: "#14b8a6", hex: "20,184,166"  },
  "Front-end":           { icon: FaPalette,  color: "#a78bfa", hex: "167,139,250" },
};

/* ── SVG radial arc gauge ── */
const R = 38;
const CIRC = 2 * Math.PI * R;

function ArcGauge({ name, level, color, delay, active }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const offset = CIRC * (1 - level / 100);

  return (
    <motion.div
      ref={ref}
      className="sk2-gauge"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="sk2-gauge-svg-wrap">
        <svg width="96" height="96" viewBox="0 0 96 96">
          {/* Background track */}
          <circle
            cx="48" cy="48" r={R}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="6"
          />
          {/* Animated arc */}
          <motion.circle
            cx="48" cy="48" r={R}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            initial={{ strokeDashoffset: CIRC }}
            animate={inView && active ? { strokeDashoffset: offset } : { strokeDashoffset: CIRC }}
            transition={{ duration: 1.4, delay: delay + 0.1, ease: "easeOut" }}
            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%", filter: `drop-shadow(0 0 6px ${color}99)` }}
          />
          {/* Glow arc (fatter, blurred) */}
          <motion.circle
            cx="48" cy="48" r={R}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            initial={{ strokeDashoffset: CIRC, opacity: 0 }}
            animate={inView && active
              ? { strokeDashoffset: offset, opacity: 0.15 }
              : { strokeDashoffset: CIRC, opacity: 0 }}
            transition={{ duration: 1.4, delay: delay + 0.1, ease: "easeOut" }}
            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%", filter: `blur(4px)` }}
          />
        </svg>

        {/* Centre percentage */}
        <motion.span
          className="sk2-gauge-pct"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={inView && active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.6 }}
        >
          {level}<span className="sk2-gauge-pct-sym">%</span>
        </motion.span>
      </div>

      <span className="sk2-gauge-name">{name}</span>
    </motion.div>
  );
}

/* ── Main Skills component ── */
function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeGroup = SKILLS[activeIdx];
  const cfg = CAT_CFG[activeGroup?.category] ?? { icon: FaCode, color: "#14b8a6", hex: "20,184,166" };

  return (
    <section id="skills" className="sk2-section">
      {/* Dot-grid background */}
      <div className="sk2-dotgrid" aria-hidden="true" />

      {/* Glows */}
      <div className="sk2-glow sk2-glow-a" aria-hidden="true" style={{ background: `rgba(${cfg.hex},0.08)` }} />
      <div className="sk2-glow sk2-glow-b" aria-hidden="true" />

      <div className="sk2-container">

        {/* ── Header ── */}
        <motion.div
          className="sk2-header"
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="sk2-pill"><HiSparkles /> What I Know</span>
          <h2 className="sk2-headline">
            Skills &amp; <span className="sk2-accent">Expertise</span>
          </h2>
          <p className="sk2-sub">A blend of IT operations precision and full-stack development craft</p>
        </motion.div>

        {/* ── Main panel ── */}
        <motion.div
          className="sk2-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* ── Left: category tabs ── */}
          <div className="sk2-tabs">
            {SKILLS.map((group, i) => {
              const c = CAT_CFG[group.category] ?? { icon: FaCode, color: "#14b8a6" };
              const Icon = c.icon;
              const isActive = i === activeIdx;
              const avg = Math.round(group.items.reduce((s, x) => s + x.level, 0) / group.items.length);

              return (
                <button
                  key={group.category}
                  className={`sk2-tab ${isActive ? "sk2-tab-active" : ""}`}
                  style={isActive ? { "--tc": c.color } : {}}
                  onClick={() => setActiveIdx(i)}
                >
                  <div className="sk2-tab-icon" style={{ color: isActive ? c.color : undefined }}>
                    <Icon size={16} />
                  </div>
                  <div className="sk2-tab-info">
                    <span className="sk2-tab-name">{group.category}</span>
                    <span className="sk2-tab-meta">{group.items.length} skills · {avg}% avg</span>
                  </div>
                  {isActive && (
                    <motion.div
                      className="sk2-tab-bar"
                      layoutId="tab-bar"
                      style={{ background: c.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Right: arc gauges panel ── */}
          <div className="sk2-content">
            {/* Active category label */}
            <div className="sk2-content-header" style={{ "--tc": cfg.color }}>
              <div className="sk2-content-icon">
                <cfg.icon size={20} style={{ color: cfg.color }} />
              </div>
              <div>
                <h3 className="sk2-content-title">{activeGroup?.category}</h3>
                <span className="sk2-content-sub">{activeGroup?.items.length} technologies</span>
              </div>
              <div
                className="sk2-content-avg"
                style={{ color: cfg.color, background: `rgba(${cfg.hex},0.1)`, borderColor: `rgba(${cfg.hex},0.28)` }}
              >
                {Math.round(activeGroup?.items.reduce((s, x) => s + x.level, 0) / activeGroup?.items.length)}%
                <span> avg</span>
              </div>
            </div>

            {/* Arc gauges grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                className="sk2-gauges"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
              >
                {activeGroup?.items.map((skill, i) => (
                  <ArcGauge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cfg.color}
                    delay={i * 0.07}
                    active={true}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Bottom glow strip */}
            <div className="sk2-content-glow" style={{ background: `rgba(${cfg.hex},0.06)` }} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
