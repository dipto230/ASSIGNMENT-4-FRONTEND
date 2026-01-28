"use client";

import { useSession } from "@/hooks/useSession";

export default function ProfilePage() {
  const { user, loading } = useSession(); // ✅ use 'user', not 'session'

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-xl">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Not Logged In</h2>
          <p className="text-gray-600 mb-6">
            Please login or register to view your profile.
          </p>
          <a
            href="/login"
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-teal-600">My Profile</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {user.image ? (
            <img
              src={user.image}
              alt="User avatar"
              className="w-32 h-32 rounded-full border-4 border-teal-200"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-500 border-4 border-teal-200">
              {user.name ? user.name[0].toUpperCase() : "U"}
            </div>
          )}

          <div className="flex-1 space-y-2">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Name:</span> {user.name || "N/A"}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Email:</span> {user.email || "N/A"}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Role:</span> {user.role || "User"}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Joined:</span>{" "}
              {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/"
            className="px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
          >
            Go to Home
          </a>
          <a
            href="/profile/edit"
            className="px-6 py-2 rounded bg-teal-600 text-white hover:bg-teal-700 transition"
          >
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
}
