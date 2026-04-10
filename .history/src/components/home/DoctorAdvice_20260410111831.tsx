"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { doctors } from "@/data/doctors";

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
      {/* 🔥 Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Doctor’s Advice 👨‍⚕️
        </h2>
        <p className="text-gray-600 mt-3">
          Click a doctor to read full health advice
        </p>
      </div>

      {/* 💊 Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {doctors.map((doc) => (
          <Link key={doc.slug} href={`/doctors/${doc.slug}`}>
            <div className="card cursor-pointer bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
              
              {/* 👤 Doctor Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-green-600">
                    {doc.specialty}
                  </p>
                </div>
              </div>

              {/* 💡 Short Tip */}
              <p className="text-gray-600 text-sm line-clamp-2">
                {doc.tip}
              </p>

              {/* 👉 CTA */}
              <p className="mt-4 text-green-600 text-sm font-medium">
                Read Full Advice →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}