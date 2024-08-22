// src/screens/InstantReplayScreen.tsx
import React from 'react';

interface InstantReplayScreenProps {
  gameEvents: any;
  onBackClick: () => void;
  game: {
    gameId: number;
    gameStage: string;
    gameWeek: string;
    gameDate: string;
    homeTeamName: string;
    homeTeamLogo: string;
    awayTeamName: string;
    awayTeamLogo: string;
    homeTeamScore: number;
    awayTeamScore: number;
  };
  showScores: boolean;
  selectedTeam: string;
}

const InstantReplayScreen: React.FC<InstantReplayScreenProps> = ({ gameEvents, onBackClick, game, showScores, selectedTeam }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const isHomeTeam = game.homeTeamName === selectedTeam;
  const opponent = isHomeTeam ? game.awayTeamName : game.homeTeamName;
  const versusSymbol = isHomeTeam ? "vs" : "@";

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Instant Replay Screen</h1>

      {/* Display the game details */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-3xl flex flex-col items-center text-center">
        <div className="flex justify-between items-center mb-2 w-full">
          <div className="w-1/5 flex justify-center">
            <img src={isHomeTeam ? game.homeTeamLogo : game.awayTeamLogo} alt={selectedTeam} className="w-10 h-10" />
          </div>
          <div className="w-3/5 flex flex-col items-center">
            <span className="text-lg">{selectedTeam}</span>
            <span className="text-sm">{versusSymbol}</span>
            <span className="text-lg">{opponent}</span>
          </div>
          <div className="w-1/5 flex justify-center">
            <img src={isHomeTeam ? game.awayTeamLogo : game.homeTeamLogo} alt={opponent} className="w-10 h-10" />
          </div>
        </div>
        <div className="w-full border-b border-black my-2"></div>
        <div className="mt-2">
          <span>{game.gameStage} - {game.gameWeek}</span>
          <span className="block">{formatDate(game.gameDate)}</span>
        </div>
        {showScores && (
          <div className="mt-2">
            <h3 className="text-lg font-bold">Final Score</h3>
            <div className="flex justify-between w-full">
              <span className="p-1">{game.homeTeamName}: {game.homeTeamScore}</span>
              <span className="p-1">{game.awayTeamName}: {game.awayTeamScore}</span>
            </div>
          </div>
        )}
      </div>

      {/* Display the game events */}
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Game Events</h2>
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(gameEvents, null, 2)}</pre>
      </div>
    </div>
  );
};

export default InstantReplayScreen;
