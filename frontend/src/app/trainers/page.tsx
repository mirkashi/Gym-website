"use client";
import { motion } from "framer-motion";
import TrainerCard from "@/components/TrainerCard";
import SectionTitle from "@/components/SectionTitle";

const trainers = [
  { name: "Marcus Steel", specialty: "Strength & Conditioning", experience: "8 years", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop", certifications: ["NSCA-CSCS", "NASM-CPT"], instagram: "#", twitter: "#" },
  { name: "Aria Chen", specialty: "Yoga & Mindfulness", experience: "6 years", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop", certifications: ["RYT-500", "ACE-CPT"], instagram: "#" },
  { name: "Jake Rivera", specialty: "HIIT & Boxing", experience: "10 years", image: "https://images.unsplash.com/photo-1534367899742-2d9e0b4bb7f3?w=400&h=500&fit=crop", certifications: ["USA Boxing", "NSCA-CPT"], instagram: "#", twitter: "#" },
  { name: "Sofia Reyes", specialty: "CrossFit & Nutrition", experience: "5 years", image: "https://images.unsplash.com/photo-1609899537878-48d9c7e68a29?w=400&h=500&fit=crop", certifications: ["CF-L2", "Precision Nutrition"], twitter: "#" },
  { name: "Derek Johnson", specialty: "Powerlifting", experience: "12 years", image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=500&fit=crop", certifications: ["USAPL Coach", "NSCA-CPT"], instagram: "#" },
  { name: "Lena Park", specialty: "Pilates & Rehabilitation", experience: "7 years", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=500&fit=crop", certifications: ["PMA-CPT", "ACE-CPT"], instagram: "#", twitter: "#" },
  { name: "Carlos Mendez", specialty: "MMA & Functional Fitness", experience: "9 years", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop", certifications: ["NASM-CPT", "UFC Gym Certified"], instagram: "#" },
  { name: "Emma Williams", specialty: "Endurance & Cycling", experience: "4 years", image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=400&h=500&fit=crop", certifications: ["USAC Coach", "ACE-CPT"], twitter: "#" },
];

export default function TrainersPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-dark">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-montserrat text-sm font-semibold tracking-widest uppercase">Team</span>
            <h1 className="font-bebas text-6xl sm:text-8xl text-white mt-2">OUR <span className="text-primary">TRAINERS</span></h1>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">World-class certified coaches dedicated to your transformation. Each trainer brings unique expertise and a passion for helping you reach your goals.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((t, i) => <TrainerCard key={t.name} {...t} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-card text-center">
        <div className="max-w-2xl mx-auto px-4">
          <SectionTitle tag="Join the Team" title="BECOME A" highlight="TRAINER" subtitle="Are you a certified fitness professional? We are always looking for passionate coaches." />
          <a href="mailto:careers@elitefit.com" className="font-montserrat font-semibold bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-lg transition-colors inline-block">
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
