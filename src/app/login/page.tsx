"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/sign-in/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.message || data?.error || "Invalid email or password");
        setLoading(false);
        return;
      }

      // ✅ Refresh session
      window.dispatchEvent(new Event("userChanged"));

      const userData = await res.json();

      // Role-based redirect
      if (userData.user.role === "SELLER") router.replace("/seller/dashboard");
      else if (userData.user.role === "ADMIN") router.replace("/admin/dashboard");
      else router.replace("/");

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white text-black">
      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-5">
          <h2 className="text-3xl font-bold mb-4">Login to Your Account</h2>
          {error && <p className="text-red-600">{error}</p>}

          <input name="email" type="email" placeholder="Email" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border rounded focus:outline-none focus:border-teal-500" required />

          <input name="password" type="password" placeholder="Password" value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 border rounded focus:outline-none focus:border-teal-500" required />

          <button type="submit" disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 p-3 rounded font-semibold text-white transition disabled:opacity-50">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      <div className="hidden md:block md:w-1/2">
        <img src="/surgeon.jpg" alt="Medical" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
