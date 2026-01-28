"use client";

import { useState, useEffect } from "react";
import { placeOrder, getCart } from "@/lib/api-client";
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

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load cart items for preview
  const loadCart = () => getCart().then(setCartItems);

  useEffect(() => {
    loadCart();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

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
      router.push("/orders");
    } catch (err) {
      console.error(err);
      setError("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  const total = cartItems.reduce(
    (sum, i) => sum + Number(i.medicine.price) * i.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-10 flex flex-col md:flex-row gap-10">
        {/* Left: Form */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-10 text-gray-900">
            Checkout
          </h1>

          {error && <p className="mb-5 text-red-500 font-semibold">{error}</p>}

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

        {/* Right: Cart Preview */}
        <div className="w-full md:w-1/3 bg-gray-50 rounded-lg p-5 shadow-sm">
          <h2 className="text-2xl font-bold mb-5 text-gray-900">
            Order Summary
          </h2>

          {cartItems.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
          )}

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-b border-gray-200 pb-3"
            >
              <div>
                <p className="font-semibold text-gray-800">{item.medicine.name}</p>
                <p className="text-gray-500 text-sm">
                  Qty: {item.quantity}
                </p>
              </div>
              <p className="font-semibold text-gray-900">
                ₹{Number(item.medicine.price) * item.quantity}
              </p>
            </div>
          ))}

          {cartItems.length > 0 && (
            <div className="mt-5 border-t border-gray-300 pt-3">
              <p className="text-lg font-bold text-gray-900">
                Total: ₹{total.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
