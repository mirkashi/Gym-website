"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCounter from "@/components/AnimatedCounter";
import { CheckCircle } from "lucide-react";

const values = [
  { title: "Excellence", desc: "We hold ourselves and our members to the highest standards in training and service." },
  { title: "Community", desc: "We are more than a gym — we are a family that pushes each other to greatness." },
  { title: "Innovation", desc: "Cutting-edge equipment and programming backed by the latest sports science." },
  { title: "Integrity", desc: "Transparent pricing, honest coaching, and real results — no gimmicks." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-montserrat text-sm font-semibold tracking-widest uppercase">About Us</span>
            <h1 className="font-bebas text-6xl sm:text-8xl text-white mt-2">OUR <span className="text-primary">STORY</span></h1>
            <p className="text-gray-300 mt-4 max-w-xl">Building bodies and changing lives since 2014.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionTitle tag="Since 2014" title="WHO" highlight="WE ARE" centered={false} />
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>EliteFit Gym was founded with a simple but powerful vision: create a world-class training facility that is accessible to everyone regardless of fitness level.</p>
                <p>Our founder, Michael Torres, a former professional athlete, understood that the right environment, coaching, and community can be the difference between giving up and reaching your peak.</p>
                <p>Today, EliteFit stands as the premier fitness destination in the city, with over 500 members, 15 elite trainers, and a track record of real transformations.</p>
              </div>
              <div className="mt-6 space-y-2">
                {["NSCA Certified Facility", "ISO 9001 Quality Standard", "IHRSA Member Gym"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=800&q=80" alt="Gym interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[{ end: 10, suffix: "+", label: "Years" }, { end: 500, suffix: "+", label: "Members" }, { end: 15, suffix: "+", label: "Trainers" }].map(({ end, suffix, label }) => (
                    <div key={label}>
                      <p className="font-bebas text-3xl text-primary"><AnimatedCounter end={end} suffix={suffix} /></p>
                      <p className="text-gray-400 text-xs">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle tag="Philosophy" title="OUR CORE" highlight="VALUES" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass p-6 rounded-xl border border-dark-border hover:border-primary/50 transition-colors">
                <div className="w-10 h-1 bg-primary mb-4" />
                <h3 className="font-bebas text-2xl text-white">{v.title}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark text-center">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-bebas text-5xl text-white">READY TO <span className="text-primary">JOIN US?</span></h2>
            <p className="text-gray-400 mt-4 mb-8">Take the first step toward a better version of yourself.</p>
            <Link href="/auth/register" className="font-montserrat font-semibold bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-lg transition-colors">
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
