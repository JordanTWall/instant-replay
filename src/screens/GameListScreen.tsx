// src/screens/GameListScreen.tsx
import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import exampleGameData from '../assets/data/exampleGameData.json';
import { GameResponse, ExampleGameData } from '../types/GamaData';

interface GameListScreenProps {
  onBackClick: () => void;
  selectedTeam: string;
}

const GameListScreen: React.FC<GameListScreenProps> = ({ onBackClick, selectedTeam }) => {
  const [showScores, setShowScores] = useState(false);

  const toggleScores = () => {
    setShowScores(!showScores);
  };

  const data: ExampleGameData = exampleGameData as ExampleGameData;
  const games: GameResponse[] = data.response;

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      <button
        onClick={onBackClick}
        className="bg-red-600 text-white px-6 py-3 my-4 rounded-lg text-xl hover:bg-red-700 transition duration-300"
      >
        Back
      </button>
      <button
        onClick={toggleScores}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {showScores ? 'Hide Final Scores' : 'Show Final Scores'}
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {games.map((game, index) => (
          <GameCard key={index} game={game} showScores={showScores} selectedTeam={selectedTeam} />
        ))}
      </div>
    </div>
  );
};

export default GameListScreen;
