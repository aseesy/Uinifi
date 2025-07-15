// Enhanced component database
export const components = [
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

export const categories = [
  { id: 'all', name: 'All Components', icon: '🎨', count: components.length },
  { id: 'cards', name: 'Cards', icon: '🃏', count: components.filter(c => c.category === 'cards').length },
  { id: 'buttons', name: 'Buttons', icon: '🔘', count: components.filter(c => c.category === 'buttons').length },
  { id: 'layouts', name: 'Layouts', icon: '📐', count: 0 },
  { id: 'navigation', name: 'Navigation', icon: '🧭', count: 0 }
]; 