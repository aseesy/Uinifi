import React from 'react';

const ComponentCard = ({ component, onSelect, onToggleFavorite, onCopyCode, isFavorite }) => {
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div 
      className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200/50 hover:border-blue-200"
      onClick={() => onSelect(component)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-gray-900 mb-1 text-lg">{component.name}</h3>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(component.difficulty)}`}>
            {component.difficulty}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(component.id);
          }}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{component.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-6">
        {component.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg font-medium">
            {tag}
          </span>
        ))}
        {component.tags.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg">
            +{component.tags.length - 3}
          </span>
        )}
      </div>
      
      {/* Component Preview */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex items-center justify-center min-h-[140px] mb-4 border border-gray-200/50">
        {component.component}
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCopyCode(component.code, 'react');
          }}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all group-hover:scale-105"
        >
          Copy React
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCopyCode(component.code, 'css');
          }}
          className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all"
        >
          CSS
        </button>
      </div>
    </div>
  );
};

export default ComponentCard; 