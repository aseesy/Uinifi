// Animation utility functions
export const createRipple = (event, element) => {
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  const ripple = document.createElement('div');
  ripple.className = 'ripple-circle';
  ripple.style.left = (x - 25) + 'px';
  ripple.style.top = (y - 25) + 'px';
  ripple.style.width = '50px';
  ripple.style.height = '50px';
  
  element.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 800);
};

export const buttonEffects = {
  depth: {
    className: 'btn-depth clicked',
    duration: 200
  },
  scale: {
    className: 'btn-scale clicked',
    duration: 200
  },
  bounce: {
    className: 'btn-bounce clicked',
    duration: 800
  },
  ripple: {
    handler: createRipple,
    duration: 800
  },
  loading: {
    className: 'btn-loading loading',
    duration: 3000
  },
  success: {
    className: 'btn-success success',
    duration: null // permanent until reset
  },
  flash: {
    className: 'btn-flash clicked',
    duration: 500
  },
  shake: {
    className: 'btn-shake clicked',
    duration: 500
  },
  icon: {
    className: 'btn-icon clicked',
    duration: 500
  },
  morph: {
    className: 'btn-morph morphed',
    duration: null // permanent until reset
  },
  shadow: {
    className: 'btn-shadow clicked',
    duration: 300
  }
}; 