import React, { useState } from 'react';
import TeamPanel from './TeamPanel';
import GameClock from './GameClock';
import { GameEvent } from '../types/GamaData';

interface ScoreboardProps {
  homeTeamName: string;
  homeTeamLogo: string;
  homeTeamScore: number;
  awayTeamName: string;
  awayTeamLogo: string;
  awayTeamScore: number;
  gameStage: string;
  gameWeek: string;
  gameDate: string;
  homeTeamColors: { background: string; text: string };
  awayTeamColors: { background: string; text: string };
  gameEvents: GameEvent[]; // Game events are part of the props
  isPaused: boolean; // Centralized state
  togglePause: () => void; // Centralized function
  time: string; // Current time in MM:SS format
  quarter: string; // Current quarter
}

const Scoreboard: React.FC<ScoreboardProps> = ({
  homeTeamName,
  homeTeamLogo,
  homeTeamScore,
  awayTeamName,
  awayTeamLogo,
  awayTeamScore,
  gameStage,
  gameWeek,
  gameDate,
  homeTeamColors,
  awayTeamColors,
  gameEvents,
  isPaused,
  togglePause,
  time, // Now passed as a prop
  quarter, // Now passed as a prop
}) => {
  const [currentEvent, setCurrentEvent] = useState<GameEvent | null>(null);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <div className="grid grid-cols-[200px_auto_200px] w-full max-w-[80vw] h-[80vh]">
        {/* Home Team Panel */}
        <TeamPanel
          teamName={homeTeamName}
          teamLogo={homeTeamLogo}
          teamScore={homeTeamScore}
          gameStage={gameStage}
          gameWeek={gameWeek}
          teamColors={homeTeamColors}
        />

        {/* Center Field and GameClock */}
        <div className="relative flex justify-center items-center overflow-visible">
          <img
            src="src/assets/images/field_home.png"
            alt="Football Field"
            className="max-w-full max-h-full object-contain"
          />
          <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <GameClock
              time={time} // Pass the current time from the parent
              quarter={quarter} // Pass the current quarter from the parent
              togglePause={togglePause} // Pass the centralized togglePause function
            />
          </div>
        </div>

        {/* Away Team Panel */}
        <TeamPanel
          teamName={awayTeamName}
          teamLogo={awayTeamLogo}
          teamScore={awayTeamScore}
          gameStage={gameStage}
          gameWeek={gameWeek}
          teamColors={awayTeamColors}
        />
      </div>

      {/* Display the current event */}
      {currentEvent && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white text-black p-4 rounded-lg shadow-lg">
          <p>{currentEvent.comment}</p>
          <p>{currentEvent.score.home} - {currentEvent.score.away}</p>
        </div>
      )}
    </div>
  );
};

export default Scoreboard;
