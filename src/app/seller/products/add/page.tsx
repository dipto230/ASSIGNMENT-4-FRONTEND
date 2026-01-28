"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { addMedicine } from "@/lib/api-client";
import SellerGuard from "@/components/SellerGuard";

export default function AddMedicinePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    description: "",
    manufacturer: "",
    price: "",
    stock: "",
    categoryId: "",
    image: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addMedicine({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      });
      alert("Medicine added! Waiting for admin approval.");
      router.push("/seller/products");
    } catch (err) {
      console.error(err);
      alert("Error adding medicine");
    }
  };

  return (
    <SellerGuard>
    <div className=" bg-white">
 
      <div className="max-w-2xl mx-auto  p-8 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Medicine</h2>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            placeholder="Name"
            required
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Manufacturer"
            required
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={e => setForm({ ...form, manufacturer: e.target.value })}
          />

          <input
            placeholder="Price"
            type="number"
            required
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={e => setForm({ ...form, price: e.target.value })}
          />

          <input
            placeholder="Stock"
            type="number"
            required
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={e => setForm({ ...form, stock: e.target.value })}
          />

          <input
            placeholder="Category ID"
            required
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={e => setForm({ ...form, categoryId: e.target.value })}
          />

          <input
            placeholder="Image URL"
            required
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={e => setForm({ ...form, image: e.target.value })}
          />

          <textarea
            placeholder="Description"
            required
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            onChange={e => setForm({ ...form, description: e.target.value })}
          />

          <button
            type="submit"
            className="bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
          >
            Add Medicine
          </button>
        </form>
      </div>
      </div>
      </SellerGuard>
  );
}
