// src/components/ScoreBug.tsx
import React from 'react';

interface TeamInfo {
  name: string;
  logo: string;
  score: number;
  colors: {
    background: string;
    text: string;
  };
}

interface ScoreBugProps {
  homeTeam: TeamInfo;
  awayTeam: TeamInfo;
  currentTime: string;
  currentQuarter: string;
  onPauseToggle: () => void;
  onReset: () => void;
  isUserPaused: boolean;
}

const ScoreBug: React.FC<ScoreBugProps> = ({
  homeTeam,
  awayTeam,
  currentTime,
  currentQuarter,
  onPauseToggle,
  onReset,
  isUserPaused,
}) => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-11/12 max-w-3xl bg-gray-900 text-white flex items-center justify-between px-5 py-3 rounded-lg shadow-lg z-50">
      <div className="flex items-center px-3 py-2 rounded-lg" style={{ backgroundColor: homeTeam.colors.background }}>
        <img src={homeTeam.logo} alt={`${homeTeam.name} Logo`} className="w-16 h-16 mr-3" />
        <div className="text-center">
          <div className="font-bold text-lg">{homeTeam.name}</div>
          <div className="text-2xl font-bold" style={{ color: homeTeam.colors.text }}>
            {homeTeam.score}
          </div>
        </div>
      </div>

      <div className="flex-1 text-center">
        <div className="font-bold">{currentQuarter}</div>
        <div>{currentTime}</div>
      </div>

      <div className="flex items-center px-3 py-2 rounded-lg" style={{ backgroundColor: awayTeam.colors.background }}>
        <div className="text-center mr-3">
          <div className="font-bold text-lg">{awayTeam.name}</div>
          <div className="text-2xl font-bold" style={{ color: awayTeam.colors.text }}>
            {awayTeam.score}
          </div>
        </div>
        <img src={awayTeam.logo} alt={`${awayTeam.name} Logo`} className="w-16 h-16" />
      </div>

      <div className="ml-5 flex flex-col">
        <button
          onClick={onPauseToggle}
          className={`mb-2 px-4 py-2 rounded text-white font-bold ${
            isUserPaused ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {isUserPaused ? 'Play' : 'Pause'}
        </button>
        <button onClick={onReset} className="px-4 py-2 rounded text-white font-bold bg-yellow-500">
          Reset
        </button>
      </div>
    </div>
  );
};

export default ScoreBug;
