"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // <-- import router
import { getProducts, addToCart } from "@/lib/api-client"; // <-- import addToCart
import { useSession } from "@/hooks/useSession"; // <-- import useSession

const ShopPage = () => {
  const router = useRouter();
  const { user } = useSession(); // <-- get current user
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        const activeProducts = data.filter(
          (p: any) => p.isApproved && p.isActive
        );
        setProducts(activeProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add to cart handler
  const handleAddToCart = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (!user) {
      alert("Please login first to add products to cart");
      return;
    }

    try {
      await addToCart(id);
      alert("Added to cart 🛒");
    } catch (err) {
      console.error(err);
      alert("Failed to add to cart");
    }
  };

  // Buy now handler
  const handleBuyNow = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (!user) {
      alert("Please login first to buy products");
      return;
    }

    try {
      await addToCart(id); // Optionally add to cart first
      router.push("/checkout"); // Redirect to checkout
    } catch (err) {
      console.error(err);
      alert("Failed to proceed to checkout");
    }
  };

  return (
    <section className="w-full bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Shop Medicines</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide range of trusted medical products and healthcare essentials.
          </p>
        </div>

        {loading && <p className="text-center text-gray-500">Loading products...</p>}

        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => {
              const imageSrc =
                product.image && product.image.startsWith("http")
                  ? product.image
                  : product.image
                  ? `${process.env.NEXT_PUBLIC_API_URL}/${product.image}`
                  : "/placeholder-medicine.png";

              const avgRating =
                product.reviews?.length > 0
                  ? (
                      product.reviews.reduce((a: number, r: any) => a + r.rating, 0) /
                      product.reviews.length
                    ).toFixed(1)
                  : null;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <Link href={`/shop/${product.id}`} className="flex-1">
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
                        <p className="text-yellow-500 text-sm mb-1">⭐ {avgRating}</p>
                      )}

                      <p
                        className={`text-sm mb-2 ${
                          product.stock > 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                      </p>

                      <p className="text-green-600 font-bold text-lg mb-4">
                        ₹{Number(product.price).toFixed(2)}
                      </p>
                    </div>
                  </Link>

                  <div className="p-4 flex gap-2">
                    <button
                      onClick={(e) => handleAddToCart(e, product.id)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={(e) => handleBuyNow(e, product.id)}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!loading && products.length === 0 && (
          <p className="text-center text-gray-500 mt-20">No products available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default ShopPage;
