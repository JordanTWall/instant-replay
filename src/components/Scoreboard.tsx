// src/components/Scoreboard.tsx
import React from 'react';

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
}) => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <div className="grid grid-cols-[200px_auto_200px] w-full max-w-[80vw] h-[80vh]">
        {/* Home Team Panel */}
        <div
          className="flex flex-col justify-start items-center p-4"
          style={{ backgroundColor: homeTeamColors.background, color: homeTeamColors.text }}
        >
          <img src={homeTeamLogo} alt={`${homeTeamName} Logo`} className="w-24 h-24 mb-2" />
          <h2 className="text-xl font-bold mb-2 text-center">{homeTeamName}</h2>
          <h1 className="text-4xl font-bold mb-4">{homeTeamScore}</h1>
          <div className="bg-blue-600 rounded-lg p-4 mt-4 text-center">
            <p>{`${gameStage} - ${gameWeek}`}</p>
          </div>
        </div>

        {/* Center Field and Notifications */}
        <div className="relative flex justify-center items-center overflow-visible">
          <img
            src="src/assets/images/field_home.png"
            alt="Football Field"
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white text-lg rounded-lg p-2">
            <p>{gameDate}</p>
          </div>
        </div>

        {/* Away Team Panel */}
        <div
          className="flex flex-col justify-start items-center p-4"
          style={{ backgroundColor: awayTeamColors.background, color: awayTeamColors.text }}
        >
          <img src={awayTeamLogo} alt={`${awayTeamName} Logo`} className="w-24 h-24 mb-2" />
          <h2 className="text-xl font-bold mb-2 text-center">{awayTeamName}</h2>
          <h1 className="text-4xl font-bold mb-4">{awayTeamScore}</h1>
          <div className="bg-blue-600 rounded-lg p-4 mt-4 text-center">
            <p>{`${gameStage} - ${gameWeek}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
