"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  index?: number;
}

export default function TestimonialCard({
  name,
  role,
  image,
  quote,
  rating,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass border border-dark-border rounded-2xl p-6 flex flex-col"
    >
      <Quote size={32} className="text-primary/30 mb-3" />
      <p className="text-gray-300 text-sm leading-relaxed flex-1">{quote}</p>

      <div className="flex mt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            size={14}
            className={i < rating ? "text-yellow-400" : "text-gray-600"}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-dark-border">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
          <Image src={image} alt={name} fill className="object-cover" sizes="40px" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
