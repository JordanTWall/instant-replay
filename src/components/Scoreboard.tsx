import React from 'react';

const Scoreboard = () => {
  return (
    <div className="grid grid-cols-[200px_1fr_200px] aspect-[5/3] w-full bg-black">
      {/* Home Team Panel */}
      <div className="flex flex-col justify-center items-center bg-gray-900 text-white p-4">
        <img src="/path/to/home-team-logo.png" alt="Home Team" className="w-24 h-24 mb-5" />
        <h2 className="text-xl font-bold">Pittsburgh Steelers</h2>
        <div className="bg-blue-600 rounded-lg p-4 mt-4 text-center">
          <h1 className="text-4xl font-bold">21</h1>
          <p>Chris Boswell 41 Yd Field Goal</p>
        </div>
      </div>

      {/* Center Field and Notifications */}
      <div className="relative flex justify-center items-center">
        <img src="/path/to/football-field.png" alt="Football Field" className="max-w-full max-h-full object-contain" />
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white text-lg rounded-lg p-2">
          <p>Fourth 10:25</p>
        </div>
      </div>

      {/* Away Team Panel */}
      <div className="flex flex-col justify-center items-center bg-red-800 text-white p-4">
        <img src="/path/to/away-team-logo.png" alt="Away Team" className="w-24 h-24 mb-5" />
        <h2 className="text-xl font-bold">New York Giants</h2>
        <div className="bg-blue-600 rounded-lg p-4 mt-4 text-center">
          <h1 className="text-4xl font-bold">14</h1>
          <p>Darius Slayton 41 Yd pass from Daniel Jones (Graham Gano Kick)</p>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
