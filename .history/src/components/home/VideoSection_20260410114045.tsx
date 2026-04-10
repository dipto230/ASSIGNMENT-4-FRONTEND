"use client";

import { useState } from "react";

const videos = [
  {
    id: "yto01YzfA14",
    title: "Healthy Lifestyle Tips",
  },
  {
    id: "mUzq_h1GCXE",
    title: "Heart Health Guide",
  },
  {
    id: "4Rd9ZeAYZgc",
    title: "Nutrition & Diet",
  },
  {
    id: "6IJKyN8wFKU",
    title: "Daily Fitness Routine",
  },
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-green-50 to-white">
      
      {/* 🔥 Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Health Videos 🎥
        </h2>
        <p className="text-gray-600 mt-3">
          Watch expert tips to improve your health
        </p>
      </div>

      {/* 🎬 Video Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setActiveVideo(video.id)}
            className="relative cursor-pointer group"
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="rounded-2xl shadow-lg w-full"
            />

            {/* ▶ Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 rounded-full p-4 group-hover:scale-110 transition">
                ▶
              </div>
            </div>

            {/* 🎬 Title */}
            <h3 className="mt-3 text-lg font-semibold text-gray-800">
              {video.title}
            </h3>
          </div>
        ))}
      </div>

      {/* 🎥 Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          
          <div className="relative w-full max-w-4xl">
            
            {/* ❌ Close */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            {/* 📺 Video */}
            <iframe
              className="w-full h-[450px] rounded-xl"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
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