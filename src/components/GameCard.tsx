// src/components/GameCard.tsx
import React from 'react';

interface GameCardProps {
  game: any;
  showScores: boolean;
  selectedTeam: string;
}

const GameCard: React.FC<GameCardProps> = ({ game, showScores, selectedTeam }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const isHomeTeam = game.teams.home.name === selectedTeam;
  const opponent = isHomeTeam ? game.teams.away : game.teams.home;
  const versusSymbol = isHomeTeam ? "vs" : "@";

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-3xl flex flex-col items-center text-center cursor-pointer hover:bg-gray-200 transition-colors">
      <div className="flex justify-between items-center mb-2 w-full ">
        <div className="w-1/5 flex justify-center">
          <img src={isHomeTeam ? game.teams.home.logo : game.teams.away.logo} alt={selectedTeam} className="w-10 h-10" />
        </div>
        <div className="w-3/5 flex flex-col items-center">
          <span className="text-lg">{selectedTeam}</span>
          <span className="text-sm">{versusSymbol}</span>
          <span className="text-lg">{opponent.name}</span>
        </div>
        <div className="w-1/5 flex justify-center">
          <img src={opponent.logo} alt={opponent.name} className="w-10 h-10" />
        </div>
      </div>
      <div className="w-full border-b border-black my-2"></div>
      <div className="mt-2">
        <span>{game.game.stage} - {game.game.week}</span>
        <span className="block">{formatDate(game.game.date.date)}</span>
      </div>
      {showScores && (
        <>
          <div className="w-full my-2"></div>
          <div className="mt-2">
            <h3 className="text-lg font-bold">Final Score</h3>
            <div className="flex justify-between w-full">
              <span className='p-1'>{game.teams.home.name}: <br />{game.scores.home.total}</span>
              <span className='p-1'>{game.teams.away.name}: <br />{game.scores.away.total} </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GameCard;
