export default function BrandLogos() {
  const brands = [
    "/brand/fashion-live.jpg",
    "/brand/handcrafted.jpg",
    "/brand/mestonix.jpg",
    "/brand/sunshine.jpg",
   
  ];

  return (
    <section className="bg-white py-14 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center opacity-60 hover:opacity-100 transition duration-300">
          {brands.map((logo, i) => (
            <div key={i} className="flex justify-center grayscale hover:grayscale-0 transition">
              <img
                src={logo}
                alt="brand logo"
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
