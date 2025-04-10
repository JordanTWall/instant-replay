// src/components/AwayBallFrames.tsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import AwayBall1 from "../assets/svgs/awayFGSvgs/football1.svg";
import AwayBall2 from "../assets/svgs/awayFGSvgs/football2.svg";
import AwayBall3 from "../assets/svgs/awayFGSvgs/football3.svg";
import AwayBall4 from "../assets/svgs/awayFGSvgs/football4.svg";
import AwayBall5 from "../assets/svgs/awayFGSvgs/football5.svg";
import AwayBall6 from "../assets/svgs/awayFGSvgs/football6.svg";
import AwayBall7 from "../assets/svgs/awayFGSvgs/football7.svg";
import AwayBall8 from "../assets/svgs/awayFGSvgs/football8.svg";

interface Props {
  animate?: boolean;
  x: number;
  y: number;
  onRemove?: () => void;
}

const AwayBallFrames: React.FC<Props> = ({ animate = false, x, y, onRemove }) => {
  const frames = [
    AwayBall7, AwayBall6, AwayBall5, AwayBall4,
    AwayBall3, AwayBall2, AwayBall1, AwayBall8,
  ];

  const [currentFrame, setCurrentFrame] = useState(0);
  const ballRef = useRef<HTMLImageElement>(null);

 
  useEffect(() => {
    if (!animate) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 30);

    return () => clearInterval(interval);
  }, [animate]);

 
  useEffect(() => {
    if (!animate || !ballRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        if (onRemove) onRemove();
      },
    });

    tl.to(ballRef.current, {
      x: "-70vw", 
      y: "-45vw",
      duration: 0.8,
      ease: "power1.out",
    })
      .to(ballRef.current, {
        y: "+=250",
        duration: 0.8,
        ease: "power1.in",
      })
      .to(ballRef.current, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power1.out",
      });

    return () => {
      tl.kill();
    };
  }, [animate, onRemove]);

  return (
    <img
      ref={ballRef}
      src={frames[currentFrame]}
      alt={`Football Frame ${currentFrame + 1}`}
      style={{
        position: "absolute",
        left: `${x - 50}px`, // Adjusted to align properly for away kicks
        top: `${y - 54}px`,
        transform: "translate(-50%, 0)",
        zIndex: 1,
      }}
    />
  );
};

export default AwayBallFrames;
