import React from 'react';
import TeamPanel from './TeamPanel'; // Import the new TeamPanel component
import GameClock from './GameClock'; // Import the GameClock component

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
  const handleQuarterEnd = (newQuarter: number) => {
    console.log(`Quarter ${newQuarter} started`);
  };

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
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <GameClock onQuarterEnd={handleQuarterEnd} />
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
    </div>
  );
};

export default Scoreboard;
