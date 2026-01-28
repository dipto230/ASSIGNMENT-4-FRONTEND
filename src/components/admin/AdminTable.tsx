"use client";
import React from "react";

interface AdminTableProps {
  columns: string[];
  data: any[];
  renderRow: (item: any) => React.ReactNode;
}

export default function AdminTable({ columns, data, renderRow }: AdminTableProps) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col} className="p-3 text-left">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(renderRow)}
      </tbody>
    </table>
  );
}
