"use client";
import { useState } from "react";
import { createCategory, getAdminCategories } from "@/lib/api-client";

export default function CategoryModal({ onAdd }: { onAdd: () => void }) {
  const [name, setName] = useState("");

  const handleAdd = async () => {
    if (!name) return;
    await createCategory(name);
    setName("");
    onAdd();
  };

  return (
    <div className="bg-white p-4 shadow rounded mb-4 flex space-x-2">
      <input
        type="text"
        placeholder="Category name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <button onClick={handleAdd} className="btn-blue">Add</button>
    </div>
  );
}
