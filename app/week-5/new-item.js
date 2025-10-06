"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log("New Item:", item);
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-4 gap-3 flex flex-col text-black bg-white w-100 p-4 rounded-lg shadow-md"
      >
        
        <input
          type="text"
          placeholder="Item Name"
          className="border border-gray-600 rounded p-2"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        
        <div className="flex space-x-24">
          
          <div className="flex items-center space-x-2">
            <input
              type="text"
              readOnly
              className="w-12 text-lg font-extrabold text-center border border-black rounded"
              value={quantity}
            />
            <button
              type="button"
              onClick={decrement}
              className={`px-3 py-1 rounded font-extrabold text-lg text-white ${
                quantity === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={quantity === 1}
            >
              -
            </button>
            <button
              type="button"
              onClick={increment}
              className={`px-3 py-1 rounded font-extrabold text-lg text-white ${
                quantity === 20
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={quantity === 20}
            >
              +
            </button>
          </div>

          
          <select
            className="border text-black border-gray-300 rounded p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen_foods">Frozen Foods</option>
            <option value="canned_goods">Canned Goods</option>
            <option value="dry_goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="others">Others</option>
          </select>
        </div>

        
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </main>
  );
}
