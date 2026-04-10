"use client";

export default function BrandLogos() {
  const brands = [
    "/brand/fashion-live.jpg",
    "/brand/handcrafted.jpg",
    "/brand/mestonix.jpg",
    "/brand/sunshine.jpg",
  ];

  return (
    <section className="bg-white py-14 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔥 Heading (optional) */}
        <h2 className="text-center text-lg font-semibold text-gray-600 mb-8">
          Trusted by top brands
        </h2>

        {/* 🎬 SCROLL WRAPPER */}
        <div className="relative">
          
          <div className="flex gap-12 animate-scroll hover:[animation-play-state:paused]">
            
            {/* 🔁 Double for infinite effect */}
            {[...brands, ...brands].map((logo, i) => (
              <div
                key={i}
                className="flex justify-center items-center min-w-[120px] grayscale hover:grayscale-0 transition duration-300"
              >
                <img
                  src={logo}
                  alt="brand logo"
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}