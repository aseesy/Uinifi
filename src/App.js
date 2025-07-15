import React, { useState, useMemo } from 'react';
import { components, categories } from './data/components';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ComponentCard from './components/ComponentCard';

const UINifiApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  const filteredComponents = useMemo(() => {
    return components.filter(component => {
      const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
      const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           component.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           component.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const copyToClipboard = (code, format = 'react') => {
    const textToCopy = typeof code === 'object' ? code[format] : code;
    navigator.clipboard.writeText(textToCopy);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const toggleFavorite = (componentId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(componentId)) {
      newFavorites.delete(componentId);
    } else {
      newFavorites.add(componentId);
    }
    setFavorites(newFavorites);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  UINifi.ai
                </h1>
                <p className="text-sm text-gray-600">Visual UI Component Library</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                Documentation
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                Get Pro
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-72 bg-white/60 backdrop-blur-md border-r border-gray-200/50 min-h-screen p-6">
          
          {/* Search */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Stats */}
          <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <div className="text-2xl font-bold text-gray-900">{components.length}</div>
            <div className="text-sm text-gray-600">Components Available</div>
          </div>

          {/* Categories */}
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {categories.find(cat => cat.id === selectedCategory)?.name || 'All Components'}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''} ready to copy and use
            </p>
          </div>

          {/* Component Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredComponents.map(component => (
              <ComponentCard
                key={component.id}
                component={component}
                onSelect={setSelectedComponent}
                onToggleFavorite={toggleFavorite}
                onCopyCode={copyToClipboard}
                isFavorite={favorites.has(component.id)}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredComponents.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No components found</h3>
              <p className="text-gray-600">Try adjusting your search or browse different categories</p>
            </div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce">
          ✅ Code copied to clipboard!
        </div>
      )}

      {/* Detailed Component Modal */}
      {selectedComponent && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedComponent(null)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{selectedComponent.name}</h2>
                <p className="text-gray-600 mt-2 text-lg">{selectedComponent.description}</p>
                <div className="flex items-center gap-3 mt-4">
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${getDifficultyColor(selectedComponent.difficulty)}`}>
                    {selectedComponent.difficulty}
                  </span>
                  <div className="flex gap-1">
                    {selectedComponent.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Large Preview */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 mb-8 flex items-center justify-center min-h-[300px] border border-gray-200">
              <div className="transform scale-150">
                {selectedComponent.component}
              </div>
            </div>

            {/* Code Tabs */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="flex border-b border-gray-700">
                <button className="px-6 py-3 bg-blue-600 text-white font-medium">React + Tailwind</button>
                <button className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800 font-medium">Pure CSS</button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-white">Implementation Code</h3>
                  <button
                    onClick={() => copyToClipboard(selectedComponent.code, 'react')}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-white"
                  >
                    Copy Code
                  </button>
                </div>
                <pre className="text-sm overflow-x-auto text-gray-300 leading-relaxed">
                  <code>{selectedComponent.code.react}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UINifiApp; 