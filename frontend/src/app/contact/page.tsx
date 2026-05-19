"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
type ContactForm = z.infer<typeof schema>;

// TODO: Replace with actual business contact information
const info = [
  { icon: MapPin, label: "Location", value: "123 Fitness Avenue, New York, NY 10001" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Email", value: "hello@elitefit.com" },
  { icon: Clock, label: "Hours", value: "Mon-Sun: Open 24/7" },
];

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    toast.success("Message sent! We will get back to you within 24 hours.");
    reset();
  };

  return (
    <>
      <section className="relative pt-32 pb-16 bg-dark">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-montserrat text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
            <h1 className="font-bebas text-6xl sm:text-8xl text-white mt-2">CONTACT <span className="text-primary">US</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-bebas text-4xl text-white mb-8">GET IN <span className="text-primary">TOUCH</span></h2>
              <div className="space-y-6">
                {info.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-montserrat uppercase tracking-wider">{label}</p>
                      <p className="text-white mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 h-64 rounded-2xl overflow-hidden border border-dark-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976246867906!3d40.69766374859695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EliteFit Gym Location"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit(onSubmit)} className="glass border border-dark-border rounded-2xl p-8 space-y-5">
                <h2 className="font-bebas text-3xl text-white">SEND A <span className="text-primary">MESSAGE</span></h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input {...register("name")} placeholder="Your Name *" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register("email")} placeholder="Email Address *" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <input {...register("phone")} placeholder="Phone Number (Optional)" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>

                <div>
                  <input {...register("subject")} placeholder="Subject *" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors" />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <textarea {...register("message")} placeholder="Your Message *" rows={5} className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary-dark disabled:opacity-70 text-white font-montserrat font-semibold py-3 rounded-lg transition-colors">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
