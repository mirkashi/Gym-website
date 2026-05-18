"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const categories = ["All", "Equipment", "Classes", "Trainers", "Transformations", "Events"];

const images = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop", category: "Equipment", title: "Main Gym Floor" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop", category: "Classes", title: "HIIT Class" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", category: "Trainers", title: "Personal Training" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop", category: "Classes", title: "Yoga Session" },
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop", category: "Equipment", title: "Weight Room" },
  { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&fit=crop", category: "Trainers", title: "Coach Session" },
  { src: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=400&fit=crop", category: "Transformations", title: "Member Success" },
  { src: "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?w=600&h=400&fit=crop", category: "Transformations", title: "12-Week Result" },
  { src: "https://images.unsplash.com/photo-1534367899742-2d9e0b4bb7f3?w=600&h=400&fit=crop", category: "Classes", title: "Boxing Class" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop", category: "Equipment", title: "Cardio Zone" },
  { src: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=600&h=400&fit=crop", category: "Events", title: "Annual Challenge" },
  { src: "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=600&h=400&fit=crop", category: "Events", title: "Community Day" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | typeof images[0]>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <>
      <section className="relative pt-32 pb-16 bg-dark">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-montserrat text-sm font-semibold tracking-widest uppercase">Gallery</span>
            <h1 className="font-bebas text-6xl sm:text-8xl text-white mt-2">OUR <span className="text-primary">GYM</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={`font-montserrat text-sm px-5 py-2 rounded-full transition-all ${active === cat ? "bg-primary text-white" : "glass text-gray-400 hover:text-white border border-dark-border"}`}>
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => setLightbox(img)}
                  className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid"
                >
                  <Image src={img.src} alt={img.title} width={600} height={400} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <p className="text-primary text-xs font-montserrat">{img.category}</p>
                      <p className="text-white font-semibold">{img.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-dark/95 z-50 flex items-center justify-center p-4"
          >
            <button className="absolute top-4 right-4 text-white hover:text-primary" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
              <Image src={lightbox.src.replace("w=600&h=400", "w=1200&h=800")} alt={lightbox.title} width={1200} height={800} className="w-full rounded-2xl object-cover" />
              <p className="text-white text-center mt-4 font-semibold">{lightbox.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
