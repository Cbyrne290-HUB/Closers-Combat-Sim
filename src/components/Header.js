import React from 'react';

const Header = ({ selectedOffer, difficulty }) => (
  <header className="game-header">
    <div className="offer-info">
      <h2>Target: {selectedOffer?.name || "No Mission"}</h2>
      <span>Value: {selectedOffer?.price} | Pain: {selectedOffer?.pain}</span>
    </div>
    <div className="difficulty-tag">
      Mode: <strong>{difficulty?.level}</strong>
    </div>
  </header>
);

export default Header;