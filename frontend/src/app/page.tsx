"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Dumbbell, Users, Trophy, Clock } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import MembershipCard from "@/components/MembershipCard";
import TrainerCard from "@/components/TrainerCard";
import TestimonialCard from "@/components/TestimonialCard";
import BMICalculator from "@/components/BMICalculator";
import SectionTitle from "@/components/SectionTitle";

const membershipPlans = [
  {
    title: "Basic",
    price: 29,
    features: [
      "Access to gym floor",
      "Locker room access",
      "Basic equipment use",
      "2 group classes/month",
      "Fitness assessment",
    ],
  },
  {
    title: "Standard",
    price: 49,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 PT session/month",
      "Nutrition guidance",
      "Sauna access",
      "Guest pass (1/month)",
    ],
    isPopular: true,
  },
  {
    title: "Premium",
    price: 79,
    features: [
      "Everything in Standard",
      "4 PT sessions/month",
      "Custom diet plan",
      "Priority booking",
      "Towel service",
      "Unlimited guest passes",
      "Recovery zone access",
    ],
  },
];

const trainers = [
  {
    name: "Marcus Steel",
    specialty: "Strength & Conditioning",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
    certifications: ["NSCA-CSCS", "NASM-CPT"],
    instagram: "#",
    twitter: "#",
  },
  {
    name: "Aria Chen",
    specialty: "Yoga & Mindfulness",
    experience: "6 years",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop",
    certifications: ["RYT-500", "ACE-CPT"],
    instagram: "#",
  },
  {
    name: "Jake Rivera",
    specialty: "HIIT & Boxing",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1534367899742-2d9e0b4bb7f3?w=400&h=500&fit=crop",
    certifications: ["USA Boxing", "NSCA-CPT"],
    instagram: "#",
    twitter: "#",
  },
  {
    name: "Sofia Reyes",
    specialty: "CrossFit & Nutrition",
    experience: "5 years",
    image: "https://images.unsplash.com/photo-1609899537878-48d9c7e68a29?w=400&h=500&fit=crop",
    certifications: ["CF-L2", "Precision Nutrition"],
    twitter: "#",
  },
];

const testimonials = [
  {
    name: "James Morrison",
    role: "Premium Member, 2 years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote:
      "EliteFit completely transformed my life. Lost 30 lbs in 4 months with the Premium plan. The trainers are world-class and the facilities are immaculate.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Standard Member, 1 year",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote:
      "The group classes are incredible. I come in 5 days a week and never get bored. The community here keeps me motivated every single day!",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Basic Member, 8 months",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote:
      "Best value for money in the city. The equipment is top of the line and the staff is always friendly and helpful. Highly recommend.",
    rating: 4,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-primary font-montserrat text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Premium Fitness Experience
            </motion.span>
            <h1 className="font-bebas text-6xl sm:text-7xl lg:text-9xl text-white leading-none tracking-wide">
              TRANSFORM
              <br />
              YOUR{" "}
              <span className="text-gradient">BODY</span>
              <br />
              TRANSFORM YOUR
              <br />
              <span className="text-gradient">LIFE</span>
            </h1>
            <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
              Join EliteFit and experience world-class training with expert coaches,
              cutting-edge equipment, and a community that fuels your ambition.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/auth/register"
                className="font-montserrat font-semibold bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg transition-colors duration-200 text-base"
              >
                Join Now
              </Link>
              <Link
                href="/membership"
                className="font-montserrat font-semibold border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg transition-colors duration-200 text-base"
              >
                Book Free Trial
              </Link>
              <Link
                href="/contact"
                className="font-montserrat font-semibold text-gray-300 hover:text-white px-8 py-4 transition-colors duration-200 text-base flex items-center gap-2"
              >
                Contact Us →
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, end: 500, suffix: "+", label: "Active Members" },
              { icon: Dumbbell, end: 15, suffix: "+", label: "Expert Trainers" },
              { icon: Trophy, end: 10, suffix: "+", label: "Years Experience" },
              { icon: Clock, end: 24, suffix: "/7", label: "Always Open" },
            ].map(({ icon: Icon, end, suffix, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Icon size={28} className="text-primary mx-auto mb-3" />
                <p className="font-bebas text-5xl text-white">
                  <AnimatedCounter end={end} suffix={suffix} />
                </p>
                <p className="text-gray-400 text-sm mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="Pricing"
            title="MEMBERSHIP"
            highlight="PLANS"
            subtitle="Choose the plan that fits your goals and budget. All plans include access to our state-of-the-art facilities."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {membershipPlans.map((plan, i) => (
              <MembershipCard key={plan.title} {...plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="Team"
            title="MEET OUR"
            highlight="TRAINERS"
            subtitle="World-class certified coaches dedicated to your transformation journey."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((t, i) => (
              <TrainerCard key={t.name} {...t} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/trainers"
              className="font-montserrat text-sm border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg transition-all"
            >
              View All Trainers
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="section-padding bg-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="Results"
            title="REAL"
            highlight="TRANSFORMATIONS"
            subtitle="Our members achieve extraordinary results. You could be next."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { before: "180 lbs", after: "145 lbs", duration: "6 months", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=700&fit=crop" },
              { before: "220 lbs", after: "175 lbs", duration: "8 months", img: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=700&fit=crop" },
              { before: "165 lbs", after: "135 lbs", duration: "5 months", img: "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?w=600&h=700&fit=crop" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative rounded-2xl overflow-hidden group h-80"
                style={{ backgroundImage: `url(${t.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-gray-400">Before</p>
                      <p className="text-white font-bold">{t.before}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400">After</p>
                      <p className="text-primary font-bold">{t.after}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Result in {t.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="Testimonials"
            title="WHAT MEMBERS"
            highlight="SAY"
            subtitle="Real stories from real members who changed their lives at EliteFit."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                tag="Tools"
                title="CHECK YOUR"
                highlight="BMI"
                subtitle="Use our free BMI calculator to understand your body composition and get personalized recommendations."
                centered={false}
              />
              <ul className="space-y-2 mt-4">
                {[
                  "Understand your current fitness level",
                  "Get targeted workout recommendations",
                  "Track your progress over time",
                  "Speak with our nutritionists",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <BMICalculator />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80)" }}
        />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bebas text-5xl sm:text-7xl text-white">
              START YOUR JOURNEY <span className="text-primary">TODAY</span>
            </h2>
            <p className="text-gray-300 mt-4 text-lg">
              First week is FREE. No contracts. Cancel anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/auth/register"
                className="font-montserrat font-semibold bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-lg transition-colors text-base"
              >
                Get Free Trial
              </Link>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat font-semibold border border-white/30 hover:border-white text-white px-10 py-4 rounded-lg transition-colors text-base flex items-center gap-2"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
