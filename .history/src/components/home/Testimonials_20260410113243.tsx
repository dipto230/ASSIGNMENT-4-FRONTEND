"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".card"),
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
      className="py-20 px-6 md:px-16 bg-white"
    >
      {/* 🔥 Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Patients Say 💬
        </h2>
        <p className="text-gray-600 mt-3">
          Real experiences from people who followed expert advice
        </p>
      </div>

      {/* 💬 Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="card bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            {/* 🧑 Avatar */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-sm text-green-600">
                  {t.role}
                </p>
              </div>
            </div>

            {/* 💬 Message */}
            <p className="text-gray-600 text-sm leading-relaxed">
              “{t.message}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}