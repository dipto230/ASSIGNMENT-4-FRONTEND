"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, HeartPulse } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Get user from localStorage
const getUserFromStorage = () => {
  if (typeof window === "undefined") return null;
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Logout function
const handleLogout = async (setUser: any, router: any) => {
  localStorage.removeItem("user"); // Clear localStorage
  setUser(null); // Update state immediately

  try {
    await fetch("http://localhost:5000/api/auth/sign-out", {
      method: "POST",
      credentials: "include",
    });
  } catch (err) {
    console.error("Logout error:", err);
  } finally {
    router.replace("/"); // Redirect to home
  }
};

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateUser = () => setUser(getUserFromStorage());

    // Run once on mount
    updateUser();

    // Listen for custom event from registration/login
    window.addEventListener("userChanged", updateUser);

    return () => {
      window.removeEventListener("userChanged", updateUser);
    };
  }, []);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* TOP BAR */}
      <div className="bg-gray-50 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex gap-6">
            <span>info@webmail.com</span>
            <span>15/A, Nest Tower, NYC</span>
          </div>

          <div className="flex gap-6 items-center">
            <span className="cursor-pointer hover:text-teal-600">English ▾</span>
            <div className="flex gap-3 text-lg">
              <i className="fab fa-facebook hover:text-teal-600 cursor-pointer"></i>
              <i className="fab fa-twitter hover:text-teal-600 cursor-pointer"></i>
              <i className="fab fa-instagram hover:text-teal-600 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-teal-600"
        >
          <HeartPulse size={32} />
          MediStore
        </Link>

        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-teal-600 transition">
            Home
          </Link>
          <Link href="#" className="hover:text-teal-600 transition">
            About
          </Link>
          <Link href="/shop" className="hover:text-teal-600 transition">
            Shop
          </Link>
          <Link href="#" className="hover:text-teal-600 transition">
            News
          </Link>
          <Link href="#" className="hover:text-teal-600 transition">
            Pages
          </Link>
          <Link href="#" className="hover:text-teal-600 transition">
            Contact
          </Link>
        </nav>

        {/* USER & CART */}
        <div className="flex items-center gap-6 text-gray-700 relative">
          <Search className="cursor-pointer hover:text-teal-600 transition" />

          {/* USER ICON */}
          <div
            className="cursor-pointer hover:text-teal-600 transition relative"
            onClick={() => setOpen(!open)}
          >
            <User />

            {open && (
              <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-md p-2 text-sm z-50">
                {!user && (
                  <>
                    <Link
                      href="/login"
                      className="block px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      Register
                    </Link>
                  </>
                )}

                {user && (
                  <button
                    onClick={() => handleLogout(setUser, router)}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-red-500"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>

          {/* CART */}
          <div className="relative cursor-pointer hover:text-teal-600 transition">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
