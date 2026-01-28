"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "", // CUSTOMER or SELLER
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.role) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Register user
      const res = await fetch("http://localhost:5000/api/auth/sign-up/email", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role.toUpperCase(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.message || "Registration failed");
        setLoading(false);
        return;
      }

      // Auto-login
      const loginRes = await fetch("http://localhost:5000/api/auth/sign-in/email", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      if (!loginRes.ok) {
        setError("Account created, but login failed");
        setLoading(false);
        return;
      }

      const userData = await loginRes.json();
      localStorage.setItem("user", JSON.stringify(userData)); // <-- Save user in localStorage

      router.replace("/"); // Redirect to home

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white text-black">
      {/* LEFT SIDE - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
          <h2 className="text-3xl font-bold mb-4">Create Account</h2>

          {error && <p className="text-red-600">{error}</p>}

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:border-teal-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:border-teal-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:border-teal-500"
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:border-teal-500"
          >
            <option value="">Select Role</option>
            <option value="CUSTOMER">Customer</option>
            <option value="SELLER">Seller</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 p-3 rounded font-semibold text-white transition disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>
      </div>

      {/* RIGHT SIDE - Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="/Medical.jpg"
          alt="Medical"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
