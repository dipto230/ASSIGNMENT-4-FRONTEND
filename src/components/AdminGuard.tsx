"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: session, isLoading } = authClient.useSession();

  useEffect(() => {
    if (!isLoading) {
      // ❌ not logged in
      if (!session) {
        router.replace("/login");
        return;
      }

      // ❌ logged in but not admin
      if (session.user.role !== "ADMIN") {
        router.replace("/");
      }
    }
  }, [session, isLoading, router]);

  if (isLoading) return null;

  // ❌ block rendering if not admin
  if (!session || session.user.role !== "ADMIN") return null;

  return <>{children}</>;
}
