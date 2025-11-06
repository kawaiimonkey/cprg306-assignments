"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 px-4 py-2 rounded ${
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Category
        </button>
      </div>
      <div>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </div>
    </div>
  );
}