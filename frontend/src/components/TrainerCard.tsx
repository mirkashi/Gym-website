"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaTwitter } from "react-icons/fa";

interface TrainerCardProps {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  certifications?: string[];
  instagram?: string;
  twitter?: string;
  index?: number;
}

export default function TrainerCard({
  name,
  specialty,
  experience,
  image,
  certifications = [],
  instagram,
  twitter,
  index = 0,
}: TrainerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group glass border border-dark-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {instagram && (
            <a href={instagram} className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-primary transition-colors">
              <FaInstagram size={16} />
            </a>
          )}
          {twitter && (
            <a href={twitter} className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-primary transition-colors">
              <FaTwitter size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bebas text-2xl text-white">{name}</h3>
        <p className="text-primary text-sm font-montserrat font-medium">{specialty}</p>
        <p className="text-gray-400 text-xs mt-1">{experience} experience</p>

        {certifications.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {certifications.slice(0, 2).map((c) => (
              <span key={c} className="text-xs bg-dark px-2 py-1 rounded text-gray-400 border border-dark-border">
                {c}
              </span>
            ))}
          </div>
        )}

        <button className="mt-4 w-full border border-primary text-primary hover:bg-primary hover:text-white font-montserrat text-sm py-2 rounded-lg transition-all duration-200">
          Book Session
        </button>
      </div>
    </motion.div>
  );
}
