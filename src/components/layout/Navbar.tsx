"use client";

import Link from "next/link";
import { Search, User as UserIcon, ShoppingCart, HeartPulse } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/hooks/useSession";
import { getCart } from "@/lib/api-client";

export default function Navbar() {
  const router = useRouter();
  const { user, setUser, loading } = useSession();
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  
  const loadCartCount = async () => {
    if (!user) {
      setCartCount(0);
      return;
    }
    try {
      const cart = await getCart();
      setCartCount(cart.reduce((sum: number, i: any) => sum + i.quantity, 0));
    } catch (err) {
      console.error("Failed to load cart count:", err);
    }
  };

  useEffect(() => {
    loadCartCount();

    
    const handler = () => loadCartCount();
    window.addEventListener("cartUpdated", handler);
    return () => window.removeEventListener("cartUpdated", handler);
  }, [user]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/sign-out", {
        method: "POST",
        credentials: "include",
      });
      window.dispatchEvent(new Event("userChanged")); // refresh session globally
      router.replace("/"); // redirect home
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setUser(null); 
    }
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      
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

      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-teal-600"
        >
          <HeartPulse size={32} />
          MediStore
        </Link>

        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-teal-600 transition">Home</Link>
          <Link href="/about" className="hover:text-teal-600 transition">About</Link>
          <Link href="/shop" className="hover:text-teal-600 transition">Shop</Link>
          <Link href="/contact" className="hover:text-teal-600 transition">Contact</Link>
        </nav>

        
        <div className="flex items-center gap-6 text-gray-700 relative">
          <Search className="cursor-pointer hover:text-teal-600 transition" />

          
          <div
            className="cursor-pointer hover:text-teal-600 transition relative"
            onClick={() => setOpen(!open)}
          >
            {user?.image ? (
              <img src={user.image} alt="avatar" className="w-6 h-6 rounded-full" />
            ) : (
              <UserIcon />
            )}

            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-md p-2 text-sm z-50">
                {!user && !loading && (
                  <>
                    <Link href="/login" className="block px-3 py-2 hover:bg-gray-100 rounded">
                      Login
                    </Link>
                    <Link href="/register" className="block px-3 py-2 hover:bg-gray-100 rounded">
                      Register
                    </Link>
                  </>
                )}

                {user && (
                  <>
                
                    <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200">
                      {user.image ? (
                        <img src={user.image} className="w-8 h-8 rounded-full" alt="avatar" />
                      ) : (
                        <UserIcon className="w-8 h-8" />
                      )}
                      <div>
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                    </div>

                    
                    <Link href="/profile" className="block px-3 py-2 hover:bg-gray-100 rounded">
                      My Profile
                    </Link>
                    <Link href="/orders" className="block px-3 py-2 hover:bg-gray-100 rounded">
                      My Orders
                    </Link>

                    
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-red-500"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          
          <Link href="/cart" className="relative cursor-pointer hover:text-teal-600 transition">
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
