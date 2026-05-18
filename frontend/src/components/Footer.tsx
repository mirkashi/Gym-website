"use client";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import toast from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="font-bebas text-3xl tracking-wider">
              ELITE<span className="text-primary">FIT</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Transform your body and mind. Premium gym experience with expert trainers,
              state-of-the-art equipment, and a community that drives results.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaFacebook, href: "#", label: "Facebook" },
                { icon: FaTwitter, href: "#", label: "Twitter" },
                { icon: FaYoutube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/membership", label: "Membership" },
                { href: "/trainers", label: "Trainers" },
                { href: "/classes", label: "Classes" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                "Personal Training",
                "Group Classes",
                "Nutrition Coaching",
                "Online Programs",
                "Body Assessment",
                "Yoga & Meditation",
              ].map((s) => (
                <li key={s} className="hover:text-primary cursor-pointer transition-colors">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>123 Fitness Ave, Downtown, City 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <span>info@elitefitgym.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-primary shrink-0" />
                <span>Mon–Fri: 5am–11pm | Weekends: 6am–10pm</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Newsletter</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-dark border border-dark-border rounded px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white text-sm px-3 py-2 rounded transition-colors"
                >
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-dark-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} EliteFit Gym. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
