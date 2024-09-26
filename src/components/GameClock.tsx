import React from 'react';

interface GameClockProps {
  time: string; // Display time in MM:SS format
  quarter: string; // Current quarter
  togglePause: () => void; // The function to toggle pause/play
}
const GameClock: React.FC<GameClockProps> = ({ time, quarter, togglePause }) => {
    return (
      <div
        className="bg-black text-white text-lg rounded-lg p-2 cursor-pointer pointer-events-auto"
        onClick={() => {
          console.log("GameClock clicked"); // Add a log to verify the click
          togglePause(); // Ensure this is called
        }}
      >
        <p className="text-yellow-300">
          {quarter} Quarter - {time}
        </p>
      </div>
    );
  };
  
  
  
export default GameClock;
