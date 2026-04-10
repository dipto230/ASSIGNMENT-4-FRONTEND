"use client";

import { useState } from "react";

export default function VideoSection() {
  const [open, setOpen] = useState(false);

  const videoId = "dQw4w9WgXcQ"; // 👉 ekhane tomar YouTube video ID dao

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-green-50 to-white">
      
      {/* 🔥 Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How We Help Patients 🎥
        </h2>
        <p className="text-gray-600 mt-3">
          Watch how our expert doctors improve lives
        </p>
      </div>

      {/* 🎬 Thumbnail */}
      <div className="flex justify-center">
        <div
          onClick={() => setOpen(true)}
          className="relative cursor-pointer group"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="video thumbnail"
            className="rounded-2xl shadow-lg w-full max-w-3xl"
          />

          {/* ▶ Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-md rounded-full p-5 group-hover:scale-110 transition">
              ▶
            </div>
          </div>
        </div>
      </div>

      {/* 🎥 Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          
          <div className="relative w-full max-w-3xl">
            
            {/* ❌ Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            {/* 📺 Video */}
            <iframe
              className="w-full h-[400px] rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}