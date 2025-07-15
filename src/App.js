import React, { useState, useMemo } from 'react';

const UINifiApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  // Enhanced component database
  const components = [
    // CARDS
    {
      id: 'glassmorphism-card',
      name: 'Glassmorphism Card',
      category: 'cards',
      tags: ['glass', 'blur', 'modern', 'translucent', 'ios'],
      description: 'Translucent card with backdrop blur and subtle highlights, popular in modern iOS design',
      difficulty: 'intermediate',
      component: (
        <div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 h-32 flex items-center justify-center border border-white/20 relative overflow-hidden"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)'
          }}
        >
          <div className="absolute top-0 left-0 w-16 h-16 opacity-30" style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 70%)'
          }} />
          <span className="text-sm font-medium text-gray-800 relative z-10">Glassmorphism</span>
        </div>
      ),
      code: {
        react: `<div 
  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
  style={{
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)'
  }}
>
  <div className="absolute top-0 left-0 w-16 h-16 opacity-30" style={{
    background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 70%)'
  }} />
  Content here
</div>`,
        css: `.glassmorphism-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8);
}`
      }
    },
    {
      id: 'neumorphism-card',
      name: 'Neumorphism Card',
      category: 'cards',
      tags: ['neumorphism', 'soft', 'embedded', 'subtle', 'tactile'],
      description: 'Soft UI card with inset and outset shadows creating a tactile, embedded appearance',
      difficulty: 'advanced',
      component: (
        <div 
          className="rounded-2xl p-6 h-32 flex items-center justify-center"
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
            boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.05), -12px -12px 24px rgba(255, 255, 255, 0.8), inset 2px 2px 4px rgba(255, 255, 255, 0.8), inset -2px -2px 4px rgba(0, 0, 0, 0.02)'
          }}
        >
          <span className="text-sm font-medium text-gray-800">Neumorphism</span>
        </div>
      ),
      code: {
        react: `<div 
  className="rounded-2xl p-6"
  style={{
    background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
    boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.05), -12px -12px 24px rgba(255, 255, 255, 0.8)'
  }}
>
  Content here
</div>`,
        css: `.neumorphism-card {
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 1rem;
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.05), -12px -12px 24px rgba(255, 255, 255, 0.8);
}`
      }
    },
    {
      id: 'floating-card',
      name: 'Floating Card',
      category: 'cards',
      tags: ['shadow', 'elevation', 'floating', 'depth', 'material'],
      description: 'Elevated card with multi-layer shadows creating realistic depth and floating effect',
      difficulty: 'beginner',
      component: (
        <div 
          className="bg-white rounded-2xl p-6 h-32 flex items-center justify-center transform hover:scale-105 transition-all duration-300"
          style={{
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 30px rgba(0, 0, 0, 0.06), 0 4px 15px rgba(0, 0, 0, 0.04)'
          }}
        >
          <span className="text-sm font-medium text-gray-800">Floating Card</span>
        </div>
      ),
      code: {
        react: `<div 
  className="bg-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300"
  style={{
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 30px rgba(0, 0, 0, 0.06), 0 4px 15px rgba(0, 0, 0, 0.04)'
  }}
>
  Content here
</div>`,
        css: `.floating-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 30px rgba(0, 0, 0, 0.06), 0 4px 15px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease;
}
.floating-card:hover {
  transform: scale(1.05);
}`
      }
    },

    // BUTTONS  
    {
      id: 'gradient-button',
      name: 'Gradient Button',
      category: 'buttons',
      tags: ['gradient', 'vibrant', 'modern', 'colorful', 'cta'],
      description: 'Eye-catching gradient button perfect for call-to-action elements',
      difficulty: 'beginner',
      component: (
        <button 
          className="px-8 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          Get Started
        </button>
      ),
      code: {
        react: `<button 
  className="px-8 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
  style={{
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }}
>
  Get Started
</button>`,
        css: `.gradient-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 0.75rem;
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;
}
.gradient-button:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}`
      }
    },
    {
      id: 'glass-button',
      name: 'Glass Button',
      category: 'buttons',
      tags: ['glass', 'translucent', 'modern', 'blur', 'minimal'],
      description: 'Sophisticated translucent button with backdrop blur for elegant interfaces',
      difficulty: 'intermediate',
      component: (
        <button 
          className="px-8 py-3 rounded-xl text-gray-800 font-semibold text-sm backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/40 hover:scale-105"
          style={{
            background: 'rgba(255, 255, 255, 0.25)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          Learn More
        </button>
      ),
      code: {
        react: `<button 
  className="px-8 py-3 rounded-xl text-gray-800 font-semibold text-sm backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/40"
  style={{
    background: 'rgba(255, 255, 255, 0.25)'
  }}
>
  Learn More
</button>`,
        css: `.glass-button {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.75rem;
  color: #374151;
  font-weight: 600;
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;
}
.glass-button:hover {
  background: rgba(255, 255, 255, 0.4);
}`
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Components', icon: '🎨', count: components.length },
    { id: 'cards', name: 'Cards', icon: '🃏', count: components.filter(c => c.category === 'cards').length },
    { id: 'buttons', name: 'Buttons', icon: '🔘', count: components.filter(c => c.category === 'buttons').length },
    { id: 'layouts', name: 'Layouts', icon: '📐', count: 0 },
    { id: 'navigation', name: 'Navigation', icon: '🧭', count: 0 }
  ];

  const filteredComponents = useMemo(() => {
    return components.filter(component => {
      const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
      const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           component.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           component.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm, components]);

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
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/70 rounded-xl border border-gray-200/50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all backdrop-blur-sm"
              />
              <svg className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <div className="text-2xl font-bold text-gray-900">{components.length}</div>
            <div className="text-sm text-gray-600">Components Available</div>
          </div>

          {/* Categories */}
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
              <div 
                key={component.id}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200/50 hover:border-blue-200"
                onClick={() => setSelectedComponent(component)}
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
                      toggleFavorite(component.id);
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {favorites.has(component.id) ? '❤️' : '🤍'}
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
                      copyToClipboard(component.code, 'react');
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all group-hover:scale-105"
                  >
                    Copy React
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(component.code, 'css');
                    }}
                    className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    CSS
                  </button>
                </div>
              </div>
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