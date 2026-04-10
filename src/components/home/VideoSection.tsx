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

      {/* 🎬 VERTICAL SCROLL BOX */}
      <div className="max-w-4xl mx-auto h-[400px] overflow-y-auto pr-2 scrollbar-custom">
        <div className="space-y-6">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video.id)}
              className="flex gap-4 items-center cursor-pointer group hover:bg-gray-100 p-3 rounded-xl transition"
            >
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-40 h-24 object-cover rounded-lg"
              />

              {/* Content */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {video.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Click to watch video ▶
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🎥 MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-3xl">
            
            {/* ❌ Close */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            {/* 📺 Video */}
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