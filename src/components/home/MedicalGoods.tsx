"use client";
import { useEffect, useState } from "react";
import {
  approveMedicine,
  toggleMedicineAvailability,
} from "@/lib/api-client";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function AdminMedicinesPage() {
  const [medicines, setMedicines] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/admin/medicines`, {
      credentials: "include",
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch medicines");
        return res.json();
      })
      .then(setMedicines)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading medicines...</p>;

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Medicines</h1>

      {medicines.map(med => (
        <div
          key={med.id}
          className="bg-white p-4 mb-3 shadow rounded"
        >
          <p className="font-bold">{med.name}</p>
          <p>Seller: {med.seller?.name}</p>
          <p>Category: {med.category?.name}</p>

          <p>
            Approval:{" "}
            {med.isApproved ? "Approved" : "Pending"}
          </p>

          <p>
            Availability:{" "}
            {med.isActive ? "Available" : "Unavailable"}
          </p>

          {!med.isApproved && (
            <button
              onClick={async () => {
                await approveMedicine(med.id);
                location.reload();
              }}
              className="btn-blue mr-2"
            >
              Approve
            </button>
          )}

          <button
            onClick={async () => {
              await toggleMedicineAvailability(
                med.id,
                med.isActive ? "UNAVAILABLE" : "AVAILABLE"
              );
              location.reload();
            }}
            className="btn-yellow"
          >
            {med.isActive ? "Disable" : "Enable"}
          </button>
        </div>
      ))}
    </>
  );
}
