"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, HeartPulse } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full shadow-sm">
    
      <div className="bg-gray-100 text-sm text-gray-600 px-6 py-2 flex justify-between">
        <div className="flex gap-6">
          <span>info@webmail.com</span>
          <span> 15/A, Nest Tower, NYC</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="cursor-pointer">English ▾</span>
          <div className="flex gap-3 text-lg">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>

  
      <div className="bg-white px-10 py-4 flex items-center justify-between">
     
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-teal-600">
          <HeartPulse size={32} />
          MediStore 💊
        </Link>

   
        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="#">News</Link>
          <Link href="#">Pages</Link>
          <Link href="#">Contact</Link>
        </nav>

       
        <div className="flex items-center gap-6 text-gray-700">
          <Search className="cursor-pointer" />
          <User className="cursor-pointer" />
          <div className="relative cursor-pointer">
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
