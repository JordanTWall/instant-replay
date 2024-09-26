import React, { useState, useEffect } from 'react';
import Scoreboard from '../components/Scoreboard';
import { GameObject, GameEvent, DummyEvent, LoadedGame } from '../types/GamaData';
import { gameConstructor } from '../services/gameConstructor'; // Import the gameConstructor function
import { teamColors } from '../styles/teamColors';

interface InstantReplayScreenProps {
  gameEvents: GameEvent[];
  game: GameObject;
}

// Utility function to check if the event is a GameEvent
function isGameEvent(event: DummyEvent | GameEvent): event is GameEvent {
  return 'comment' in event; // If the event has a comment, it's a GameEvent
}

const InstantReplayScreen: React.FC<InstantReplayScreenProps> = ({ gameEvents, game }) => {
  const [isPaused, setIsPaused] = useState(true); // Initially paused
  const [currentQuarterIndex, setCurrentQuarterIndex] = useState(0); // Track the current quarter index
  const [currentEventIndex, setCurrentEventIndex] = useState(0); // Track index of the current event in the loadedGame
  const [currentEvent, setCurrentEvent] = useState<GameEvent | null>(null); // The current event happening
  const [loadedGame, setLoadedGame] = useState<LoadedGame | null>(null); // The constructed game
  const [currentTime, setCurrentTime] = useState<string>('15:00'); // Track current time display
  
  // Load and construct the game from the provided game events when component mounts
  useEffect(() => {
    const constructedGame = gameConstructor(gameEvents, game.gameStage); // Construct the game using the gameConstructor function
    setLoadedGame(constructedGame); // Set the constructed game to state
    console.log('Loaded Game constructed:', constructedGame);
  }, [gameEvents]);

  // Toggle pause/resume of the game clock
  const togglePause = () => {
    setIsPaused((prevIsPaused) => {
      const newPauseState = !prevIsPaused;
      console.log(`Pause state toggled. Now: ${newPauseState ? 'Paused' : 'Running'}`);
      return newPauseState;
    });
  };

  // Reset the game
  const resetGame = () => {
    console.log('Game reset.');
    const constructedGame = gameConstructor(gameEvents, game.gameStage);
    setLoadedGame(constructedGame); // Reload the game data
    setIsPaused(true); // Pause the timer
    setCurrentQuarterIndex(0); // Reset to the first quarter
    setCurrentEvent(null); // Clear current event
    setCurrentEventIndex(0); // Reset the event index
    setCurrentTime('15:00'); // Reset the display to the initial time
    console.log('Game reloaded:', constructedGame);
  };

  // Manage the game clock and events (looping through loadedGame)
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (!isPaused && loadedGame) {
      timer = setInterval(() => {
        const currentQuarterData = loadedGame[currentQuarterIndex]; // Get the current quarter data

        if (currentEventIndex < currentQuarterData.length) {
          const eventsInMinute = currentQuarterData[currentEventIndex]; // Get the current minute's events

          // Loop through all events in the current minute
          eventsInMinute.forEach((event) => {
            setCurrentTime(event.minute); // Set the time to be displayed

            // Check if this is a real game event or a dummy event
            if (isGameEvent(event)) {
              console.log(`Game Event: ${event.comment}`);
              setCurrentEvent(event); // Display the game event
              setIsPaused(true); // Pause for 3 seconds on a real event
              setTimeout(() => {
                setIsPaused(false); // Resume after 3 seconds
              }, 3000);
            } else {
              console.log(`Dummy Event at ${event.minute}`);
            }
          });

          // Move to the next minute
          setCurrentEventIndex((prevIndex) => prevIndex + 1);
        } else {
          // Move to the next quarter if all events in the current quarter have been processed
          if (currentQuarterIndex < loadedGame.length - 1) {
            setCurrentQuarterIndex((prevQuarter) => prevQuarter + 1);
            setCurrentEventIndex(0); // Reset the index for the new quarter
            console.log(`Quarter transitioned to ${loadedGame[currentQuarterIndex + 1][0][0].quarter}`);
          } else {
            console.log('Reached the end of the game. Stopping.');
            clearInterval(timer); // Stop the game at the end
          }
        }
      }, 100); // Fast clock, move through events quickly

      return () => {
        clearInterval(timer);
        console.log('Clearing the timer.');
      };
    }

    return () => clearInterval(timer);
  }, [isPaused, currentQuarterIndex, currentEventIndex, loadedGame]);

  return (
    <div className="flex flex-col items-center">
      {/* Reset button */}
      <button
        onClick={resetGame}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
      >
        Reset Game
      </button>

      {/* Display game time */}
      <h1 className="text-3xl font-bold mb-4">
        {loadedGame ? loadedGame[currentQuarterIndex][0][0].quarter : 'Loading...'} Quarter - {currentTime}
      </h1>

      {/* Pass the event's minute directly to Scoreboard */}
      <Scoreboard
        homeTeamName={game.homeTeamName}
        homeTeamLogo={game.homeTeamLogo}
        homeTeamScore={game.homeTeamScore}
        awayTeamName={game.awayTeamName}
        awayTeamLogo={game.awayTeamLogo}
        awayTeamScore={game.awayTeamScore}
        gameStage={game.gameStage}
        gameWeek={game.gameWeek}
        gameDate={game.gameDate}
        homeTeamColors={teamColors[game.homeTeamId]}
        awayTeamColors={teamColors[game.awayTeamId]}
        gameEvents={gameEvents}
        time={currentTime} // Use the current time
        quarter={loadedGame ? loadedGame[currentQuarterIndex][0][0].quarter : 'Loading...'} // Pass the current quarter
        isPaused={isPaused}
        togglePause={togglePause}
      />
    </div>
  );
};

export default InstantReplayScreen;
