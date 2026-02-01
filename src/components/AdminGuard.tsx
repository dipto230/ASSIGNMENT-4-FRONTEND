"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";

// ✅ Define a type that includes role
interface UserWithRole {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role: "ADMIN" | "SELLER" | "CUSTOMER"; // match your Prisma enum
  createdAt: string;
  updatedAt: string;
}

// ✅ Define the session data type
interface SessionData {
  user: UserWithRole;
  session: any; // you can type this more strictly if needed
}

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // ✅ Cast useSession() to include role
  const { data: session, isPending, isRefetching } = authClient.useSession() as {
    data: SessionData | null;
    isPending: boolean;
    isRefetching: boolean;
  };

  // ✅ Create a loading flag
  const isLoading = isPending || isRefetching;

  useEffect(() => {
    if (!isLoading) {
      // Not logged in
      if (!session) {
        router.replace("/login");
        return;
      }

      // Logged in but not admin
      if (session.user.role !== "ADMIN") {
        router.replace("/");
      }
    }
  }, [session, isLoading, router]);

  // Show nothing while loading
  if (isLoading) return null;

  // Block rendering if not admin
  if (!session || session.user.role !== "ADMIN") return null;

  return <>{children}</>;
}
