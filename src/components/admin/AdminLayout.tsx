"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();

  const handleLogout = () => {
    
    localStorage.removeItem("token"); 
    localStorage.removeItem("role"); 
    
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <aside className="w-64 bg-white shadow-md p-5 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link href="/admin/medicines" className="hover:bg-gray-200 px-3 py-2 rounded">
            Medicines
          </Link>
          <Link href="/admin/orders" className="hover:bg-gray-200 px-3 py-2 rounded">
            Orders
          </Link>
          <Link href="/admin/users" className="hover:bg-gray-200 px-3 py-2 rounded">
            Users
          </Link>
          
          <button
            onClick={handleLogout}
            className="hover:bg-red-200 text-red-600 px-3 py-2 rounded mt-4 text-left"
          >
            Logout
          </button>
        </nav>
      </aside>

      
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
