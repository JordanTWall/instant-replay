// src/screens/InstantReplayScreen.tsx
import React from 'react';
import Scoreboard from '../components/Scoreboard';
import { teamColors } from '../styles/teamColors'; // Import the TypeScript-based color key

interface InstantReplayScreenProps {
  gameEvents: any;
  onBackClick: () => void;
  game: {
    gameId: number;
    gameStage: string;
    gameWeek: string;
    gameDate: string;
    homeTeamId: number; // Ensure this is a number type
    homeTeamName: string;
    homeTeamLogo: string;
    awayTeamId: number; // Ensure this is a number type
    awayTeamName: string;
    awayTeamLogo: string;
    homeTeamScore: number;
    awayTeamScore: number;
  };
  showScores: boolean;
  selectedTeam: string;
}

const InstantReplayScreen: React.FC<InstantReplayScreenProps> = ({
  gameEvents,
  onBackClick,
  game,
  showScores,
  selectedTeam,
}) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Access team colors using the team IDs
  const homeTeamColors = teamColors[game.homeTeamId];
  const awayTeamColors = teamColors[game.awayTeamId];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Instant Replay Screen</h1>

      {/* Render Scoreboard with dynamic colors */}
      <Scoreboard
        homeTeamName={game.homeTeamName}
        homeTeamLogo={game.homeTeamLogo}
        homeTeamScore={game.homeTeamScore}
        awayTeamName={game.awayTeamName}
        awayTeamLogo={game.awayTeamLogo}
        awayTeamScore={game.awayTeamScore}
        gameStage={game.gameStage}
        gameWeek={game.gameWeek}
        gameDate={formatDate(game.gameDate)}
        homeTeamColors={homeTeamColors}
        awayTeamColors={awayTeamColors}
      />

      {/* Display the game events */}
      <div className="w-full max-w-3xl mt-4">
        <h2 className="text-2xl font-bold mb-4">Game Events</h2>
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(gameEvents, null, 2)}</pre>
      </div>

      <button onClick={onBackClick} className="bg-red-600 text-white px-6 py-3 rounded-lg mt-4">
        Back
      </button>
    </div>
  );
};

export default InstantReplayScreen;
