import React from 'react';
import { Shield, Target, TrendingUp, AlertTriangle } from 'lucide-react';

const Selector = ({ onStart, setOffer, setDiff, currentOffer, currentDiff }) => {
  const contracts = [
    { id: 1, name: "SaaS Enterprise Security", value: "$50k", difficulty: "God Mode", pain: "High Churn" },
    { id: 2, name: "Wealth & Trading Mastermind", value: "$15k", difficulty: "Hard", pain: "Low Trust" },
    { id: 3, name: "Bio-Hacking Longevity Retreat", value: "$12k", difficulty: "Medium", pain: "Price Shopper" },
    { id: 4, name: "Fractional CMO Services", value: "$25k", difficulty: "Easy", pain: "Scaling Issues" }
  ];

  const diffLevels = ["Easy", "Medium", "Hard", "God Mode"];

  return (
    <div className="selector-container">
      <div className="briefing-header">
        <h1><Shield className="icon" /> CONTRACT SELECTION PORTAL</h1>
        <p>Select an active lead to initiate the voice-simulated negotiation.</p>
      </div>

      <div className="selector-grid">
        {/* Table Area */}
        <div className="contract-table">
          <table>
            <thead>
              <tr>
                <th>PROSPECT/CONTRACT</th>
                <th>VALUE</th>
                <th>CORE PAIN</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((c) => (
                <tr 
                  key={c.id} 
                  className={currentOffer?.id === c.id ? 'selected-row' : ''}
                  onClick={() => setOffer(c)}
                >
                  <td><strong>{c.name}</strong></td>
                  <td className="text-blue">{c.value}</td>
                  <td>{c.pain}</td>
                  <td><span className="status-tag">READY</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sidebar Info */}
        <div className="briefing-sidebar">
          <h3><Target /> MISSION BRIEFING</h3>
          <div className="brief-card">
            <p><strong>Selected:</strong> {currentOffer?.name || "None"}</p>
            <p><strong>Contract Value:</strong> {currentOffer?.value || "--"}</p>
          </div>

          <h3><TrendingUp /> LEVEL OF RESISTANCE</h3>
          <div className="diff-selector">
            {diffLevels.map(level => (
              <button 
                key={level}
                className={currentDiff === level ? 'active-diff' : ''}
                onClick={() => setDiff(level)}
              >
                {level}
              </button>
            ))}
          </div>

          {currentOffer && currentDiff && (
            <button className="commence-btn" onClick={onStart}>
              INITIATE VOICE CONNECTION
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Selector;