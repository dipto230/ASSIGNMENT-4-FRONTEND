"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Newsletter() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll(".fade-up"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* 🌿 soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-white" />

      {/* ✨ glass card */}
      <div className="relative max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-10 md:p-16 text-center">
        
      
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-30 animate-pulse" />

       
        <h2 className="fade-up text-3xl md:text-4xl font-bold text-gray-800">
          Stay Healthy, Stay Updated 💚
        </h2>

        <p className="fade-up mt-4 text-gray-600 max-w-xl mx-auto">
          Subscribe to get exclusive offers, medical tips, and latest updates
          directly to your inbox.
        </p>

     
        <div className="fade-up mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-80 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />

          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-md hover:scale-105 transition duration-300">
            Subscribe 🚀
          </button>
        </div>

      
        <p className="fade-up mt-4 text-sm text-gray-500">
          Get 10% discount on your first order 🎉
        </p>
      </div>
    </section>
  );
}