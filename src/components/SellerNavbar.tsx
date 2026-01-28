"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SellerNavbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-600">Seller Panel</h1>

      <div className="flex gap-6 text-sm font-medium">
        <Link href="/seller/dashboard">Dashboard</Link>
        <Link href="/seller/products">My Medicines</Link>
        <Link href="/seller/products/add" className="text-green-600">+ Add Medicine</Link>
        <button onClick={logout} className="text-red-500">Logout</button>
      </div>
    </div>
  );
}
