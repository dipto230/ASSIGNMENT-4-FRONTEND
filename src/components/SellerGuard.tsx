"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/hooks/useSession";

export default function SellerGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user, loading } = useSession();

  useEffect(() => {
    if (loading) return;


    if (!user) {
      router.replace("/login");
      return;
    }


    if (user.role !== "SELLER") {
      router.replace("/");
    }
  }, [user, loading, router]);


  if (loading || !user || user.role !== "SELLER") {
    return null;
  }

  return <>{children}</>;
}
