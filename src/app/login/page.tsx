"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // 1️⃣ Sign in
      const res = await fetch("http://localhost:5000/api/auth/sign-in/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data?.message || "Invalid email or password");
        return;
      }

      // 2️⃣ Get session info
      const sessionRes = await fetch("http://localhost:5000/api/auth/session", {
        method: "GET",
        credentials: "include",
      });

      if (!sessionRes.ok) {
        setError("Failed to fetch session info");
        return;
      }

      const session = await sessionRes.json();

      if (!session.user) {
        setError("User not found in session");
        return;
      }

      // 3️⃣ Redirect after login
      router.push("/"); // Go to home page
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow rounded bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
