"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getProducts } from "@/lib/api-client";

const ShopPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="w-full bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
      
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Shop Medicines
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide range of trusted medical products and healthcare
            essentials.
          </p>
        </div>

 
        {loading && (
          <p className="text-center text-gray-500">
            Loading products...
          </p>
        )}

    
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
            
                <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                  <Image
                    src={
                      product.image?.startsWith("http")
                        ? product.image
                        : `${process.env.NEXT_PUBLIC_API_URL}/${product.image}`
                    }
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>

          
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <p className="text-green-600 font-bold text-lg mb-4">
                    ₹{product.price}
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
            ))}
          </div>
        )}

      
        {!loading && products.length === 0 && (
          <p className="text-center text-gray-500 mt-20">
            No products available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default ShopPage;
