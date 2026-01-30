import React from 'react';

const Selector = ({ offers, difficulties, onStart, setOffer, setDiff, currentOffer, currentDiff }) => (
  <div className="selector-screen">
    <h1>CHOOSE YOUR CONTRACT</h1>
    <div className="selection-grid">
      {offers.map(o => (
        <button key={o.id} className={currentOffer?.id === o.id ? 'active' : ''} onClick={() => setOffer(o)}>
          {o.name} <br/> <small>{o.category}</small>
        </button>
      ))}
    </div>
    <h3>SET DIFFICULTY</h3>
    <div className="difficulty-row">
      {difficulties.map(d => (
        <button key={d.level} className={currentDiff?.level === d.level ? 'active' : ''} onClick={() => setDiff(d)}>
          {d.level}
        </button>
      ))}
    </div>
    {currentOffer && currentDiff && <button className="launch-btn" onClick={onStart}>COMMENCE CALL</button>}
  </div>
);

export default Selector;