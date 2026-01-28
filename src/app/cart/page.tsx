"use client";

import { useEffect, useState } from "react";
import {
  getCart,
  removeCartItem,
  updateCartItem,
  placeOrder,
} from "@/lib/api-client";

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);

  const loadCart = () => getCart().then(setItems);

  useEffect(() => {
    loadCart();
  }, []);

  const total = items.reduce(
    (sum, i) => sum + Number(i.medicine.price) * i.quantity,
    0
  );

  const checkout = async () => {
    const shipping = {
      name: "Test User",
      phone: "9999999999",
      address: "Street 1",
      city: "City",
      postalCode: "123456",
      country: "India",
    };

    await placeOrder(shipping);
    alert("Order placed 🎉");
    loadCart();
  };

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {items.length === 0 && <p>Cart is empty</p>}

      {items.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-4">
          <div>
            <h2 className="font-semibold">{item.medicine.name}</h2>
            <p>₹{item.medicine.price}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() =>
                  updateCartItem(item.id, item.quantity + 1).then(loadCart)
                }
                className="px-2 bg-gray-200"
              >
                +
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  updateCartItem(item.id, item.quantity - 1).then(loadCart)
                }
                className="px-2 bg-gray-200"
              >
                -
              </button>
            </div>
          </div>

          <div className="text-right">
            <p className="font-semibold">
              ₹{Number(item.medicine.price) * item.quantity}
            </p>
            <button
              onClick={() => removeCartItem(item.id).then(loadCart)}
              className="text-red-500 text-sm mt-2"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <div className="text-right mt-8">
          <h2 className="text-xl font-bold mb-4">
            Total: ₹{total.toFixed(2)}
          </h2>
          <button
            onClick={checkout}
            className="bg-green-600 text-white px-6 py-3 rounded"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
