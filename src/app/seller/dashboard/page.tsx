"use client";

import SellerGuard from "@/components/SellerGuard";
import { useEffect, useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function SellerDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/seller/medicines`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const totalProducts = products.length;
  const approvedProducts = products.filter(p => p.isApproved).length;
  const pendingProducts = products.filter(p => !p.isApproved).length;
  const lowStock = products.filter(p => p.stock < 20).length;

  if (loading)
    return <p className="text-center mt-20 text-lg">Loading dashboard...</p>;

  return (
    <SellerGuard>
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

   
        <h1 className="text-3xl font-bold text-gray-900 mb-10">
          Seller Dashboard
        </h1>

       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card title="Total Products" value={totalProducts} />
          <Card title="Approved" value={approvedProducts} green />
          <Card title="Pending Approval" value={pendingProducts} yellow />
          <Card title="Low Stock" value={lowStock} red />
        </div>

  
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">Your Medicines</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-700 text-sm">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Stock</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Created</th>
                </tr>
              </thead>

              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 flex items-center gap-3">
                      <img
                        src={p.image}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <p className="font-semibold">{p.name}</p>
                        <p className="text-sm text-gray-500">
                          {p.manufacturer}
                        </p>
                      </div>
                    </td>

                    <td className="p-4 font-semibold">₹{p.price}</td>

                    <td className={`p-4 font-semibold ${p.stock < 20 ? "text-red-600" : "text-gray-800"}`}>
                      {p.stock}
                    </td>

                    <td className="p-4">
                      {p.isApproved ? (
                        <span className="text-green-600 font-semibold">Approved</span>
                      ) : (
                        <span className="text-yellow-600 font-semibold">Pending</span>
                      )}
                    </td>

                    <td className="p-4 text-sm text-gray-500">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {products.length === 0 && (
              <p className="p-6 text-gray-500">No products yet.</p>
            )}
          </div>
        </div>
      </div>
      </div>
      </SellerGuard>
  );
}


function Card({ title, value, green, yellow, red }: any) {
  const color = green
    ? "text-green-600"
    : yellow
    ? "text-yellow-600"
    : red
    ? "text-red-600"
    : "text-gray-900";

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-2xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
}
