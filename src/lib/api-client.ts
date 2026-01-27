// src/lib/api-client.ts

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function getCategories() {
  const res = await fetch(`${API_BASE}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
