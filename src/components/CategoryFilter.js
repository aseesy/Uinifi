import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="space-y-1">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Categories</h3>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group ${
            selectedCategory === category.id 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
              : 'text-gray-600 hover:bg-white/70 hover:shadow-md'
          }`}
        >
          <div className="flex items-center space-x-3">
            <span className="text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${
            selectedCategory === category.id 
              ? 'bg-white/20 text-white' 
              : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
          }`}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter; 