import React, { useState, useEffect } from 'react';

interface GameClockProps {
  onQuarterEnd?: (currentQuarter: number) => void; // Optional callback for when a quarter ends
}

const GameClock: React.FC<GameClockProps> = ({ onQuarterEnd }) => {
  const [time, setTime] = useState(900); // 15 minutes in seconds (900 seconds)
  const [quarter, setQuarter] = useState(1);

  useEffect(() => {
    // Timer runs every second (1000ms)
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1; // Decrease time by 1 second
        } else {
          // Move to the next quarter
          setQuarter((prevQuarter) => {
            if (prevQuarter < 4) {
              setTime(900); // Reset time for the next quarter
              onQuarterEnd && onQuarterEnd(prevQuarter + 1); // Trigger callback if provided
              return prevQuarter + 1;
            } else {
              clearInterval(timer); // End the timer after the 4th quarter
              return prevQuarter;
            }
          });
          return 0; // Keep time at 0 until the next quarter starts
        }
      });
    }, 1000 / 30); // Speed up: 1 second real-time = 30 game seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [onQuarterEnd]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-black text-white text-lg rounded-lg p-2">
      <p className="text-yellow-300">
        Quarter {quarter} - {formatTime(time)}
      </p>
    </div>
  );
};

export default GameClock;
