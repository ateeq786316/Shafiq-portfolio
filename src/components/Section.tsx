import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  eyebrow,
  title, 
  subtitle
}) => {
  return (
    <section className={`py-20 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {eyebrow && (
            <span className="text-cyan-400 text-sm font-accent tracking-widest uppercase">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider text-gray-100 mt-4 mb-6 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-sans">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
};