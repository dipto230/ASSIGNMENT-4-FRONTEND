"use client";

import { useState } from "react";
import { placeOrder } from "@/lib/api-client";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    for (const key in form) {
      if ((form as any)[key].trim() === "") {
        setError(`Please fill ${key}`);
        return;
      }
    }

    setLoading(true);
    try {
      await placeOrder(form);
      alert("Order placed successfully 🎉");
      router.push("/orders"); // Redirect to orders page
    } catch (err) {
      console.error(err);
      setError("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm p-10">
        <h1 className="text-3xl font-bold mb-10 text-gray-900">
          Checkout
        </h1>

        {error && (
          <p className="mb-5 text-red-500 font-semibold">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">City</label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Postal Code</label>
            <input
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Country</label>
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold mt-4"
          >
            {loading ? "Placing Order..." : "Place Order (COD)"}
          </button>
        </form>
      </div>
    </div>
  );
}
