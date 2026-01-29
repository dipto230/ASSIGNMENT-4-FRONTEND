"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import SellerNavbar from "@/components/SellerNavbar";
import Footer from "@/components/layout/Footer";
import BrandLogos from "@/components/home/BrandLogos";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isSellerRoute = pathname.startsWith("/seller");
  const isAdminRoute = pathname.startsWith("/admin");
  const isAuthPage =
    pathname === "/login" || pathname === "/register";

  return (
    <html lang="en">
      <body>
    
        {!isAuthPage && !isAdminRoute && (
          isSellerRoute ? <SellerNavbar /> : <Navbar />
        )}

        {children}
        <BrandLogos/>
        <Footer/>
      </body>
    </html>
  );
}
