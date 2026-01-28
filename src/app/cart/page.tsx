"use client";

import { useEffect, useState } from "react";
import { getCart, removeCartItem, updateCartItem } from "@/lib/api-client";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);
  const router = useRouter();

  const loadCart = () => getCart().then(setItems);

  useEffect(() => {
    loadCart();
  }, []);

  const total = items.reduce(
    (sum, i) => sum + Number(i.medicine.price) * i.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-10">
        <h1 className="text-3xl font-bold mb-10 text-gray-900">
          Your Cart
        </h1>

        {items.length === 0 && (
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        )}

        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-start border-b border-gray-200 py-6"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {item.medicine.name}
              </h2>
              <p className="text-gray-500 mt-1">₹{item.medicine.price}</p>

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() =>
                    updateCartItem(item.id, item.quantity - 1).then(loadCart)
                  }
                  className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 transition"
                >
                  −
                </button>

                <span className="min-w-[20px] text-center text-gray-800">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateCartItem(item.id, item.quantity + 1).then(loadCart)
                  }
                  className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">
                ₹{Number(item.medicine.price) * item.quantity}
              </p>

              <button
                onClick={() => removeCartItem(item.id).then(loadCart)}
                className="text-red-500 text-sm mt-3 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {items.length > 0 && (
          <div className="flex justify-end mt-10">
            <div className="text-right">
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Total: ₹{total.toFixed(2)}
              </h2>

              <button
                onClick={() => router.push("/checkout")}
                className="bg-green-600 hover:bg-green-700 transition text-white px-10 py-3 rounded-lg font-semibold"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
