import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { PROJECTS } from "../../data/content";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  HiOutlineTrophy,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineShoppingBag,
  HiOutlineCodeBracket,
  HiOutlineBriefcase,
} from "react-icons/hi2";

// ── Category config ──────────────────────────────────────────
const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "wordpress", label: "WordPress & SEO" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "fullstack", label: "Full Stack" },
];

// Inline gradient styles (avoids Tailwind JIT purge issue with dynamic classes)
const CATEGORY_STYLE = {
  wordpress: {
    gradient: "linear-gradient(135deg, #8b5cf6, #14b8a6, #06b6d4)",
    glow: "rgba(139,92,246,0.15)",
    bg: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(20,184,166,0.1))",
  },
  ecommerce: {
    gradient: "linear-gradient(135deg, #f59e0b, #f97316, #f43f5e)",
    glow: "rgba(249,115,22,0.15)",
    bg: "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(244,63,94,0.08))",
  },
  fullstack: {
    gradient: "linear-gradient(135deg, #06b6d4, #14b8a6, #8b5cf6)",
    glow: "rgba(6,182,212,0.15)",
    bg: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(20,184,166,0.1))",
  },
  default: {
    gradient: "linear-gradient(135deg, #14b8a6, #06b6d4, #8b5cf6)",
    glow: "rgba(20,184,166,0.15)",
    bg: "linear-gradient(135deg, rgba(20,184,166,0.15), rgba(6,182,212,0.08))",
  },
};

const CATEGORY_ICON = {
  wordpress: HiOutlineGlobeAlt,
  ecommerce: HiOutlineShoppingBag,
  fullstack: HiOutlineCodeBracket,
};

// ── Single card ──────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const style = CATEGORY_STYLE[project.category] || CATEGORY_STYLE.default;
  const Icon = CATEGORY_ICON[project.category] || HiOutlineBriefcase;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      className="group relative flex flex-col h-full"
    >
      <div
        className="glass-card h-full flex flex-col relative overflow-hidden shadow-xl transition-all duration-500 rounded-2xl border border-white/[0.07]"
        style={{
          "--card-glow": style.glow,
        }}
      >
        {/* Top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2.5px] opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{ background: style.gradient }}
        />

        {/* Hover inner glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top, ${style.glow}, transparent 70%)` }}
        />

        {/* ── Image / Placeholder ── */}
        <div className="relative overflow-hidden shrink-0">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </>
          ) : (
            <div
              className="w-full h-36 flex items-center justify-center relative overflow-hidden"
              style={{ background: style.bg }}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <Icon className="text-5xl text-white/25 relative z-10" />
            </div>
          )}

          {/* SEO badge */}
          {project.seoBadge && (
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 z-10">
              <HiOutlineTrophy className="text-amber-400 text-xs animate-pulse" />
              {project.seoBadge}
            </div>
          )}

          {/* Type badge */}
          <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md border border-white/15 text-zinc-300 z-10">
            {project.type}
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col flex-1 p-5 gap-3">

          {/* Title + subtitle */}
          <div>
            <h3 className="text-base font-heading font-bold text-white group-hover:text-accent transition-colors duration-300 leading-snug">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-[11px] font-medium text-accent-cyan mt-0.5 leading-tight">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-xs text-zinc-400 leading-relaxed flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Highlights chips */}
          {project.highlights && (
            <div className="grid grid-cols-2 gap-1.5">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 text-[10px] font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.06] px-2 py-1.5 rounded-lg"
                >
                  <HiOutlineCheckCircle className="text-accent text-xs shrink-0" />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
            {/* Tech tags */}
            <div className="flex flex-wrap gap-1 flex-1 min-w-0">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[9px] font-semibold text-zinc-500 bg-white/[0.04] border border-white/[0.06] px-1.5 py-0.5 rounded-md uppercase tracking-wide"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-[9px] font-semibold text-zinc-600 px-1">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* CTA */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white font-bold text-[10px] px-3 py-2 rounded-lg transition-all duration-300 shrink-0 whitespace-nowrap hover:opacity-90 hover:scale-105"
                style={{
                  background: style.gradient,
                  boxShadow: `0 4px 14px ${style.glow}`,
                }}
              >
                {project.liveUrl.includes("github") ? (
                  <><FaGithub className="text-xs" /> GitHub</>
                ) : (
                  <><HiOutlineGlobeAlt className="text-xs" /> Live Site</>
                )}
              </a>
            ) : (
              <span className="text-[10px] font-medium text-zinc-600 border border-white/[0.06] px-2.5 py-1.5 rounded-lg italic">
                Private
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main section ─────────────────────────────────────────────
function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "rgba(20,184,166,0.04)", filter: "blur(160px)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "rgba(139,92,246,0.04)", filter: "blur(140px)" }}
      />

      <SectionHeading
        title="Featured"
        highlight="Projects"
        subtitle="Real-world products I've designed, built, and launched — from full-stack apps to SEO-ranked client websites"
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.key;
            const count =
              cat.key === "all"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat.key).length;

            return (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                  isActive
                    ? "border-accent/50 text-accent"
                    : "bg-white/[0.03] border-white/10 text-zinc-400 hover:border-accent/30 hover:text-zinc-200"
                }`}
                style={
                  isActive
                    ? {
                        background: "rgba(20,184,166,0.12)",
                        boxShadow: "0 0 16px rgba(20,184,166,0.18)",
                      }
                    : {}
                }
              >
                {cat.label}
                <span
                  className={`ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px] font-bold ${
                    isActive ? "text-accent" : "text-zinc-500"
                  }`}
                  style={
                    isActive
                      ? { background: "rgba(20,184,166,0.25)" }
                      : { background: "rgba(255,255,255,0.08)" }
                  }
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── 3-Column Grid ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/lahcenidbendriss-it"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-zinc-400 hover:text-accent border border-white/10 hover:border-accent/40 px-6 py-3 rounded-xl transition-all duration-300 bg-white/[0.02] hover:bg-accent/[0.05]"
          >
            <FaGithub className="text-base" />
            View More on GitHub
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
