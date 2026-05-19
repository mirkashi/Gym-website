"use client";
import { motion } from "framer-motion";
import { Users, Dumbbell, CreditCard, TrendingUp, Calendar, Settings } from "lucide-react";

const stats = [
  { icon: Users, label: "Total Members", value: "524", change: "+12 this month", color: "text-blue-400" },
  { icon: CreditCard, label: "Monthly Revenue", value: "$28,450", change: "+8.2% vs last month", color: "text-green-400" },
  { icon: Calendar, label: "Classes This Week", value: "34", change: "92% attendance rate", color: "text-yellow-400" },
  { icon: TrendingUp, label: "New Sign-Ups", value: "38", change: "This month", color: "text-primary" },
];

const recentMembers = [
  { name: "Alice Johnson", plan: "Premium", joined: "Dec 15, 2024", status: "Active" },
  { name: "Bob Williams", plan: "Standard", joined: "Dec 14, 2024", status: "Active" },
  { name: "Carol Smith", plan: "Basic", joined: "Dec 13, 2024", status: "Pending" },
  { name: "David Brown", plan: "Standard", joined: "Dec 12, 2024", status: "Active" },
  { name: "Eve Davis", plan: "Premium", joined: "Dec 11, 2024", status: "Active" },
];

const planColors: Record<string, string> = {
  Basic: "text-gray-400 bg-gray-400/10",
  Standard: "text-blue-400 bg-blue-400/10",
  Premium: "text-yellow-400 bg-yellow-400/10",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-dark pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-8">
          <div>
            <span className="text-primary text-sm font-montserrat">Admin Panel</span>
            <h1 className="font-bebas text-4xl sm:text-5xl text-white">ELITEFIT <span className="text-primary">ADMIN</span></h1>
          </div>
          <button className="flex items-center gap-2 border border-dark-border text-gray-400 hover:text-white hover:border-gray-400 font-montserrat text-sm px-4 py-2 rounded-lg transition-all">
            <Settings size={16} /> Settings
          </button>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(({ icon: Icon, label, value, change, color }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass border border-dark-border rounded-xl p-5">
              <Icon size={22} className={`${color} mb-3`} />
              <p className="font-bebas text-3xl text-white">{value}</p>
              <p className="text-gray-400 text-xs mt-0.5">{label}</p>
              <p className={`text-xs mt-1 ${color}`}>{change}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Members */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="lg:col-span-2 glass border border-dark-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bebas text-2xl text-white">RECENT <span className="text-primary">MEMBERS</span></h2>
              <button className="text-primary text-xs font-montserrat hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-dark-border">
                    <th className="text-left py-2 font-montserrat uppercase tracking-wider">Member</th>
                    <th className="text-left py-2 font-montserrat uppercase tracking-wider">Plan</th>
                    <th className="text-left py-2 font-montserrat uppercase tracking-wider">Joined</th>
                    <th className="text-left py-2 font-montserrat uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-border">
                  {recentMembers.map((m) => (
                    <tr key={m.name} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 text-white font-medium">{m.name}</td>
                      <td className="py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${planColors[m.plan]}`}>{m.plan}</span>
                      </td>
                      <td className="py-3 text-gray-400">{m.joined}</td>
                      <td className="py-3">
                        <span className={`text-xs ${m.status === "Active" ? "text-green-400" : "text-yellow-400"}`}>{m.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="glass border border-dark-border rounded-2xl p-6">
            <h2 className="font-bebas text-2xl text-white mb-5">QUICK <span className="text-primary">ACTIONS</span></h2>
            <div className="space-y-3">
              {[
                { icon: Users, label: "Manage Members", desc: "View, edit, suspend members" },
                { icon: Dumbbell, label: "Manage Trainers", desc: "Add or update trainer profiles" },
                { icon: Calendar, label: "Class Schedule", desc: "Update weekly class timetable" },
                { icon: CreditCard, label: "Billing & Payments", desc: "View revenue and invoices" },
              ].map(({ icon: Icon, label, desc }) => (
                <button key={label} className="w-full text-left flex items-start gap-3 p-3 bg-dark rounded-lg border border-dark-border hover:border-primary/50 transition-colors group">
                  <Icon size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-primary transition-colors">{label}</p>
                    <p className="text-gray-500 text-xs">{desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
