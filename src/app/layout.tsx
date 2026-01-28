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

  // Auth pages where navbar should be hidden
  const isAuthPage =
    pathname === "/login" || pathname === "/register";

  return (
    <html lang="en">
      <body>
        {/* NAVBAR CONTROL */}
        {!isAuthPage &&
          (isSellerRoute ? <SellerNavbar /> : <Navbar />)}

        {children}
      </body>
    </html>
  );
}
