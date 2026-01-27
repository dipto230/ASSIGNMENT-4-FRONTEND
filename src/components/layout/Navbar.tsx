"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, HeartPulse } from "lucide-react";

export default function Navbar() {
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
          <Link href="#" className="hover:text-teal-600 transition">About</Link>
          <Link href="/shop" className="hover:text-teal-600 transition">Shop</Link>
          <Link href="#" className="hover:text-teal-600 transition">News</Link>
          <Link href="#" className="hover:text-teal-600 transition">Pages</Link>
          <Link href="#" className="hover:text-teal-600 transition">Contact</Link>
        </nav>

      
        <div className="flex items-center gap-6 text-gray-700">
          <Search className="cursor-pointer hover:text-teal-600 transition" />
          <User className="cursor-pointer hover:text-teal-600 transition" />

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
