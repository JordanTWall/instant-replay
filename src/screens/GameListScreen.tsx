import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import BackButton from '../components/BackButton';

interface GameListScreenProps {
  onBackClick: () => void;
  selectedTeam: string;
  selectedSeason: number;
  onGameClick: (game: any) => void;
  games: any[]; 
}

const GameListScreen: React.FC<GameListScreenProps> = ({ onBackClick, selectedTeam, selectedSeason, onGameClick, games }) => {
  const [showScores, setShowScores] = useState(false);

  const toggleScores = () => {
    setShowScores(!showScores);
  };

  return (
    
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-[#b8f7fc]">
  <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
    <BackButton onClick={onBackClick} />

    <button
      onClick={toggleScores}
      className="bg-blue-500 text-white px-4 py-2 rounded mb-10 my-10 hover:bg-sky-400"
    >
      {showScores ? 'Hide Final Scores' : 'Show Final Scores'}
    </button>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
  {games
    .slice()
    .sort((a, b) => new Date(a.gameDate).getTime() - new Date(b.gameDate).getTime())
    .map((game, index) => (
      <GameCard
        key={index}
        game={game}
        showScores={showScores}
        selectedTeam={selectedTeam}
        onClick={() => onGameClick(game)}
      />
    ))}
</div>

  </div>
</div>

  );
};

export default GameListScreen;
