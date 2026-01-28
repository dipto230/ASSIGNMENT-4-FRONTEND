"use client";

import { useEffect, useState } from "react";
import SellerGuard from "@/components/SellerGuard";
import { getSellerOrders, updateSellerOrderStatus } from "@/lib/api-client";

export default function SellerOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    getSellerOrders().then(setOrders);
  }, []);

  const shipItem = async (id: string) => {
    await updateSellerOrderStatus(id, "SHIPPED");
    setOrders(o => o.map(item => item.id === id ? { ...item, status: "SHIPPED" } : item));
  };

  return (
    <SellerGuard>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-6">Seller Orders</h1>

        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Medicine</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Address</th>
              <th className="p-4">Qty</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(o => (
              <tr key={o.id} className="border-b">
                <td className="p-4">{o.medicine.name}</td>
                <td className="p-4">{o.order.user.name}</td>
                <td className="p-4">{o.order.shipping.address}</td>
                <td className="p-4">{o.quantity}</td>
                <td className="p-4 font-semibold">{o.status}</td>
                <td className="p-4">
                  {o.status === "PROCESSING" && (
                    <button
                      onClick={() => shipItem(o.id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Mark Shipped
                    </button>
                  )}
                  {o.status === "SHIPPED" && (
                    <span className="text-green-600">Shipped</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SellerGuard>
  );
}
