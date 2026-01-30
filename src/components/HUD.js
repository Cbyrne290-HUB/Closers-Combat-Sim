import React from 'react';

const HUD = ({ trust, authority, patience }) => {
  const getWidth = (val) => `${Math.max(0, Math.min(100, val))}%`;
  
  return (
    <div className="hud-container">
      <div className="stat-bar">
        <label>TRUST</label>
        <div className="bar-track"><div className="fill blue" style={{ width: getWidth(trust) }}></div></div>
      </div>
      <div className="stat-bar">
        <label>AUTHORITY</label>
        <div className="bar-track"><div className="fill gold" style={{ width: getWidth(authority) }}></div></div>
      </div>
      <div className="stat-bar">
        <label>PATIENCE</label>
        <div className="bar-track"><div className="fill red" style={{ width: getWidth(patience) }}></div></div>
      </div>
    </div>
  );
};

export default HUD;