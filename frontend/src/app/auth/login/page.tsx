"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type LoginForm = z.infer<typeof schema>;

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: LoginForm) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    toast.success("Welcome back! Redirecting to dashboard...");
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-8">
            <Link href="/" className="font-bebas text-3xl text-white">
              ELITE<span className="text-primary">FIT</span>
            </Link>
            <h1 className="font-bebas text-4xl text-white mt-4">WELCOME <span className="text-primary">BACK</span></h1>
            <p className="text-gray-400 text-sm mt-2">Log in to access your member dashboard</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="glass border border-dark-border rounded-2xl p-8 space-y-5">
            <div>
              <label className="text-gray-400 text-xs font-montserrat uppercase tracking-wider">Email</label>
              <input {...register("email")} type="email" placeholder="you@example.com" className="mt-1.5 w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors" />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-gray-400 text-xs font-montserrat uppercase tracking-wider">Password</label>
              <div className="relative mt-1.5">
                <input {...register("password")} type={showPw ? "text" : "password"} placeholder="••••••••" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors pr-10" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-gray-400 text-sm cursor-pointer">
                <input type="checkbox" className="rounded border-dark-border" />
                Remember me
              </label>
              <Link href="#" className="text-primary text-sm hover:underline">Forgot password?</Link>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary-dark disabled:opacity-70 text-white font-montserrat font-semibold py-3 rounded-lg transition-colors">
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-primary hover:underline">Join EliteFit</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
