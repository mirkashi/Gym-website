"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  tag,
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {tag && (
        <span className="inline-block text-primary font-montserrat text-sm font-semibold tracking-widest uppercase mb-3">
          — {tag} —
        </span>
      )}
      <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-none">
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
