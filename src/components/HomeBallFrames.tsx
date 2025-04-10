import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import HomeBall1 from "../assets/svgs/homeFGSvgs/football1.svg";
import HomeBall2 from "../assets/svgs/homeFGSvgs/football2.svg";
import HomeBall3 from "../assets/svgs/homeFGSvgs/football3.svg";
import HomeBall4 from "../assets/svgs/homeFGSvgs/football4.svg";
import HomeBall5 from "../assets/svgs/homeFGSvgs/football5.svg";
import HomeBall6 from "../assets/svgs/homeFGSvgs/football6.svg";
import HomeBall7 from "../assets/svgs/homeFGSvgs/football7.svg";
import HomeBall8 from "../assets/svgs/homeFGSvgs/football8.svg";

interface Props {
  animate?: boolean;
  x: number;
  y: number;
  onRemove?: () => void;
}

const HomeBallFrames: React.FC<Props> = ({ animate = false, x, y, onRemove }) => {
  const frames = [
    HomeBall1, HomeBall2, HomeBall3, HomeBall4,
    HomeBall5, HomeBall6, HomeBall7, HomeBall8,
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
      x: "70vw",
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
        left: `${x + 50}px`,
        top: `${y - 54}px`,
        transform: "translate(-50%, 0)",
        zIndex: 1,
      }}
    />
  );
};

export default HomeBallFrames;
