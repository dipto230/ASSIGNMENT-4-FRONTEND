"use client";
import { useEffect, useState } from "react";
import { getAdminOrders } from "@/lib/api-client";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const data = await getAdminOrders();
        setOrders(data);
      } catch (e: any) {
        setError(e.message || "Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading orders...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">All Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">Order ID:</span> {order.id}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Customer:</span>{" "}
                {order.user?.name}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Total:</span> ₹{order.total}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Status:</span> {order.status}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Payment:</span>{" "}
                {order.paymentStatus}
              </p>
            </div>
            <div>
              <strong className="text-gray-800">Items:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {order.items.map((item: any) => (
                  <li key={item.id} className="text-gray-700">
                    {item.medicine.name} (Seller: {item.seller?.name}) - ₹
                    {item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
