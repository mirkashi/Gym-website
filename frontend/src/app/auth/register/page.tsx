"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Eye, EyeOff, CheckCircle } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Include at least one uppercase letter").regex(/[0-9]/, "Include at least one number"),
  confirmPassword: z.string(),
  plan: z.enum(["basic", "standard", "premium"]),
  terms: z.boolean().refine((v) => v, "You must accept the terms"),
}).refine((d) => d.password === d.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] });

type RegisterForm = z.infer<typeof schema>;

const benefits = ["First week FREE, no credit card required", "Cancel anytime, no lock-in contracts", "Access to all facilities immediately", "Free fitness assessment on day 1"];

export default function RegisterPage() {
  const [showPw, setShowPw] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterForm>({ resolver: zodResolver(schema), defaultValues: { plan: "standard" } });

  const onSubmit = async (data: RegisterForm) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log(data);
    toast.success("Welcome to EliteFit! Check your email to verify your account.");
  };

  return (
    <div className="min-h-screen bg-dark py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Benefits */}
          <div className="flex flex-col justify-center">
            <Link href="/" className="font-bebas text-3xl text-white mb-8">
              ELITE<span className="text-primary">FIT</span>
            </Link>
            <h1 className="font-bebas text-5xl text-white leading-none">START YOUR <br /><span className="text-primary">JOURNEY</span></h1>
            <p className="text-gray-400 mt-4 mb-8">Join over 500 members transforming their bodies and lives at EliteFit Gym.</p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="glass border border-dark-border rounded-2xl p-8 space-y-4">
            <h2 className="font-bebas text-2xl text-white">CREATE <span className="text-primary">ACCOUNT</span></h2>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <input {...register("firstName")} placeholder="First Name *" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors" />
                {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <input {...register("lastName")} placeholder="Last Name *" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors" />
                {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>}
              </div>
            </div>

            <div>
              <input {...register("email")} type="email" placeholder="Email Address *" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors" />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <input {...register("phone")} placeholder="Phone Number *" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors" />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <select {...register("plan")} className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary transition-colors">
                <option value="basic">Basic Plan — $29/month</option>
                <option value="standard">Standard Plan — $49/month (Popular)</option>
                <option value="premium">Premium Plan — $79/month</option>
              </select>
            </div>

            <div className="relative">
              <input {...register("password")} type={showPw ? "text" : "password"} placeholder="Password *" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors pr-10" />
              <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <div>
              <input {...register("confirmPassword")} type="password" placeholder="Confirm Password *" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors" />
              {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>}
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input {...register("terms")} type="checkbox" className="mt-0.5 rounded border-dark-border" />
              <span className="text-gray-400 text-xs">
                I agree to the{" "}
                <Link href="#" className="text-primary hover:underline">Terms of Service</Link>{" "}
                and{" "}
                <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>
              </span>
            </label>
            {errors.terms && <p className="text-red-400 text-xs">{errors.terms.message}</p>}

            <button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary-dark disabled:opacity-70 text-white font-montserrat font-semibold py-3 rounded-lg transition-colors">
              {isSubmitting ? "Creating Account..." : "Start Free Trial"}
            </button>

            <p className="text-center text-gray-500 text-xs">Already a member? <Link href="/auth/login" className="text-primary hover:underline">Log in</Link></p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
