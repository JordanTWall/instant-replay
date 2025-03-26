// src/hooks/useKickBallPosition.ts
import { useEffect, useState } from "react";

type Direction = "home" | "away";

const useKickBallPosition = (direction: Direction, enabled: boolean = true) => {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const containerWidth = 400;
    const containerHeight = 240;

    const finalLeft = window.innerWidth * (direction === "home" ? 0.24 : 0.28); // ⬅️ switch sides
    const finalTop = window.innerHeight * 0.4;

    const x = finalLeft + containerWidth / 2;
    const y = finalTop + containerHeight;

    setPos({ x, y });
  }, [direction, enabled]);

  return pos;
};

export default useKickBallPosition;
