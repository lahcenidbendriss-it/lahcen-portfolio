import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { EDUCATION } from "../../data/content";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="py-24 relative">
      <SectionHeading
        title=""
        highlight="Education"
        subtitle="My academic background and qualifications"
      />

      <div className="max-w-3xl mx-auto px-6">
        <div className="space-y-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-6 lg:p-8 group hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 relative overflow-hidden">
                {/* Left accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-accent-cyan opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-l-xl" />

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                    <FaGraduationCap size={24} />
                  </div>

                  <div className="flex-1">
                    {/* Degree */}
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-accent/70 font-medium text-sm mt-1">
                      {edu.field}
                    </p>

                    {/* Institution & location */}
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                      <span>{edu.institution}</span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt size={10} className="text-accent/50" />
                        {edu.location}
                      </span>
                    </div>

                    {/* Year badge */}
                    <div className="mt-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-zinc-400">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
