import React, { useState } from 'react';
import './EnvelopeCard.css';

const EnvelopeCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  const createSparkles = () => {
    const newSparkles = [];
    for (let i = 0; i < 20; i++) {
      newSparkles.push({
        id: i,
        left: Math.random() * 300,
        top: Math.random() * 200,
        delay: Math.random() * 0.5
      });
    }
    setSparkles(newSparkles);
  };

  const openEnvelope = () => {
    setIsOpen(true);
    createSparkles();
  };

  const closeEnvelope = () => {
    setIsOpen(false);
    setSparkles([]);
  };

  return (
    <div className="envelope-container">
      <div className={`envelope ${isOpen ? 'open' : ''}`}>
        <div className="front">
          <div className="flap"></div>
          <div className="pocket"></div>
        </div>
        <div className="letter">
          <p>Dear Best Friend</p>
          <p>Thank you for being here for me bestfriend</p>
          <p>Youssef</p>
        </div>
        {isOpen && (
          <div className="sparkles">
            {sparkles.map((sparkle) => (
              <div
                key={sparkle.id}
                className="sparkle"
                style={{
                  left: `${sparkle.left}px`,
                  top: `${sparkle.top}px`,
                  animationDelay: `${sparkle.delay}s`
                }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="button-container">
        <button onClick={openEnvelope}>Open Letter</button>
        <button onClick={closeEnvelope}>Close Letter</button>
      </div>
    </div>
  );
};

export default EnvelopeCard;
