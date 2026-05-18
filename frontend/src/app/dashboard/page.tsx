"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dumbbell, Calendar, CreditCard, TrendingUp, Clock, Award } from "lucide-react";

const stats = [
  { icon: Dumbbell, label: "Workouts This Month", value: "18", change: "+3 vs last month" },
  { icon: Calendar, label: "Classes Booked", value: "6", change: "2 upcoming" },
  { icon: Clock, label: "Total Hours Trained", value: "47h", change: "This month" },
  { icon: TrendingUp, label: "Current Streak", value: "9 days", change: "Personal best!" },
];

const recentWorkouts = [
  { name: "HIIT Blast", date: "Today, 7:00 AM", duration: "45 min", trainer: "Jake Rivera" },
  { name: "Power Lifting", date: "Yesterday, 6:30 PM", duration: "75 min", trainer: "Marcus Steel" },
  { name: "Yoga Flow", date: "Dec 13, 9:00 AM", duration: "60 min", trainer: "Aria Chen" },
  { name: "CrossFit WOD", date: "Dec 11, 10:00 AM", duration: "60 min", trainer: "Sofia Reyes" },
];

const upcomingClasses = [
  { name: "Boxing Fundamentals", date: "Tomorrow, 5:00 PM", spots: 4 },
  { name: "Pilates Core", date: "Dec 17, 8:00 PM", spots: 6 },
  { name: "Spin Class", date: "Dec 18, 7:00 AM", spots: 2 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-dark pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <span className="text-primary text-sm font-montserrat">Member Dashboard</span>
          <h1 className="font-bebas text-4xl sm:text-5xl text-white mt-1">
            WELCOME BACK, <span className="text-primary">JAMES</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">Standard Member · Member since Jan 2023</p>
        </motion.div>

        {/* Plan Banner */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-5 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-white/80 text-sm font-montserrat">Current Plan</p>
            <p className="font-bebas text-3xl text-white">STANDARD MEMBERSHIP</p>
            <p className="text-white/70 text-sm">Renews Jan 15, 2025 · $49/month</p>
          </div>
          <div className="flex gap-3">
            <Link href="/membership" className="bg-white/10 hover:bg-white/20 text-white font-montserrat text-sm px-5 py-2 rounded-lg transition-colors">
              Upgrade to Premium
            </Link>
            <button className="border border-white/30 hover:border-white text-white font-montserrat text-sm px-5 py-2 rounded-lg transition-colors flex items-center gap-2">
              <CreditCard size={14} /> Billing
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(({ icon: Icon, label, value, change }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass border border-dark-border rounded-xl p-4">
              <Icon size={20} className="text-primary mb-2" />
              <p className="font-bebas text-3xl text-white">{value}</p>
              <p className="text-gray-400 text-xs">{label}</p>
              <p className="text-green-400 text-xs mt-1">{change}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Workouts */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="glass border border-dark-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bebas text-2xl text-white">RECENT <span className="text-primary">WORKOUTS</span></h2>
              <Award size={20} className="text-primary" />
            </div>
            <div className="space-y-3">
              {recentWorkouts.map((w) => (
                <div key={w.name + w.date} className="flex items-center justify-between p-3 bg-dark rounded-lg border border-dark-border">
                  <div>
                    <p className="text-white text-sm font-semibold">{w.name}</p>
                    <p className="text-gray-500 text-xs">{w.trainer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-xs">{w.date}</p>
                    <p className="text-primary text-xs">{w.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Classes */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="glass border border-dark-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bebas text-2xl text-white">UPCOMING <span className="text-primary">CLASSES</span></h2>
              <Link href="/classes" className="text-primary text-xs font-montserrat hover:underline">Browse All →</Link>
            </div>
            <div className="space-y-3">
              {upcomingClasses.map((c) => (
                <div key={c.name} className="p-3 bg-dark rounded-lg border border-dark-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white text-sm font-semibold">{c.name}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{c.date}</p>
                    </div>
                    <span className="text-xs text-gray-400">{c.spots} spots left</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button className="text-xs bg-primary/10 border border-primary/30 text-primary px-3 py-1 rounded hover:bg-primary hover:text-white transition-colors">Book</button>
                    <button className="text-xs border border-dark-border text-gray-400 px-3 py-1 rounded hover:border-gray-400 transition-colors">Cancel</button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
