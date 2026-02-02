"use client";
import { useEffect, useState } from "react";

export function useSession() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/get-session`, {
    credentials: "include",
  })
    .then(async res => {
      if (!res.ok) {
        const errText = await res.text();
        console.error("Session fetch error:", errText);
        return null;
      }
      return res.json();
    })
    .then(data => setUser(data?.user ?? null))
    .finally(() => setLoading(false));
}, []);


  return { user, loading };
}
