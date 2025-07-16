import React from 'react';
import { useButtonEffects } from '../hooks/useButtonEffects';
import { buttonEffects, createRipple } from '../utils/animations';

const ButtonEffects = () => {
  const { triggerEffect, isActive } = useButtonEffects();

  const handleButtonClick = (effect, event) => {
    if (effect === 'ripple') {
      createRipple(event, event.target);
    } else {
      const config = buttonEffects[effect];
      if (config.duration !== null) {
        triggerEffect(effect, effect, config.duration);
      } else {
        triggerEffect(effect, effect);
      }
    }
  };

  const resetButton = (effect) => {
    const buttons = document.querySelectorAll(`.btn-${effect}`);
    buttons.forEach(button => {
      button.className = button.className.split(' ').filter(cls => 
        !['loading', 'success', 'morphed', 'clicked'].includes(cls)
      ).join(' ');
      
      // Reset text visibility
      const textSpan = button.querySelector('.btn-text');
      if (textSpan) {
        textSpan.style.opacity = '1';
      }
    });
  };

  const buttonDemos = [
    {
      id: 'depth',
      title: '1. Click Depth/Press',
      description: '3D press effect - button pushes down when clicked',
      buttonText: 'Press Down',
      effect: 'depth'
    },
    {
      id: 'scale',
      title: '2. Scale/Squeeze',
      description: 'Button squeezes down on click for tactile feedback',
      buttonText: 'Squeeze Me',
      effect: 'scale'
    },
    {
      id: 'bounce',
      title: '3. Bounce Back',
      description: 'Elastic bounce animation with overshoot effect',
      buttonText: 'Bounce!',
      effect: 'bounce'
    },
    {
      id: 'ripple',
      title: '4. Ripple Wave',
      description: 'Ripple expands from click point outward',
      buttonText: 'Click for Ripple',
      effect: 'ripple'
    },
    {
      id: 'loading',
      title: '5. Loading Spinner',
      description: 'Shows loading state with spinner animation',
      buttonText: 'Load Data',
      effect: 'loading',
      hasReset: true
    },
    {
      id: 'success',
      title: '6. Success Checkmark',
      description: 'Transforms to show success state with checkmark',
      buttonText: 'Submit Form',
      effect: 'success',
      hasReset: true
    },
    {
      id: 'flash',
      title: '7. Color Flash/Pulse',
      description: 'Brief color change and glow on click',
      buttonText: 'Flash Effect',
      effect: 'flash'
    },
    {
      id: 'shake',
      title: '8. Shake Feedback',
      description: 'Quick shake animation for attention or error',
      buttonText: 'Shake It!',
      effect: 'shake'
    },
    {
      id: 'icon',
      title: '9. Icon Transformation',
      description: 'Icon spins and scales on button click',
      buttonText: '⚙️ Process',
      effect: 'icon'
    },
    {
      id: 'morph',
      title: '10. Button Morph',
      description: 'Button transforms into a happy celebration state',
      buttonText: 'Complete Task',
      effect: 'morph',
      hasReset: true
    },
    {
      id: 'shadow',
      title: '11. Shadow Indentation',
      description: 'Press effect using shadows without movement',
      buttonText: 'Press & Hold',
      effect: 'shadow'
    }
  ];

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
                <p className="text-sm text-gray-600">Button Micro-Interactions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                Back to Library
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            11 Button Click Micro Interactions
          </h2>
          <p className="text-xl text-gray-600">
            Click each button to see different click-specific animations and feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {buttonDemos.map((demo) => (
            <div key={demo.id} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{demo.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{demo.description}</p>
              
              <button
                className={`btn btn-${demo.effect} ${isActive(demo.effect) ? 'clicked' : ''}`}
                onClick={(e) => handleButtonClick(demo.effect, e)}
                data-effect={demo.effect}
              >
                {demo.effect === 'success' || demo.effect === 'morph' ? (
                  <span className="btn-text">{demo.buttonText}</span>
                ) : (
                  demo.buttonText
                )}
              </button>
              
              {demo.hasReset && (
                <button
                  className="mt-3 px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300 transition-colors"
                  onClick={() => resetButton(demo.effect)}
                >
                  Reset
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          background: #4CAF50;
          color: white;
          position: relative;
          overflow: hidden;
          outline: none;
          transition: all 0.2s ease;
          min-width: 140px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-text {
          transition: opacity 0.3s ease;
        }

        /* 1. Click Depth/Press Effect */
        .btn-depth {
          box-shadow: 0 6px 0 #45a049, 0 8px 15px rgba(0,0,0,0.2);
          transform: translateY(0);
        }
        .btn-depth.clicked {
          transform: translateY(4px);
          box-shadow: 0 2px 0 #45a049, 0 4px 8px rgba(0,0,0,0.2);
        }

        /* 2. Scale/Squeeze Effect */
        .btn-scale.clicked {
          transform: scale(0.9);
        }

        /* 3. Bounce Back Effect */
        .btn-bounce.clicked {
          animation: bounce-click 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        @keyframes bounce-click {
          0% { transform: scale(1); }
          20% { transform: scale(0.85); }
          40% { transform: scale(1.15); }
          60% { transform: scale(0.95); }
          80% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        /* 4. Ripple Wave */
        .btn-ripple {
          position: relative;
          overflow: hidden;
        }
        .ripple-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.6);
          transform: scale(0);
          animation: ripple-expand 0.8s ease-out;
          pointer-events: none;
        }
        @keyframes ripple-expand {
          to {
            transform: scale(3);
            opacity: 0;
          }
        }

        /* 5. Loading Spinner */
        .btn-loading {
          background: #FF9800;
        }
        .btn-loading.loading::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .btn-loading.loading {
          color: transparent;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* 6. Success Checkmark */
        .btn-success {
          background: #2196F3;
          transition: all 0.3s ease;
        }
        .btn-success.success {
          background: #4CAF50;
        }
        .btn-success.success .btn-text {
          opacity: 0;
        }
        .btn-success.success::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          font-size: 24px;
          font-weight: bold;
          color: white;
          animation: checkmark-appear 0.5s ease forwards;
        }
        @keyframes checkmark-appear {
          0% { 
            transform: translate(-50%, -50%) scale(0) rotate(180deg);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        /* 7. Color Flash/Pulse */
        .btn-flash {
          background: #9C27B0;
        }
        .btn-flash.clicked {
          animation: color-flash 0.5s ease;
        }
        @keyframes color-flash {
          0% { background: #9C27B0; }
          50% { background: #E91E63; box-shadow: 0 0 20px #E91E63; }
          100% { background: #9C27B0; }
        }

        /* 8. Shake Feedback */
        .btn-shake.clicked {
          animation: shake-click 0.5s ease;
        }
        @keyframes shake-click {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
          20%, 40%, 60%, 80% { transform: translateX(3px); }
        }

        /* 9. Icon Transformation */
        .btn-icon {
          background: #FF5722;
        }
        .btn-icon .icon {
          transition: transform 0.3s ease;
          margin-right: 8px;
        }
        .btn-icon.clicked .icon {
          animation: icon-spin 0.5s ease;
        }
        @keyframes icon-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }

        /* 10. Button Morph/State Change */
        .btn-morph {
          background: #607D8B;
          transition: all 0.4s ease;
        }
        .btn-morph .btn-text {
          transition: opacity 0.3s ease;
        }
        .btn-morph.morphed {
          background: #FF9800;
          border-radius: 24px;
          transform: scale(1.1);
        }
        .btn-morph.morphed .btn-text {
          opacity: 0;
        }
        .btn-morph.morphed::after {
          content: '😊';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          font-size: 28px;
          animation: happy-appear 0.5s ease forwards;
        }
        @keyframes happy-appear {
          0% { 
            transform: translate(-50%, -50%) scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        /* 11. Shadow Indentation */
        .btn-shadow {
          background: #795548;
          box-shadow: 
            0 6px 0 #5D4037,
            0 8px 12px rgba(0,0,0,0.3),
            inset 0 2px 0 rgba(255,255,255,0.2);
          transition: all 0.1s ease;
        }
        .btn-shadow.clicked {
          box-shadow: 
            0 2px 0 #5D4037,
            0 3px 6px rgba(0,0,0,0.4),
            inset 0 3px 8px rgba(0,0,0,0.3),
            inset 0 -2px 0 rgba(255,255,255,0.1);
          background: #6D4C41;
        }
      `}</style>
    </div>
  );
};

export default ButtonEffects; 