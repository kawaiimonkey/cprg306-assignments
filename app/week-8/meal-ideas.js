"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas || []);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      {ingredient ? (
        <>
          <p className="mb-4">Here are some meal ideas using {ingredient}:</p>
          {meals.length > 0 ? (
            <ul>
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="bg-slate-800 my-2 p-3 rounded hover:bg-slate-700"
                >
                  <div className="font-bold text-lg">{meal.strMeal}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No meal ideas found for {ingredient}.</p>
          )}
        </>
      ) : (
        <p>Select an item to see meal ideas.</p>
      )}
    </div>
  );
}