// src/screens/InstantReplayScreen.tsx
import React, { useState, useEffect, useRef } from 'react';
import { GameObject, GameEvent, DummyEvent, ScoreType } from '../types/GamaData';
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

function isGameEvent(event: GameEvent | DummyEvent): event is GameEvent {
  return 'comment' in event && 'team' in event && 'player' in event;
}

const convertQuarterToOrdinal = (quarter: string): string => {
  switch (quarter.toLowerCase()) {
    case 'first': return '1st';
    case 'second': return '2nd';
    case 'third': return '3rd';
    case 'fourth': return '4th';
    case 'overtime': return 'OT';
    default: return quarter;
  }
};

const InstantReplayScreen: React.FC<InstantReplayScreenProps> = ({ gameEvents, game }) => {
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(true);
  const [isCheering, setIsCheering] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<GameEvent | DummyEvent | null>(null);
  const [loadedGame, setLoadedGame] = useState<(GameEvent | DummyEvent)[] | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('15:00');
  const [currentHomeScore, setCurrentHomeScore] = useState(game.homeTeamScore);
  const [currentAwayScore, setCurrentAwayScore] = useState(game.awayTeamScore);
  const [scoreType, setScoreType] = useState<ScoreType>("td");
  const [isHomeField, setIsHomeField] = useState(true); // ⬅️ new toggle flag

  const animationContainerRef = useRef<any>(null);
  const currentEventIndexRef = useRef(0);

  const resetGame = () => {
    const constructedGame = gameConstructor(gameEvents, game.gameStage);
    setLoadedGame(constructedGame);
    setIsGamePaused(false);
    setIsUserPaused(true);
    setCurrentEvent(null);
    setIsCheering(false);
    currentEventIndexRef.current = 0;
    setCurrentTime("15:00");
    setCurrentAwayScore(0);
    setCurrentHomeScore(0);
    setIsHomeField(true);
  };

  useEffect(() => {
    const constructedGame = gameConstructor(gameEvents, game.gameStage);
    setLoadedGame(constructedGame);
    setCurrentAwayScore(0);
    setCurrentHomeScore(0);
  }, [gameEvents]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (!isUserPaused && !isGamePaused && loadedGame) {
      timer = setInterval(() => {
        const currentIndex = currentEventIndexRef.current;

        if (currentIndex < loadedGame.length) {
          const event = loadedGame[currentIndex];
          setCurrentTime(event.minute);
          setCurrentEvent(event);

          if (isGameEvent(event)) {
            setCurrentHomeScore(event.score.home);
            setCurrentAwayScore(event.score.away);
            setScoreType(event.type === "FG" ? "fg" : "td");

            setIsHomeField(event.team.id === game.homeTeamId); // ⬅️ just toggle here

            setTimeout(() => {
              setIsCheering(false);
              setTimeout(() => setIsCheering(false), 1200);
            }, 3000);

            setIsGamePaused(true);
            setTimeout(() => setIsGamePaused(false), 5000);
          }

          currentEventIndexRef.current += 1;
        } else {
          clearInterval(timer);
        }
      }, 100);
    }

    return () => clearInterval(timer);
  }, [isUserPaused, isGamePaused, loadedGame]);

  const handlePauseToggle = () => {
    setIsUserPaused(prev => !prev);
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden m-0 p-0">
      {/* 🔁 Always render both fields */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isHomeField ? 'opacity-100' : 'opacity-0'}`}>
        <HomeFieldBackground isCheering={isCheering} />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-500 ${!isHomeField ? 'opacity-100' : 'opacity-0'}`}>
        <AwayFieldBackground isCheering={isCheering} />
      </div>

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
          direction={currentEvent.team.id === game.homeTeamId ? "home" : "away"}
          scoreType={scoreType}
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
        currentQuarter={convertQuarterToOrdinal(currentEvent?.quarter || 'First')}
        onPauseToggle={handlePauseToggle}
        onReset={resetGame}
        isUserPaused={isUserPaused}
      />

      <TestButton onClick={handlePauseToggle} />
      <BackButton onClick={resetGame} />
    </div>
  );
};

export default InstantReplayScreen;

