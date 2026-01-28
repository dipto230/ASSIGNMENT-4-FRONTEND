"use client";

import { useEffect, useState } from "react";
import { getOrders } from "@/lib/api-client";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders()
      .then(setOrders)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-center mt-20 text-lg">Loading orders...</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-gray-900">
          My Orders
        </h1>

        {orders.length === 0 && (
          <p className="text-gray-500">No orders yet</p>
        )}

        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-5">
                <div>
                  <p className="font-semibold text-gray-800">
                    Order ID: {order.id.slice(0, 8)}...
                  </p>
                  <p className="text-gray-500 text-sm">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="mt-3 md:mt-0 text-right">
                  <p className="font-bold text-lg text-gray-900">
                    ₹{Number(order.total).toFixed(2)}
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    {order.status}
                  </p>
                </div>
              </div>

              
              <div className="border-t border-gray-200 pt-4 space-y-4">
                {order.items.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.medicine.image || "/placeholder.png"}
                        className="w-14 h-14 rounded object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {item.medicine.name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-900">
                      ₹{Number(item.price) * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

        
              <div className="border-t border-gray-200 mt-5 pt-4 text-sm text-gray-600">
                <p><span className="font-semibold">Ship To:</span> {order.shipping.name}</p>
                <p>{order.shipping.address}, {order.shipping.city}</p>
                <p>{order.shipping.phone}</p>
                <p>Payment: {order.paymentMethod} ({order.paymentStatus})</p>
              </div>

              
              <button
                onClick={() => router.push(`/orders/${order.id}`)}
                className="mt-5 text-blue-600 font-semibold hover:underline"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
