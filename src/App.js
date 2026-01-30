import React, { useState } from 'react';
import Header from './components/Header';
import HUD from './components/HUD';
import Selector from './components/Selector';
import ChatWindow from './components/ChatWindow';
import { offers } from './data/offers';
import { difficulties } from './data/prospects';
import { scenarios } from './data/dialogue'; // or ./data/script
import { useGameLogic } from './hooks/useGameLogic';
import './styles/App.css';

function App() {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [gameState, setGameState] = useState('START');
  const [round, setRound] = useState(0);

  const { trust, authority, patience, processMove } = useGameLogic(difficulty);

  const handleChoice = (t, a) => {
    processMove(t, a);
    if (round < scenarios.length - 1) setRound(round + 1);
  };

  if (gameState === 'START') {
    return (
      <Selector 
        offers={offers} 
        difficulties={difficulties} 
        onStart={() => setGameState('ARENA')}
        setOffer={setSelectedOffer}
        setDiff={setDifficulty}
        currentOffer={selectedOffer}
        currentDiff={difficulty}
      />
    );
  }

  return (
    <div className="game-container">
      <Header selectedOffer={selectedOffer} difficulty={difficulty} />
      <HUD trust={trust} authority={authority} patience={patience} />
      <ChatWindow scenario={scenarios[round]} onChoice={handleChoice} />
      
      {(patience <= 0 || (trust >= 80 && authority >= 70)) && (
        <div className="modal">
          <h2>{trust >= 80 ? "DEAL CLOSED" : "CALL TERMINATED"}</h2>
          <button onClick={() => window.location.reload()}>RESTART</button>
        </div>
      )}
    </div>
  );
}

export default App;