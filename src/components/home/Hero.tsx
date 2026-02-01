"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/Hero/hero1.jpg",
  "/Hero/hero2.jpg",
  "/Hero/hero3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);


  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-lg">
          
         
          <Image
            src={slides[current]}
            alt="Medical products banner"
            fill
            className="object-cover transition-opacity duration-700"
            priority
          />

        
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

     
          <div className="absolute inset-0 flex items-center">
            <div className="pl-12 max-w-xl">
              <p className="text-teal-600 font-semibold mb-3 uppercase tracking-wide text-sm">
                Trusted Healthcare Store
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Get 20% Discount <br />
                <span className="text-teal-600">On N95 Masks</span>
              </h1>

              <p className="text-gray-600 mt-4">
                Certified medical products, fast delivery, and trusted sellers —
                because your health matters.
              </p>

              <button className="mt-6 bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-teal-700 transition">
                Shop Now
              </button>
            </div>
          </div>

         
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronRight size={22} />
          </button>

         
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition ${
                  i === current ? "bg-teal-600 scale-110" : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
