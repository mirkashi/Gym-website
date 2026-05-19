"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const schedule = {
  Monday: [
    { time: "06:00", name: "Morning Yoga", trainer: "Aria Chen", duration: "60 min", spots: 12 },
    { time: "09:00", name: "CrossFit WOD", trainer: "Sofia Reyes", duration: "60 min", spots: 15 },
    { time: "12:00", name: "Power Lifting", trainer: "Marcus Steel", duration: "75 min", spots: 8 },
    { time: "18:00", name: "HIIT Blast", trainer: "Jake Rivera", duration: "45 min", spots: 20 },
    { time: "20:00", name: "Pilates Core", trainer: "Lena Park", duration: "60 min", spots: 10 },
  ],
  Tuesday: [
    { time: "07:00", name: "Spin & Cycle", trainer: "Emma Williams", duration: "45 min", spots: 15 },
    { time: "10:00", name: "MMA Fitness", trainer: "Carlos Mendez", duration: "60 min", spots: 12 },
    { time: "13:00", name: "Stretch & Recovery", trainer: "Aria Chen", duration: "60 min", spots: 15 },
    { time: "17:00", name: "Boxing Fundamentals", trainer: "Jake Rivera", duration: "60 min", spots: 10 },
    { time: "19:00", name: "Strength Circuit", trainer: "Marcus Steel", duration: "60 min", spots: 12 },
  ],
  Wednesday: [
    { time: "06:00", name: "Early Bird HIIT", trainer: "Jake Rivera", duration: "45 min", spots: 20 },
    { time: "09:00", name: "Yoga Flow", trainer: "Aria Chen", duration: "75 min", spots: 15 },
    { time: "12:00", name: "CrossFit Open", trainer: "Sofia Reyes", duration: "60 min", spots: 15 },
    { time: "17:00", name: "Powerlifting Club", trainer: "Derek Johnson", duration: "90 min", spots: 8 },
    { time: "20:00", name: "Night Spin", trainer: "Emma Williams", duration: "45 min", spots: 15 },
  ],
  Thursday: [
    { time: "07:00", name: "Pilates Fusion", trainer: "Lena Park", duration: "60 min", spots: 10 },
    { time: "10:00", name: "Strength & Tone", trainer: "Marcus Steel", duration: "60 min", spots: 12 },
    { time: "12:00", name: "MMA Conditioning", trainer: "Carlos Mendez", duration: "60 min", spots: 12 },
    { time: "18:00", name: "Group Boxing", trainer: "Jake Rivera", duration: "60 min", spots: 15 },
    { time: "20:00", name: "Yoga Nidra", trainer: "Aria Chen", duration: "60 min", spots: 15 },
  ],
  Friday: [
    { time: "06:00", name: "Friday HIIT", trainer: "Sofia Reyes", duration: "45 min", spots: 20 },
    { time: "09:00", name: "Spin Class", trainer: "Emma Williams", duration: "45 min", spots: 15 },
    { time: "12:00", name: "Lunch Lift", trainer: "Derek Johnson", duration: "60 min", spots: 10 },
    { time: "17:00", name: "CrossFit Competition", trainer: "Sofia Reyes", duration: "75 min", spots: 15 },
    { time: "19:00", name: "Dance Cardio", trainer: "Lena Park", duration: "60 min", spots: 20 },
  ],
  Saturday: [
    { time: "08:00", name: "Weekend Warriors", trainer: "Marcus Steel", duration: "90 min", spots: 15 },
    { time: "10:00", name: "Community CrossFit", trainer: "Sofia Reyes", duration: "60 min", spots: 25 },
    { time: "12:00", name: "Yoga & Brunch", trainer: "Aria Chen", duration: "75 min", spots: 15 },
    { time: "15:00", name: "Boxing Sparring", trainer: "Jake Rivera", duration: "60 min", spots: 8 },
  ],
  Sunday: [
    { time: "09:00", name: "Sunday Flow Yoga", trainer: "Aria Chen", duration: "90 min", spots: 20 },
    { time: "11:00", name: "Recovery Pilates", trainer: "Lena Park", duration: "60 min", spots: 12 },
    { time: "14:00", name: "Open Gym Lift", trainer: "Derek Johnson", duration: "120 min", spots: 20 },
  ],
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

export default function ClassesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-dark">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-montserrat text-sm font-semibold tracking-widest uppercase">Schedule</span>
            <h1 className="font-bebas text-6xl sm:text-8xl text-white mt-2">CLASS <span className="text-primary">SCHEDULE</span></h1>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Over 30 classes per week led by our certified trainers. Find your perfect workout.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-7 gap-2 mb-2">
                {days.map((day) => (
                  <div key={day} className="text-center py-2 text-primary font-montserrat text-xs font-semibold uppercase tracking-wider">{day.slice(0, 3)}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {days.map((day, di) => (
                  <motion.div key={day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: di * 0.05 }} className="space-y-2">
                    {schedule[day].map((cls, ci) => (
                      <div key={ci} className="glass border border-dark-border rounded-lg p-2 hover:border-primary/50 transition-colors cursor-pointer">
                        <p className="text-primary text-xs font-montserrat font-semibold">{cls.time}</p>
                        <p className="text-white text-xs font-semibold mt-0.5 leading-tight">{cls.name}</p>
                        <p className="text-gray-500 text-xs">{cls.trainer}</p>
                        <p className="text-gray-600 text-xs">{cls.duration} · {cls.spots} spots</p>
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-card">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle tag="Book" title="RESERVE YOUR" highlight="SPOT" subtitle="All classes are included in Standard and Premium memberships. Basic members get 2 classes/month." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[["🏋️", "Strength Training", "Build muscle and power"], ["🧘", "Mind & Body", "Yoga and Pilates classes"], ["🥊", "Combat Fitness", "Boxing and MMA conditioning"]].map(([icon, title, desc]) => (
              <div key={String(title)} className="glass border border-dark-border rounded-xl p-5 text-center hover:border-primary/50 transition-colors">
                <span className="text-3xl">{icon}</span>
                <h3 className="font-bebas text-xl text-white mt-2">{String(title)}</h3>
                <p className="text-gray-400 text-xs mt-1">{String(desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
