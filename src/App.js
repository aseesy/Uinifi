import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'features', label: 'Features', icon: '⚡' },
    { id: 'about', label: 'About', icon: 'ℹ️' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-heading font-bold text-primary">
                UiNifi AI
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Intelligent UI/UX
            <span className="text-primary block">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your digital experiences with AI-powered design and development solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary touch-target">
              Get Started
            </button>
            <button className="btn-secondary touch-target">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
              Design System
            </h3>
            <p className="text-gray-600">
              Consistent, scalable design patterns that adapt to any platform.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
              Rapid Development
            </h3>
            <p className="text-gray-600">
              Build faster with our component library and development tools.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
              AI Integration
            </h3>
            <p className="text-gray-600">
              Smart features that enhance user experience and productivity.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your UI?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers building better interfaces with UiNifi AI.
          </p>
          <button className="btn-success touch-target">
            Start Building Today
          </button>
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="mobile-nav md:hidden">
        <div className="flex justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-primary bg-primary bg-opacity-10'
                  : 'text-gray-500'
              }`}
            >
              <span className="text-xl mb-1">{tab.icon}</span>
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App; 