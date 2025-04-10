import React from 'react';

interface GameClockProps {
  time: string; 
  quarter: string; 
  togglePause: () => void; 
}
const GameClock: React.FC<GameClockProps> = ({ time, quarter, togglePause }) => {
    return (
      <div
        className="bg-black text-white text-lg rounded-lg p-2 cursor-pointer pointer-events-auto"
        onClick={() => {
          console.log("GameClock clicked"); 
          togglePause();
        }}
      >
        <p className="text-yellow-300">
          {quarter} Quarter - {time}
        </p>
      </div>
    );
  };
  
  
  
export default GameClock;
