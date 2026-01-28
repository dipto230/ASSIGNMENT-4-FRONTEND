"use client";
import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* You can add quick stats here */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Total Users</p>
          <p className="text-2xl font-bold">120</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Total Orders</p>
          <p className="text-2xl font-bold">56</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Total Medicines</p>
          <p className="text-2xl font-bold">230</p>
        </div>
      </div>
    </AdminLayout>
  );
}
