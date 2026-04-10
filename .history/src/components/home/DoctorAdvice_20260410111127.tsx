"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    specialty: "General Physician",
    tip: "Stay hydrated and drink at least 7–8 glasses of water daily 💧",
    image: "https://i.ibb.co/xKSv3Y6G/Gemini-Generated-Image-lpd8pelpd8pelpd8.png",
  },
  {
    name: "Dr. Rahul Mehta",
    specialty: "Cardiologist",
    tip: "Regular walking for 30 minutes improves heart health ❤️",
    image: "https://i.ibb.co/4nBBv9Mx/Gemini-Generated-Image-z6mrifz6mrifz6mr.png",
  },
  {
    name: "Dr. Anika Das",
    specialty: "Nutritionist",
    tip: "Include fruits & vegetables in your daily meals 🥗",
    image: "https://i.pravatar.cc/150?img=32",
  },
];

export default function DoctorAdvice() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".card"),
      { y: 50, opacity: 0 },
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
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-green-50"
    >
      {/* 🔥 heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Doctor’s Advice 👨‍⚕️
        </h2>
        <p className="text-gray-600 mt-3">
          Simple health tips from our trusted medical experts
        </p>
      </div>

      {/* 💊 cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="card bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
          >
            {/* 👤 image */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{doc.name}</h3>
                <p className="text-sm text-green-600">{doc.specialty}</p>
              </div>
            </div>

            {/* 💡 tip */}
            <p className="text-gray-600 text-sm leading-relaxed">
              “{doc.tip}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}