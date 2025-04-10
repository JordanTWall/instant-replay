import { useEffect } from 'react';
import { GameObject, GameEvent, DummyEvent, ScoreType } from '../types/GamaData';

interface UseGameControllerProps {
  isUserPaused: boolean;
  isGamePaused: boolean;
  loadedGame: (GameEvent | DummyEvent)[] | null;
  game: GameObject;
  currentEventIndexRef: React.MutableRefObject<number>;
  setCurrentTime: (val: string) => void;
  setCurrentEvent: (event: GameEvent | DummyEvent) => void;
  setCurrentHomeScore: (score: number) => void;
  setCurrentAwayScore: (score: number) => void;
  setScoreType: (type: ScoreType) => void;
  setIsHomeField: (val: boolean) => void;
  setIsCheering: (val: boolean) => void;
  setIsGamePaused: (val: boolean) => void;
}

function isGameEvent(event: GameEvent | DummyEvent): event is GameEvent {
  return 'comment' in event && 'team' in event && 'player' in event;
}

const useGameController = ({
  isUserPaused,
  isGamePaused,
  loadedGame,
  game,
  currentEventIndexRef,
  setCurrentTime,
  setCurrentEvent,
  setCurrentHomeScore,
  setCurrentAwayScore,
  setScoreType,
  setIsHomeField,
  setIsCheering,
  setIsGamePaused,
}: UseGameControllerProps) => {
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
            setIsHomeField(event.team.id === game.homeTeamId);

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
};

export default useGameController;
