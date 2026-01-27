"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../../lib/api-client";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();

        // ✅ Only approved & active medicines
        const activeProducts = data.filter(
          (p: any) => p.isApproved && p.isActive
        );

        setProducts(activeProducts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <section className="py-16">
        <p className="text-center text-gray-500">Loading products...</p>
      </section>
    );

  const featured = products.slice(0, 4);

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featured.map((product) => {
            const imageSrc =
              product.image && product.image.startsWith("http")
                ? product.image
                : product.image
                ? `${process.env.NEXT_PUBLIC_API_URL}/${product.image}`
                : "/placeholder-medicine.png";

            const avgRating =
              product.reviews?.length > 0
                ? (
                    product.reviews.reduce(
                      (a: number, r: any) => a + r.rating,
                      0
                    ) / product.reviews.length
                  ).toFixed(1)
                : null;

            return (
              <Link href={`/shop/${product.id}`} key={product.id}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer">
                
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <Image
                      src={imageSrc}
                      alt={product.name}
                      fill
                      unoptimized   
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {product.description}
                    </p>

                    {avgRating && (
                      <p className="text-yellow-500 text-sm mb-1">
                        ⭐ {avgRating}
                      </p>
                    )}

                    <p
                      className={`text-sm mb-2 ${
                        product.stock > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </p>

                    <p className="text-green-600 font-bold text-lg mb-4">
                      ₹{Number(product.price).toFixed(2)}
                    </p>

                    <div className="mt-auto flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Add to Cart
                      </button>
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop">
            <button className="px-10 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition">
              Show All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
