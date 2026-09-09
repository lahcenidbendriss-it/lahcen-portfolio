import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { EXPERIENCES } from "../../data/content";
import {
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2,
  HiOutlineCalendar,
  HiOutlineMapPin,
  HiOutlineCommandLine,
  HiOutlineCodeBracket,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi2";

function Experience() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { id: "All", label: "All Roles", icon: HiOutlineBriefcase },
    { id: "IT Operations", label: "IT Operations", icon: HiOutlineCommandLine },
    { id: "Full Stack", label: "Full Stack", icon: HiOutlineCodeBracket },
  ];

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeFilter === "All") return true;
    return exp.category === activeFilter;
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <SectionHeading
        title="Professional"
        highlight="Experience"
        subtitle="My career journey across IT operations, systems monitoring, and software engineering"
      />

      {/* Filter Tabs */}
      <div className="max-w-4xl mx-auto px-6 mb-12 flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md gap-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeFilter === cat.id;
            const count =
              cat.id === "All"
                ? EXPERIENCES.length
                : EXPERIENCES.filter((e) => e.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "text-white shadow-lg"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeExperienceFilter"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 to-accent-cyan/20 border border-accent/40"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className={`text-base relative z-10 ${isActive ? "text-accent" : "text-zinc-400"}`} />
                <span className="relative z-10 font-heading">{cat.label}</span>
                <span
                  className={`relative z-10 px-1.5 py-0.5 rounded-md text-[10px] font-semibold ${
                    isActive
                      ? "bg-accent/30 text-accent-cyan border border-accent/30"
                      : "bg-white/5 text-zinc-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Continuous glowing vertical stem line */}
        <div className="absolute left-6 md:left-10 top-2 bottom-6 w-0.5 bg-gradient-to-b from-accent via-accent-cyan/40 to-transparent" />

        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredExperiences.map((exp, index) => {
              const isOps = exp.category === "IT Operations";

              return (
                <motion.div
                  key={exp.company + exp.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-6 md:left-10 -translate-x-1/2 top-7 z-10 flex items-center justify-center">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        exp.isCurrent
                          ? "bg-surface border-accent shadow-[0_0_16px_rgba(20,184,166,0.6)] scale-110"
                          : "bg-surface border-zinc-700 group-hover:border-accent group-hover:shadow-[0_0_12px_rgba(20,184,166,0.3)]"
                      }`}
                    >
                      {exp.isCurrent ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-accent transition-colors" />
                      )}
                    </div>
                    {exp.isCurrent && (
                      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                    )}
                  </div>

                  {/* Glassmorphic Experience Card */}
                  <div className="glass-card p-6 md:p-8 relative overflow-hidden transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_10px_30px_rgba(20,184,166,0.08)]">
                    {/* Top ambient highlight line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                        exp.isCurrent
                          ? "from-accent via-accent-cyan to-accent"
                          : "from-accent/40 via-transparent to-accent-cyan/40 group-hover:from-accent group-hover:to-accent-cyan"
                      } transition-all duration-500`}
                    />

                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                      <div>
                        {/* Badges bar */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {/* Current Role Glow Badge */}
                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-accent/10 border border-accent/30 text-accent">
                              <HiOutlineSparkles className="text-xs animate-spin-slow" />
                              Current Position
                            </span>
                          )}

                          {/* Category Tag */}
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
                              isOps
                                ? "bg-teal-950/40 border-teal-500/30 text-teal-300"
                                : "bg-cyan-950/40 border-cyan-500/30 text-cyan-300"
                            }`}
                          >
                            {isOps ? (
                              <HiOutlineCommandLine className="text-xs" />
                            ) : (
                              <HiOutlineCodeBracket className="text-xs" />
                            )}
                            {exp.category}
                          </span>
                        </div>

                        {/* Role Title */}
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-accent transition-colors duration-300 flex flex-wrap items-center gap-2">
                          <span>{exp.role}</span>
                          {exp.roleFr && (
                            <span className="text-xs font-normal text-zinc-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                              {exp.roleFr}
                            </span>
                          )}
                        </h3>

                        {/* Company & Location Info */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-300 mt-2">
                          <span className="flex items-center gap-1.5 font-medium text-accent-cyan">
                            <HiOutlineBuildingOffice2 className="text-base text-accent" />
                            {exp.company}
                          </span>
                          {exp.location && (
                            <span className="flex items-center gap-1 text-zinc-400 text-xs">
                              <HiOutlineMapPin className="text-accent/70" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Year Badge */}
                      <div className="self-start sm:self-auto shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/[0.04] border border-white/10 text-zinc-300 group-hover:border-accent/30 group-hover:text-accent transition-all duration-300">
                        <HiOutlineCalendar className="text-accent" />
                        <span>{exp.year}</span>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.description.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm sm:text-[15px] text-zinc-300/90 leading-relaxed group/item"
                        >
                          <HiOutlineCheckCircle className="text-accent mt-1 shrink-0 text-base group-hover/item:scale-110 transition-transform" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium text-zinc-400 mr-1">
                        Technologies:
                      </span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium text-zinc-300 bg-white/[0.04] hover:bg-accent/10 hover:text-accent border border-white/10 hover:border-accent/30 px-3 py-1 rounded-lg transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Experience;
