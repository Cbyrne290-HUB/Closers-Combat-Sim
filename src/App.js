import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, PhoneOff, ShieldCheck } from 'lucide-react';
import HUD from './components/HUD';
import Header from './components/Header';
import Selector from './components/Selector';

const App = () => {
  const [gameState, setGameState] = useState('SELECTING');
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [aiResponse, setAiResponse] = useState("Introduce yourself to start the call.");
  
  // Game Logic States
  const [trust, setTrust] = useState(50);
  const [authority, setAuthority] = useState(50);
  const [patience, setPatience] = useState(100);

  // Setup Browser Speech Recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = useRef(new SpeechRecognition());

  useEffect(() => {
    recognition.current.continuous = true;
    recognition.current.interimResults = true;

    recognition.current.onresult = (event) => {
      const current = event.resultIndex;
      const result = event.results[current][0].transcript.toLowerCase();
      setTranscript(result);
      
      // Basic Logic: AI reacts to keywords
      if (result.includes("price") || result.includes("cost")) {
        setTrust(t => t - 5);
        setAiResponse("I'm worried about the investment right now.");
      }
      if (result.includes("value") || result.includes("guarantee")) {
        setTrust(t => t + 10);
        setAiResponse("Tell me more about the results you've seen.");
      }
    };
  }, []);

  const toggleMic = () => {
    if (isListening) {
      recognition.current.stop();
    } else {
      recognition.current.start();
    }
    setIsListening(!isListening);
  };

  const handleStart = () => setGameState('LIVE_CALL');

  if (gameState === 'SELECTING') {
    return <Selector onStart={handleStart} />;
  }

  return (
    <div className="dashboard-container">
      <Header />
      <HUD trust={trust} authority={authority} patience={patience} />
      
      <div className="ai-monitor">
        <div className="live-indicator">
          <div className="dot pulse-red"></div> LIVE SESSION
        </div>
        <div className="pulse"></div>
        <div className="transcript-box">
          <p style={{color: 'white', fontSize: '1.5rem'}}>{aiResponse}</p>
          <hr style={{borderColor: '#1e293b', margin: '20px 0'}} />
          <p>YOU: {transcript || "..."}</p>
        </div>
      </div>

      <div className="controls-row" style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
        <button onClick={toggleMic} className={`mic-btn ${isListening ? 'on' : ''}`}>
          {isListening ? <Mic color="white" /> : <MicOff color="gray" />}
        </button>
        <button onClick={() => window.location.reload()} className="end-btn">
          <PhoneOff />
        </button>
      </div>
    </div>
  );
};

export default App;