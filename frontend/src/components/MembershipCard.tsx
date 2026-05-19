"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

interface MembershipCardProps {
  title: string;
  price: number;
  period?: string;
  features: string[];
  isPopular?: boolean;
  index?: number;
  billing?: "monthly" | "yearly";
}

export default function MembershipCard({
  title,
  price,
  period,
  features,
  isPopular = false,
  index = 0,
  billing = "monthly",
}: MembershipCardProps) {
  const displayPeriod = period ?? (billing === "yearly" ? "month (billed yearly)" : "month");
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-2xl p-8 flex flex-col ${
        isPopular
          ? "bg-primary border-2 border-primary shadow-2xl shadow-primary/30 scale-105"
          : "glass border border-dark-border"
      }`}
    >
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-montserrat font-bold px-4 py-1 rounded-full">
          MOST POPULAR
        </span>
      )}

      <h3 className={`font-bebas text-3xl tracking-wide ${isPopular ? "text-white" : "text-white"}`}>
        {title}
      </h3>

      <div className="mt-4 flex items-end gap-1">
        <span className={`text-5xl font-bebas ${isPopular ? "text-white" : "text-primary"}`}>
          ${price}
        </span>
        <span className={`text-sm mb-2 ${isPopular ? "text-red-100" : "text-gray-400"}`}>
          /{displayPeriod}
        </span>
      </div>

      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <Check size={16} className={isPopular ? "text-white" : "text-primary"} />
            <span className={`text-sm ${isPopular ? "text-red-50" : "text-gray-300"}`}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/auth/register"
        className={`mt-8 block text-center font-montserrat font-semibold py-3 rounded-lg transition-all duration-200 ${
          isPopular
            ? "bg-white text-primary hover:bg-gray-100"
            : "bg-primary hover:bg-primary-dark text-white"
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
}
