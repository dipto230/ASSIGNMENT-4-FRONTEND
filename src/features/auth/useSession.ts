"use client";
import { useEffect, useState } from "react";

export function useSession() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/session`, {
      credentials: "include", // ✅ SEND COOKIE
    })
      .then(res => (res.ok ? res.json() : null))
      .then(data => setUser(data?.user ?? null))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
}
