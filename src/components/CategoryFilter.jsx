// src/components/CategoryFilter.js
import React from 'react';

const categories = ['All', 'electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2">Filter by Category</h3>
      <div className="flex space-x-1 md:space-x-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === 'All' ? null : category)}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category || (category === 'All' && !selectedCategory)
                ? 'bg-gray-800 text-white'
                : 'bg-zinc-300 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
