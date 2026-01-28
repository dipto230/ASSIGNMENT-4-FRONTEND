"use client";
import { useEffect, useState } from "react";
import { approveMedicine, toggleMedicineAvailability } from "@/lib/api-client";

export default function AdminMedicinesPage() {
  const [medicines, setMedicines] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMedicines = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/medicines`, { credentials: "include" });
      const data = await res.json();
      setMedicines(data);
    } catch (e: any) {
      setError(e.message || "Failed to fetch medicines");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const handleApprove = async (id: string) => {
    await approveMedicine(id);
    setMedicines(meds => meds.map(m => m.id === id ? { ...m, isApproved: true } : m));
  };

  const handleToggle = async (id: string, status: "AVAILABLE" | "UNAVAILABLE") => {
    await toggleMedicineAvailability(id, status);
    setMedicines(meds =>
      meds.map(m => m.id === id ? { ...m, isActive: status === "AVAILABLE" } : m)
    );
  };

  if (loading) return <p className="text-gray-500">Loading medicines...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Medicines</h1>
      <div className="grid gap-6">
        {medicines.map(med => (
          <div
            key={med.id}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center transition hover:shadow-lg"
          >
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-semibold text-gray-900">{med.name}</p>
              <p className="text-gray-600">Category: <span className="font-medium">{med.category?.name || "N/A"}</span></p>
              <p className="text-gray-600">Seller: <span className="font-medium">{med.seller?.name}</span></p>
              <p className={`mt-1 font-medium ${med.isApproved ? "text-green-600" : "text-orange-500"}`}>
                Status: {med.isApproved ? "Approved" : "Pending"}
              </p>
            </div>
            <div className="flex space-x-3">
              {!med.isApproved && (
                <button
                  onClick={() => handleApprove(med.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Approve
                </button>
              )}
              <button
                onClick={() => handleToggle(med.id, med.isActive ? "UNAVAILABLE" : "AVAILABLE")}
                className={`px-4 py-2 rounded-lg text-white transition ${
                  med.isActive ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {med.isActive ? "Disable" : "Enable"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
