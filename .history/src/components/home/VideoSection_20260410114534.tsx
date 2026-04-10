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
    <section className="py-16 px-4 md:px-10 bg-gradient-to-b from-green-50 to-white">
      
      {/* 🔥 Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Health Videos 🎥
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Watch expert tips to improve your health
        </p>
      </div>

      {/* 🎬 HORIZONTAL SCROLL */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setActiveVideo(video.id)}
            className="min-w-[260px] md:min-w-[300px] flex-shrink-0 cursor-pointer group hover:scale-105 transition duration-300"
          >
            {/* Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="rounded-xl shadow-md w-full h-44 object-cover"
            />

            {/* ▶ Play Button */}
            <div className="relative -mt-32 flex justify-center">
              <div className="bg-black/60 text-white rounded-full p-3 text-sm group-hover:scale-110 transition">
                ▶
              </div>
            </div>

            {/* 🎬 Title */}
            <h3 className="mt-2 text-sm font-medium text-gray-700 text-center">
              {video.title}
            </h3>
          </div>
        ))}
      </div>

      {/* 🎥 MODAL VIDEO PLAYER */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          
          <div className="relative w-full max-w-3xl">
            
            {/* ❌ Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            {/* 📺 YouTube Video */}
            <iframe
              className="w-full h-[220px] sm:h-[400px] md:h-[450px] rounded-xl"
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