import { useState, useCallback } from 'react';

export const useButtonEffects = () => {
  const [buttonStates, setButtonStates] = useState({});

  const triggerEffect = useCallback((buttonId, effect, duration = 200) => {
    setButtonStates(prev => ({
      ...prev,
      [buttonId]: { effect, timestamp: Date.now() }
    }));

    setTimeout(() => {
      setButtonStates(prev => {
        const newState = { ...prev };
        delete newState[buttonId];
        return newState;
      });
    }, duration);
  }, []);

  const isActive = useCallback((buttonId) => {
    return !!buttonStates[buttonId];
  }, [buttonStates]);

  const getActiveEffect = useCallback((buttonId) => {
    return buttonStates[buttonId]?.effect || null;
  }, [buttonStates]);

  return {
    triggerEffect,
    isActive,
    getActiveEffect,
    buttonStates
  };
}; 