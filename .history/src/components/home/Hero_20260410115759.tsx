"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as THREE from "three";

const slides = [
  "/Hero/hero1.jpg",
  "/Hero/hero2.jpg",
  "/Hero/hero3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const mountRef = useRef(null);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🔥 THREE.JS BACKGROUND ANIMATION
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 500,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, 500);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
    });

    const spheres = [];

    for (let i = 0; i < 30; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5
      );
      scene.add(mesh);
      spheres.push(mesh);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      spheres.forEach((sphere, i) => {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        sphere.position.y += Math.sin(Date.now() * 0.001 + i) * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="bg-gray-50 py-12 relative overflow-hidden">
      {/* THREE BG */}
      <div className="absolute inset-0 opacity-20" ref={mountRef} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl group">

          {/* IMAGE */}
          <Image
            src={slides[current]}
            alt="Medical products banner"
            fill
            className="object-cover transition-all duration-1000 scale-105 group-hover:scale-110"
            priority
          />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center">
            <div className="pl-12 max-w-xl animate-fadeInUp">
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

              <button className="mt-6 bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>

          {/* ARROWS */}
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

          {/* DOTS */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-teal-600 scale-125"
                    : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATION */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
