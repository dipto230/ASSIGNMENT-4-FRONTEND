"use client";
import { useEffect, useState } from "react";
import { getAdminUsers, updateUserStatus } from "@/lib/api-client";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getAdminUsers();
      setUsers(data);
    } catch (e: any) {
      setError(e.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleBan = async (id: string, status: "ACTIVE" | "BANNED") => {
    await updateUserStatus(id, status);
    setUsers(u => u.map(user => user.id === id ? { ...user, status } : user));
  };

  if (loading) return <p className="text-gray-700 text-center mt-10">Loading users...</p>;
  if (error) return <p className="text-red-600 text-center mt-10">{error}</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-gray-700 font-medium">Name</th>
              <th className="p-4 text-gray-700 font-medium">Email</th>
              <th className="p-4 text-gray-700 font-medium">Role</th>
              <th className="p-4 text-gray-700 font-medium">Status</th>
              <th className="p-4 text-gray-700 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-4 text-gray-800">{user.name}</td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4 text-gray-700 font-semibold">{user.role}</td>
                <td className={`p-4 font-semibold ${user.status === "BANNED" ? "text-red-600" : "text-green-600"}`}>
                  {user.status}
                </td>
                <td className="p-4">
                  {user.status === "ACTIVE" ? (
                    <button
                      onClick={() => handleBan(user.id, "BANNED")}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Ban
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBan(user.id, "ACTIVE")}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                      Activate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
