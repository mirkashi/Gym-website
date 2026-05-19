"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import MembershipCard from "@/components/MembershipCard";
import { CheckCircle } from "lucide-react";

const plans = {
  monthly: [
    { title: "Basic", price: 29, features: ["Gym floor access", "Locker room", "Basic equipment", "2 group classes/month", "Fitness assessment"] },
    { title: "Standard", price: 49, isPopular: true, features: ["Everything in Basic", "Unlimited group classes", "1 PT session/month", "Nutrition guidance", "Sauna access", "1 guest pass/month"] },
    { title: "Premium", price: 79, features: ["Everything in Standard", "4 PT sessions/month", "Custom diet plan", "Priority booking", "Towel service", "Unlimited guest passes", "Recovery zone"] },
  ],
  yearly: [
    { title: "Basic", price: 23, features: ["Gym floor access", "Locker room", "Basic equipment", "2 group classes/month", "Fitness assessment", "Save 21% vs monthly"] },
    { title: "Standard", price: 39, isPopular: true, features: ["Everything in Basic", "Unlimited group classes", "1 PT session/month", "Nutrition guidance", "Sauna access", "1 guest pass/month", "Save 20% vs monthly"] },
    { title: "Premium", price: 63, features: ["Everything in Standard", "4 PT sessions/month", "Custom diet plan", "Priority booking", "Towel service", "Unlimited guest passes", "Recovery zone", "Save 20% vs monthly"] },
  ],
};

const faqs = [
  { q: "Is there a sign-up fee?", a: "No sign-up fees ever. What you see is what you pay." },
  { q: "Can I cancel anytime?", a: "Yes. Monthly plans can be cancelled at any time with 30 days notice. Annual plans have a 30-day money back guarantee." },
  { q: "Can I freeze my membership?", a: "Yes. You can freeze your membership for up to 3 months per year with no additional charge." },
  { q: "Do you offer corporate memberships?", a: "Yes! Contact us for special corporate rates for teams of 5 or more." },
  { q: "Is there a free trial?", a: "Absolutely. Your first week is completely free with no credit card required." },
];

export default function MembershipPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <>
      <section className="relative pt-32 pb-20 bg-dark">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-montserrat text-sm font-semibold tracking-widest uppercase">Pricing</span>
            <h1 className="font-bebas text-6xl sm:text-8xl text-white mt-2">MEMBERSHIP <span className="text-primary">PLANS</span></h1>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Transparent pricing. No hidden fees. Cancel anytime.</p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => setBilling("monthly")} className={`font-montserrat text-sm px-5 py-2 rounded-full transition-all ${billing === "monthly" ? "bg-primary text-white" : "text-gray-400 hover:text-white"}`}>Monthly</button>
              <button onClick={() => setBilling("yearly")} className={`font-montserrat text-sm px-5 py-2 rounded-full transition-all ${billing === "yearly" ? "bg-primary text-white" : "text-gray-400 hover:text-white"}`}>
                Yearly <span className="text-xs text-green-400 ml-1">Save 20%</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans[billing].map((plan, i) => (
              <MembershipCard key={plan.title} {...plan} index={i} billing={billing} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-dark-card">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle tag="Help" title="FREQUENTLY" highlight="ASKED" subtitle="Got questions? We have answers." />
          <div className="space-y-4 mt-8">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass border border-dark-border rounded-xl p-5">
                <div className="flex gap-3">
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">{faq.q}</p>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-center">
        <div className="max-w-xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-bebas text-5xl text-white">NOT SURE WHICH <span className="text-primary">PLAN?</span></h2>
            <p className="text-gray-400 mt-3 mb-6 text-sm">Chat with our team and we will help you find the perfect fit.</p>
            <Link href="/contact" className="font-montserrat font-semibold border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg transition-all">
              Talk to Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
