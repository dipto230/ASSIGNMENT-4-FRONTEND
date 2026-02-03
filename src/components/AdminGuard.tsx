"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";


interface UserWithRole {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role: "ADMIN" | "SELLER" | "CUSTOMER"; 
  createdAt: string;
  updatedAt: string;
}


interface SessionData {
  user: UserWithRole;
  session: any; 
}

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  
  const { data: session, isPending, isRefetching } = authClient.useSession() as {
    data: SessionData | null;
    isPending: boolean;
    isRefetching: boolean;
  };

  
  const isLoading = isPending || isRefetching;

  useEffect(() => {
    if (!isLoading) {
      // Not logged in
      if (!session) {
        router.replace("/login");
        return;
      }

      
      if (session.user.role !== "ADMIN") {
        router.replace("/");
      }
    }
  }, [session, isLoading, router]);

  
  if (isLoading) return null;

  
  if (!session || session.user.role !== "ADMIN") return null;

  return <>{children}</>;
}
