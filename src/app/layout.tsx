"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import SellerNavbar from "@/components/SellerNavbar";
import AdminLayout from "@/components/admin/AdminLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isSellerRoute = pathname.startsWith("/seller");
  const isAdminRoute = pathname.startsWith("/admin"); // check for admin route
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <html lang="en">
      <body>
        {!isAuthPage &&
          (isAdminRoute ? (
            <AdminLayout>{children}</AdminLayout> // wrap admin pages with AdminLayout
          ) : isSellerRoute ? (
            <SellerNavbar />
          ) : (
            <Navbar />
          ))}

        {isAuthPage && children}
      </body>
    </html>
  );
}
