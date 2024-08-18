import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

const TypingEffect = () => {
  const words = ['Management', 'Interaction', 'Cell'];
  const [visibleWords, setVisibleWords] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return; // Prevent effect from running again if animation is complete

    const timeouts = words.map((word, index) => {
      return setTimeout(() => {
        setVisibleWords(prev => [...prev, word]);
        if (index === words.length - 1) {
          setIsComplete(true);
        }
      }, (index + 1) * 2000);
    });

    // Cleanup function to clear timeouts
    return () => timeouts.forEach(clearTimeout);
  }, [isComplete]);

  return (
    <div className="typing-container">
      <div className="text-overlay">
        {visibleWords.map((word, index) => (
          <span key={index} className="word">
            {word}{' '}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TypingEffect;