import { useState } from 'react';

export const useGameLogic = (difficulty) => {
  const [trust, setTrust] = useState(30);
  const [authority, setAuthority] = useState(30);
  const [patience, setPatience] = useState(difficulty?.patience || 100);

  const processMove = (trustGain, authGain) => {
    setTrust(prev => Math.min(100, prev + (trustGain * difficulty.trustImpact)));
    setAuthority(prev => Math.min(100, prev + (authGain * difficulty.authorityImpact)));
    setPatience(prev => prev - 10);
  };

  return { trust, authority, patience, processMove };
};