import { motion } from "framer-motion";

function SectionHeading({ title, highlight, subtitle, id }) {
  return (
    <div className="text-center mb-16" id={id}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight"
      >
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>

      {subtitle && (
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-zinc-400 text-lg max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        whileInView={{ scaleX: 1 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-cyan origin-left"
      />
    </div>
  );
}

export default SectionHeading;
