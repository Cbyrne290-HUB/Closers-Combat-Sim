import React from 'react';

const ChatWindow = ({ scenario, onChoice }) => (
  <div className="chat-window">
    <div className="prospect-box">
      <p><strong>PROSPECT:</strong> {scenario.opening}</p>
    </div>
    <div className="response-options">
      {scenario.options.map((opt, i) => (
        <button key={i} onClick={() => onChoice(opt.trust, opt.authority)}>
          {opt.text}
        </button>
      ))}
    </div>
  </div>
);

export default ChatWindow;