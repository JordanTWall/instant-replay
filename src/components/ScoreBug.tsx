import React from 'react';

interface TeamProps {
  name: string;
  logo: string;
  score: number;
  colors: {
    background: string;
    text: string;
  };
}

interface ScoreBugProps {
  homeTeam: TeamProps;
  awayTeam: TeamProps;
  currentTime: string;
  currentQuarter: string;
  isPaused: boolean; // New prop to control whether the game is paused or playing
  onPauseToggle: () => void;
  onReset: () => void;
}

const ScoreBug: React.FC<ScoreBugProps> = ({
  homeTeam,
  awayTeam,
  currentTime,
  currentQuarter,
  isPaused, // Destructure the new isPaused prop
  onPauseToggle,
  onReset,
}) => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[600px] h-[100px] grid grid-cols-6 gap-0 border-2 border-white rounded">
      {/* Column 1 - Home Team Logo */}
      <div
        className="col-span-1 flex justify-center items-center"
        style={{ backgroundColor: homeTeam.colors.background }}
      >
        <img src={homeTeam.logo} alt={`${homeTeam.name} Logo`} className="w-[90px] h-[90px]" />
      </div>

      {/* Column 2 - Home Team Score */}
      <div
        className="col-span-1 flex justify-center items-center text-white text-6xl font-extrabold"
        style={{ backgroundColor: homeTeam.colors.background, color: homeTeam.colors.text }}
      >
        {homeTeam.score}
      </div>

      {/* Column 3 - Time and Play/Pause */}
      <div className="col-span-1 grid grid-rows-2 bg-black text-white text-center" dir="ltr">
        <div className="flex justify-center items-center row-span-1 text-2xl border-s-4 border-b-1 bg-white text-black font-bold">
          {currentQuarter}
        </div>
        <div className="flex justify-center items-center row-span-1 text-2xl border-s-4">
          <button onClick={onPauseToggle} className="bg-yellow-500 text-black px-2 py-1 rounded">
            <img
              src={isPaused ? 'src/assets/images/play-white.svg' : 'src/assets/images/pause-black.svg'}
              alt={isPaused ? 'play button' : 'pause button'}
              className="w-8 h-8"
            />
          </button>
        </div>
      </div>

      {/* Column 4 - Time and Reset */}
      <div className="col-span-1 grid grid-rows-2 bg-black text-white text-center" dir="rtl">
        <div className="flex justify-center items-center row-span-1 text-2xl border-s-4 border-b-1 bg-white text-black font-bold">
          {currentTime}
        </div>
        <div className="flex justify-center items-center row-span-1 text-2xl border-s-4">
          <button onClick={onReset} className="bg-red-500 text-white px-2 py-1 rounded">
            <img src="src/assets/images/reset-white.svg" alt="reset button" className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Column 5 - Away Team Score */}
      <div
        className="col-span-1 flex justify-center items-center text-6xl font-extrabold"
        style={{ backgroundColor: awayTeam.colors.background, color: awayTeam.colors.text }}
      >
        {awayTeam.score}
      </div>

      {/* Column 6 - Away Team Logo */}
      <div
        className="col-span-1 flex justify-center items-center"
        style={{ backgroundColor: awayTeam.colors.background }}
      >
        <img src={awayTeam.logo} alt={`${awayTeam.name} Logo`} className="w-[90px] h-[90px]" />
      </div>
    </div>
  );
};

export default ScoreBug;
