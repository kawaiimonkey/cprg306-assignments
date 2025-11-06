"use client";
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  let displayedItems;
  if (sortBy === 'group') {
    // Create a copy and group items by category using reduce
    const itemsCopy = [...items];
    const groupedItems = itemsCopy.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});

    // Sort categories alphabetically
    const sortedCategories = Object.keys(groupedItems).sort();

    // Render grouped items
    displayedItems = sortedCategories.map((category) => (
      <div key={category} className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="font-bold text-blue-500 text-lg capitalize mb-2">{category}</h2>
        <ul className="space-y-2">
          {groupedItems[category]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <li key={item.id}>
                <Item name={item.name} quantity={item.quantity} category={item.category} />
              </li>
            ))}
        </ul>
      </div>
    ));
  } else {
    // Create a copy and sort items by name or category
    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    // Render sorted items
    displayedItems = (
      <div className="space-y-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          className={`p-2 my-4 rounded font-bold ${sortBy === 'name' ? 'bg-yellow-500' : 'bg-gray-500'}`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 my-4 rounded font-bold ${sortBy === 'category' ? 'bg-yellow-500' : 'bg-gray-500'}`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
        <button
          className={`p-2 my-4 rounded font-bold ${sortBy === 'group' ? 'bg-yellow-500' : 'bg-gray-500'}`}
          onClick={() => setSortBy('group')}
        >
          Group by Category
        </button>
      </div>
      {displayedItems}
    </div>
  );
}