"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import SellerNavbar from "@/components/SellerNavbar";

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
      </body>
    </html>
  );
}
