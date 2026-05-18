"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const posts = [
  { slug: "5-best-exercises-for-beginners", title: "5 Best Exercises for Beginners", excerpt: "Starting your fitness journey can be overwhelming. Here are the 5 most effective exercises to build a solid foundation.", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=350&fit=crop", date: "Dec 15, 2024", category: "Beginner", readTime: "5 min" },
  { slug: "nutrition-guide-for-muscle-gain", title: "Complete Nutrition Guide for Muscle Gain", excerpt: "Discover the science-backed nutritional strategies that will help you build lean muscle mass faster and more efficiently.", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=350&fit=crop", date: "Dec 10, 2024", category: "Nutrition", readTime: "8 min" },
  { slug: "hiit-vs-steady-state-cardio", title: "HIIT vs Steady State Cardio: What is Better?", excerpt: "We break down the pros and cons of both training styles to help you decide which is right for your specific goals.", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=350&fit=crop", date: "Dec 5, 2024", category: "Training", readTime: "6 min" },
  { slug: "recovery-and-sleep", title: "Why Recovery is Your Most Important Workout", excerpt: "Sleep, rest days, and active recovery are crucial for gains. Learn how to optimize your recovery protocol.", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=350&fit=crop", date: "Nov 28, 2024", category: "Recovery", readTime: "7 min" },
  { slug: "weight-loss-myths", title: "10 Weight Loss Myths Debunked by Science", excerpt: "Stop falling for these common misconceptions. We separate fact from fiction using the latest research.", image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=350&fit=crop", date: "Nov 20, 2024", category: "Weight Loss", readTime: "9 min" },
  { slug: "building-home-gym", title: "How to Build an Effective Home Gym on a Budget", excerpt: "You do not need expensive equipment to get a great workout. Here is everything you need to create your home gym.", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=350&fit=crop", date: "Nov 15, 2024", category: "Lifestyle", readTime: "6 min" },
];

const categories = ["All", "Beginner", "Training", "Nutrition", "Recovery", "Weight Loss", "Lifestyle"];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-dark">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-montserrat text-sm font-semibold tracking-widest uppercase">Knowledge</span>
            <h1 className="font-bebas text-6xl sm:text-8xl text-white mt-2">FITNESS <span className="text-primary">BLOG</span></h1>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Expert tips, science-backed advice, and inspiring stories to fuel your fitness journey.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} className="font-montserrat text-sm px-4 py-1.5 rounded-full glass border border-dark-border text-gray-400 hover:text-white hover:border-primary transition-all">
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article key={post.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass border border-dark-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 33vw" />
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-montserrat px-3 py-1 rounded-full">{post.category}</div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between text-xs text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h2 className="font-bebas text-xl text-white leading-tight hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-primary text-sm font-montserrat hover:text-white transition-colors">
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
