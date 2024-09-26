// src/services/GameManager.tsx
import React, { useState, useEffect } from 'react';
import { GameEvent } from '../types/GamaData';

interface GameManagerProps {
  gameEvents: GameEvent[]; // Array of GameEvent objects
  onEventTrigger?: (event: GameEvent) => void;
  onTimeUpdate: (time: string, quarter: string) => void; // For updating the time display
  isPaused: boolean; // Controls whether the game clock is paused
  togglePause: () => void; // Toggle pause function
}

const quarters = ['First', 'End of First', 'Second', 'HalfTime', 'Third', 'End of Third', 'Fourth'];

const GameManager: React.FC<GameManagerProps> = ({ gameEvents, onEventTrigger, onTimeUpdate, isPaused, togglePause }) => {
  const [time, setTime] = useState(0); // Time in seconds
  const [quarterIndex, setQuarterIndex] = useState(0); // Tracks the current quarter
  const [eventIndex, setEventIndex] = useState(0); // Tracks the current event being processed
  const [eventTriggered, setEventTriggered] = useState(false); // Tracks if we should pause on an event

  useEffect(() => {
    // Only run the game clock when not paused
    if (!isPaused && quarterIndex < 6 && gameEvents.length > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;

          if (eventIndex < gameEvents.length) {
            const currentEvent = gameEvents[eventIndex];

            // Check if the current event matches the time and quarter
            if (currentEvent.quarter === quarters[quarterIndex] && formatTime(newTime) === currentEvent.minute) {
              onEventTrigger && onEventTrigger(currentEvent);
              setEventTriggered(true);
              setTimeout(() => {
                setEventTriggered(false);
                setEventIndex((prevIndex) => prevIndex + 1);  // Move to the next event
              }, 2000); // Simulate event pause
            }
          }

          // Stop the clock at the end of the Fourth quarter (15:00)
          if (quarterIndex === 6 && newTime >= 900) {
            clearInterval(timer); // Stop the timer after Fourth quarter
            onTimeUpdate(formatTime(900), quarters[quarterIndex]); // Stay at 15:00
            return 900;
          }

          // If time reaches 15 minutes (900 seconds), move to the next quarter
          if (newTime >= 900 && quarterIndex < 5) {
            setQuarterIndex((prev) => prev + 1);
            return 0; // Reset time for the next quarter
          }

          onTimeUpdate(formatTime(newTime), quarters[quarterIndex]);
          return newTime;
        });
      }, 1000 / 200); // Accelerate the game clock

      return () => clearInterval(timer);
    }
  }, [isPaused, time, quarterIndex, gameEvents, onEventTrigger, eventTriggered, eventIndex]);

  // Format time to MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return null; // This component only manages the game state, no rendering needed
};

export default GameManager;
