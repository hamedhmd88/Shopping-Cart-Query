// src/hooks/useSearch.js
import { useState } from 'react';

const useSearch = (items, searchTerm, category, sortOption) => {
  const [search, setSearch] = useState(searchTerm || '');

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !category || item.category === category;
    return matchesSearch && matchesCategory;
  });

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOption === 'lowToHigh') {
      return a.price - b.price;
    } else if (sortOption === 'highToLow') {
      return b.price - a.price;
    }
    return 0;
  });

  return { search, setSearch, sortedItems };
};

export default useSearch;
