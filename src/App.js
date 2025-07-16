import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ComponentCard from './components/ComponentCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import ButtonEffects from './pages/ButtonEffects';
import { components } from './data/components';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [favorites, setFavorites] = React.useState([]);

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (componentId) => {
    setFavorites(prev => 
      prev.includes(componentId) 
        ? prev.filter(id => id !== componentId)
        : [...prev, componentId]
    );
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
  };

  const categories = ['all', ...new Set(components.map(comp => comp.category))];

  return (
    <Router>
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
                  <p className="text-sm text-gray-600">Component Library</p>
                </div>
              </div>
              <nav className="flex items-center space-x-6">
                <Link 
                  to="/" 
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Library
                </Link>
                <Link 
                  to="/button-effects" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Button Effects
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  UINifi Component Library
                </h2>
                <p className="text-xl text-gray-600">
                  Discover and copy beautiful, reusable React components
                </p>
              </div>

              <div className="mb-8 space-y-6">
                <SearchBar 
                  searchTerm={searchTerm} 
                  onSearchChange={setSearchTerm} 
                />
                <CategoryFilter 
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredComponents.map((component) => (
                  <ComponentCard
                    key={component.id}
                    component={component}
                    isFavorite={favorites.includes(component.id)}
                    onToggleFavorite={() => toggleFavorite(component.id)}
                    onCopyCode={copyToClipboard}
                  />
                ))}
              </div>

              {filteredComponents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No components found matching your criteria.</p>
                </div>
              )}
            </div>
          } />
          
          <Route path="/button-effects" element={<ButtonEffects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 