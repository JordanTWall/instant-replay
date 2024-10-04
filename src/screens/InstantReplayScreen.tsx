import React, { useState, useEffect, useRef } from 'react';
import TeamPanel from '../components/TeamPanel';
import GameClock from '../components/GameClock';
import { GameObject, GameEvent, DummyEvent } from '../types/GamaData';
import { gameConstructor } from '../services/gameConstructor';
import { teamColors } from '../styles/teamColors';

interface InstantReplayScreenProps {
  gameEvents: GameEvent[];
  game: GameObject;
}

// Utility function to check if the event is a GameEvent
function isGameEvent(event: GameEvent | DummyEvent): event is GameEvent {
  return 'comment' in event;
}

const InstantReplayScreen: React.FC<InstantReplayScreenProps> = ({ gameEvents, game }) => {
  const [isPaused, setIsPaused] = useState(true);
  const [currentEvent, setCurrentEvent] = useState<GameEvent | DummyEvent | null>(null);
  const [loadedGame, setLoadedGame] = useState<(GameEvent | DummyEvent)[] | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('15:00');
  const [currentHomeScore, setCurrentHomeScore] = useState(game.homeTeamScore);
  const [currentAwayScore, setCurrentAwayScore] = useState(game.awayTeamScore);

  // UseRef to track currentEventIndex outside of state to prevent skipping
  const currentEventIndexRef = useRef(0);

  // Load and construct the game from the provided game events when component mounts
  useEffect(() => {
    const constructedGame = gameConstructor(gameEvents, game.gameStage);
    setLoadedGame(constructedGame);
    setCurrentAwayScore(0);
    setCurrentHomeScore(0);
  }, [gameEvents]);

  const togglePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const resetGame = () => {
    const constructedGame = gameConstructor(gameEvents, game.gameStage);
    setLoadedGame(constructedGame);
    setIsPaused(true);
    setCurrentEvent(null);
    currentEventIndexRef.current = 0;
    setCurrentTime('15:00');
    setCurrentHomeScore(game.homeTeamScore);
    setCurrentAwayScore(game.awayTeamScore);
  };

  // Manage the game clock and events (looping through loadedGame)
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (!isPaused && loadedGame) {
      timer = setInterval(() => {
        const currentEventIndex = currentEventIndexRef.current;
        if (currentEventIndex < loadedGame.length) {
          const event = loadedGame[currentEventIndex];

          // Update the displayed time and event
          setCurrentTime(event.minute);
          setCurrentEvent(event);

          // Check if this is a real game event
          if (isGameEvent(event)) {
            setCurrentHomeScore(event.score.home);
            setCurrentAwayScore(event.score.away);

            // Pause for 3 seconds on a real event
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 3000);
          }

          // Move to the next event
          currentEventIndexRef.current += 1;
        } else {
          clearInterval(timer);
        }
      }, 100); // Run every 100ms to ensure all events are captured

      return () => clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isPaused, loadedGame]);

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <img
        src="src/assets/images/field_home.png"
        alt="Football Field"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <div className="grid grid-cols-[200px_auto_200px] w-full max-w-[80vw] h-[80vh]">
          <TeamPanel
            teamName={game.homeTeamName}
            teamLogo={game.homeTeamLogo}
            teamScore={currentHomeScore}
            gameStage={game.gameStage}
            gameWeek={game.gameWeek}
            teamColors={teamColors[game.homeTeamId]}
          />

          {/* Center Field and GameClock */}
          <div className="relative flex justify-center items-center overflow-visible">
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
              <GameClock
                time={currentTime}
                quarter={currentEvent?.quarter || 'Loading...'}
                togglePause={togglePause}
              />
            </div>
          </div>

          <TeamPanel
            teamName={game.awayTeamName}
            teamLogo={game.awayTeamLogo}
            teamScore={currentAwayScore}
            gameStage={game.gameStage}
            gameWeek={game.gameWeek}
            teamColors={teamColors[game.awayTeamId]}
          />
        </div>

        {/* Reset Button */}
        <button
          onClick={resetGame}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 z-20"        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default InstantReplayScreen;

