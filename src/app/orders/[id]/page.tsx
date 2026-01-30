"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getOrderById } from "@/lib/api-client";

export default function OrderDetailsPage() {
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getOrderById(id as string)
      .then(setOrder)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <p className="text-center mt-20 text-lg">Loading order details...</p>;

  if (!order)
    return <p className="text-center mt-20 text-red-500">Order not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-8">
        
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Order Details
        </h1>

        {/* Order Summary */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div>
            <p className="font-semibold">Order ID</p>
            <p className="text-gray-600">{order.id}</p>
            <p className="text-gray-500 text-sm">
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-right">
            <p className="text-xl font-bold text-gray-900">
              ₹{Number(order.total).toFixed(2)}
            </p>
            <p className="text-green-600 font-semibold">{order.status}</p>
          </div>
        </div>

        {/* Items */}
        <div className="border-t border-gray-200 pt-6 space-y-5">
          {order.items.map((item: any) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img
                  src={item.medicine.image || "/placeholder.png"}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <p className="font-semibold">{item.medicine.name}</p>
                  <p className="text-gray-500 text-sm">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
              <p className="font-semibold">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>

        {/* Shipping Info */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-gray-700 space-y-1">
          <h2 className="font-semibold text-lg mb-2">Shipping Info</h2>
          <p>{order.shipping.name}</p>
          <p>{order.shipping.address}, {order.shipping.city}</p>
          <p>{order.shipping.phone}</p>
        </div>

        {/* Payment Info */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-gray-700">
          <h2 className="font-semibold text-lg mb-2">Payment</h2>
          <p>Method: {order.paymentMethod}</p>
          <p>Status: {order.paymentStatus}</p>
        </div>
      </div>
    </div>
  );
}
