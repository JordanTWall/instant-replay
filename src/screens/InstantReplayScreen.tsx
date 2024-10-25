// src/screens/InstantReplayScreen.tsx
import React, { useState, useEffect, useRef } from 'react';
import { GameObject, GameEvent, DummyEvent } from '../types/GamaData';
import { gameConstructor } from '../services/gameConstructor';
import { teamColors } from '../styles/teamColors';
import ScoreBug from '../components/ScoreBug';
import HomeFieldBackground from '../components/HomeFieldBackground';
import AwayFieldBackground from '../components/AwayFieldBackground';
import AnimationContainer from '../components/AnimationContainer';
import TestButton from '../components/TestButton';
import BackButton from '../components/BackButton';

interface InstantReplayScreenProps {
  gameEvents: GameEvent[];
  game: GameObject;
}

// Utility function to check if the event is a GameEvent
function isGameEvent(event: GameEvent | DummyEvent): event is GameEvent {
  return 'comment' in event && 'team' in event && 'player' in event;
}

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
  const animationContainerRef = useRef<any>(null);
  const currentEventIndexRef = useRef(0);

  useEffect(() => {
    const constructedGame = gameConstructor(gameEvents, game.gameStage);
    setLoadedGame(constructedGame);
    setCurrentAwayScore(0);
    setCurrentHomeScore(0);
  }, [gameEvents]);

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

  const triggerTouchdownAnimation = (event: GameEvent): Promise<void> => {
    return new Promise((resolve) => {
      if (animationContainerRef.current) {
        const isHomeTeam = event.team.id === game.homeTeamId;
  
        // Start the animation and use the `onComplete` callback to resolve the Promise
        animationContainerRef.current.startAnimation({
          backgroundColor: isHomeTeam ? teamColors[game.homeTeamId].background : teamColors[game.awayTeamId].background,
          textColor: isHomeTeam ? teamColors[game.homeTeamId].text : teamColors[game.awayTeamId].text,
          playerImg: event.player.image,
          comment: event.comment,
          logo: event.team.logo,
          direction: isHomeTeam ? 'home' : 'away',
        });
  
        // Use a GSAP delayed call or timeline event to resolve the Promise after the animation duration
        gsap.delayedCall(3, resolve); // Assume the animation lasts for 3 seconds
      } else {
        resolve(); // Resolve immediately if the animation container is not available
      }
    });
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
  
            if (event.team.id === game.homeTeamId) {
              setFieldBackground(<HomeFieldBackground fill={teamColors[game.awayTeamId].background} />);
            } else if (event.team.id === game.awayTeamId) {
              setFieldBackground(<AwayFieldBackground fill={teamColors[game.homeTeamId].background} />);
            }
  
            // Trigger the animation and pause the game
            setIsPaused(true);
            triggerTouchdownAnimation(event);
           
  
            // Resume the game after 3 seconds (animation duration)
            setTimeout(() => {
              setIsPaused(false);
            }, 5000);
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
    <div className="relative h-screen bg-black overflow-hidden" >
      {fieldBackground}

      {/* Conditionally render AnimationContainer if currentEvent is a GameEvent */}
      {currentEvent && isGameEvent(currentEvent) && (
  <AnimationContainer
    ref={animationContainerRef}
    backgroundColor={currentEvent.team.id === game.homeTeamId 
      ? teamColors[game.homeTeamId].background 
      : teamColors[game.awayTeamId].background}
    textColor={currentEvent.team.id === game.homeTeamId 
      ? teamColors[game.homeTeamId].text 
      : teamColors[game.awayTeamId].text}
    playerImg={currentEvent.player.image}
    comment={currentEvent.comment}
    logo={currentEvent.team.logo}
    direction={currentEvent.team.id === game.homeTeamId ? 'home' : 'away'}
  />
)}

      <ScoreBug
        homeTeam={{
          name: game.homeTeamName,
          logo: game.homeTeamLogo,
          score: currentHomeScore,
          colors: teamColors[game.homeTeamId],
        }}
        awayTeam={{
          name: game.awayTeamName,
          logo: game.awayTeamLogo,
          score: currentAwayScore,
          colors: teamColors[game.awayTeamId],
        }}
        currentTime={currentTime}
        currentQuarter={currentQuarterOrdinal}
        onPauseToggle={() => setIsPaused((prev) => !prev)}
        onReset={resetGame}
        isPaused={isPaused}
      />
      <TestButton onClick={() => setIsPaused((prev) => !prev)} />
      <BackButton onClick={resetGame} />
    </div>
  );
};

export default InstantReplayScreen;
