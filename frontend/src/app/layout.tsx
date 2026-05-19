import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "EliteFit Gym | Premium Fitness Experience",
  description:
    "Transform your body and mind at EliteFit Gym. Join 500+ members, expert trainers, and state-of-the-art facilities. Book your free trial today!",
  keywords:
    "gym, fitness, membership, personal trainer, workout, health, EliteFit",
  openGraph: {
    title: "EliteFit Gym | Premium Fitness Experience",
    description: "Transform your body and mind at EliteFit Gym.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins bg-dark text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#111111",
              color: "#fff",
              border: "1px solid #222222",
            },
          }}
        />
      </body>
    </html>
  );
}
