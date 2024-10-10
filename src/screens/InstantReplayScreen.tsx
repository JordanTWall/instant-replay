import React, { useState, useEffect, useRef } from 'react';
import { GameObject, GameEvent, DummyEvent } from '../types/GamaData';
import { gameConstructor } from '../services/gameConstructor';
import { teamColors } from '../styles/teamColors';
import ScoreBug from '../components/ScoreBug'; 
import HomeFieldBackground from '../components/HomeFieldBackground'; 
import AwayFieldBackground from '../components/AwayFieldBackground'; 

interface InstantReplayScreenProps {
  gameEvents: GameEvent[];
  game: GameObject;
}

// Utility function to check if the event is a GameEvent
function isGameEvent(event: GameEvent | DummyEvent): event is GameEvent {
  return 'comment' in event;
}

// Function to convert quarters to ordinal numbers
const convertQuarterToOrdinal = (quarter: string): string => {
  switch (quarter.toLowerCase()) {
    case 'first':
      return '1st';
    case 'second':
      return '2nd';
    case 'third':
      return '3rd';
    case 'fourth':
      return '4th';
    case 'overtime':
      return 'OT';
    default:
      return quarter;
  }
};

const InstantReplayScreen: React.FC<InstantReplayScreenProps> = ({ gameEvents, game }) => {
  const [isPaused, setIsPaused] = useState(true);
  const [currentEvent, setCurrentEvent] = useState<GameEvent | DummyEvent | null>(null);
  const [loadedGame, setLoadedGame] = useState<(GameEvent | DummyEvent)[] | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('15:00');
  const [currentHomeScore, setCurrentHomeScore] = useState(game.homeTeamScore);
  const [currentAwayScore, setCurrentAwayScore] = useState(game.awayTeamScore);
  const [fieldBackground, setFieldBackground] = useState<JSX.Element>(
    <HomeFieldBackground fill={teamColors[game.homeTeamId].background} />
  );

  const currentEventIndexRef = useRef(0);

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
    setCurrentAwayScore(0);
    setCurrentHomeScore(0);
    setFieldBackground(<HomeFieldBackground fill={teamColors[game.homeTeamId].background} />);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (!isPaused && loadedGame) {
      timer = setInterval(() => {
        const currentEventIndex = currentEventIndexRef.current;
        if (currentEventIndex < loadedGame.length) {
          const event = loadedGame[currentEventIndex];
          setCurrentTime(event.minute);
          setCurrentEvent(event);

          if (isGameEvent(event)) {
            setCurrentHomeScore(event.score.home);
            setCurrentAwayScore(event.score.away);

            // Set field background dynamically based on the scoring team
            if (event.team.id === game.homeTeamId) {
              // Home team scored, use home field background
              setFieldBackground(<HomeFieldBackground fill={teamColors[game.awayTeamId].background} />);
            } else if (event.team.id === game.awayTeamId) {
              // Away team scored, use away field background
              setFieldBackground(<AwayFieldBackground fill={teamColors[game.homeTeamId].background} />);
            }

            // Pause for 3 seconds on a real event
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 3000);
          }

          currentEventIndexRef.current += 1;
        } else {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isPaused, loadedGame, game.homeTeamId, game.awayTeamId]);

  const currentQuarterOrdinal = convertQuarterToOrdinal(currentEvent?.quarter || 'First');

  return (
    <div className="relative h-screen bg-black">
      {/* Dynamic Football Field with Team Colors */}
      {fieldBackground}

      {/* ScoreBug Component */}
      <ScoreBug
        homeTeam={{
          name: game.homeTeamName,
          logo: game.homeTeamLogo,
          score: currentHomeScore,
          colors: teamColors[game.homeTeamId]
        }}
        awayTeam={{
          name: game.awayTeamName,
          logo: game.awayTeamLogo,
          score: currentAwayScore,
          colors: teamColors[game.awayTeamId]
        }}
        currentTime={currentTime}
        currentQuarter={currentQuarterOrdinal}
        onPauseToggle={togglePause}
        onReset={resetGame}
        isPaused={isPaused}
      />
    </div>
  );
};

export default InstantReplayScreen;
