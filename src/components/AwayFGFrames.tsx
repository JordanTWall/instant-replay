// src/components/AwayFGFrames.tsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// 🏃‍♂️ Away Run Frames
import AwayRun1 from "../assets/svgs/awayFGSvgs/awayRun1.svg";
import AwayRun2 from "../assets/svgs/awayFGSvgs/awayRun2.svg";
import AwayRun3 from "../assets/svgs/awayFGSvgs/awayRun3.svg";
import AwayRun4 from "../assets/svgs/awayFGSvgs/awayRun4.svg";
import AwayRun5 from "../assets/svgs/awayFGSvgs/awayRun5.svg";
import AwayRun6 from "../assets/svgs/awayFGSvgs/awayRun6.svg";
import AwayRun7 from "../assets/svgs/awayFGSvgs/awayRun7.svg";
import AwayRun8 from "../assets/svgs/awayFGSvgs/awayRun8.svg";
import AwayRun9 from "../assets/svgs/awayFGSvgs/awayRun9.svg";
import AwayRun10 from "../assets/svgs/awayFGSvgs/awayRun10.svg";
import AwayRun11 from "../assets/svgs/awayFGSvgs/awayRun11.svg";
import AwayRun12 from "../assets/svgs/awayFGSvgs/awayRun12.svg";

// 🦵 Away Kick Frames
import AwayKick1 from "../assets/svgs/awayFGSvgs/awayKick1.svg";
import AwayKick2 from "../assets/svgs/awayFGSvgs/awayKick2.svg";
import AwayKick3 from "../assets/svgs/awayFGSvgs/awayKick3.svg";
import AwayKick4 from "../assets/svgs/awayFGSvgs/awayKick4.svg";
import AwayKick5 from "../assets/svgs/awayFGSvgs/awayKick5.svg";
import AwayKick6 from "../assets/svgs/awayFGSvgs/awayKick6.svg";
import AwayKick7 from "../assets/svgs/awayFGSvgs/awayKick7.svg";
import AwayKick8 from "../assets/svgs/awayFGSvgs/awayKick8.svg";
import AwayKick9 from "../assets/svgs/awayFGSvgs/awayKick9.svg";
import AwayKick10 from "../assets/svgs/awayFGSvgs/awayKick10.svg";
import AwayKick11 from "../assets/svgs/awayFGSvgs/awayKick11.svg";
import AwayKick12 from "../assets/svgs/awayFGSvgs/awayKick12.svg";
import AwayKick13 from "../assets/svgs/awayFGSvgs/awayKick13.svg";
import AwayKick14 from "../assets/svgs/awayFGSvgs/awayKick14.svg";

// ✅ Hardcoded away FG frames
const awayRunFrames = [
  AwayRun1, AwayRun2, AwayRun3, AwayRun4, AwayRun5, AwayRun6,
  AwayRun7, AwayRun8, AwayRun9, AwayRun10, AwayRun11, AwayRun12,
];

const awayKickFrames = [
  AwayKick1, AwayKick2, AwayKick3, AwayKick4, AwayKick5,
  AwayKick6, AwayKick7, AwayKick8, AwayKick9, AwayKick10,
  AwayKick11, AwayKick12, AwayKick13, AwayKick14,
];

interface Props {
  onRemove?: () => void;
  headRef?: React.RefObject<HTMLDivElement | null>;
}

const AwayFGFrames: React.FC<Props> = ({ onRemove, headRef }) => {
  const [phase, setPhase] = useState<"run" | "kick">("run");
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loopCount, setLoopCount] = useState(0);
  const kickerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let tl: gsap.core.Timeline | null = null;

    if (phase === "kick" && kickerRef.current) {
      tl = gsap.timeline({
        delay: 1.5,
        onComplete: () => onRemove?.(),
      });

      tl.to([kickerRef.current, headRef?.current], {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    }

    return () => {
      if (tl) tl.kill();
    };
  }, [phase, onRemove, headRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (phase === "run") {
        const next = (currentFrame + 1) % awayRunFrames.length;
        if (next === 0) setLoopCount((prev) => prev + 1);

        if (loopCount >= 6 && next === awayRunFrames.length - 1) {
          setPhase("kick");
          setCurrentFrame(0);
        } else {
          setCurrentFrame(next);
        }
      } else {
        const next = currentFrame + 1;
        //set is cheering true
        if (next >= awayKickFrames.length) {
          clearInterval(interval);
        } else {
          setCurrentFrame(next);
        }
      }
    }, 30);
// set is cheering false 
    return () => clearInterval(interval);
  }, [currentFrame, phase, loopCount]);

  const src =
    phase === "run" ? awayRunFrames[currentFrame] : awayKickFrames[currentFrame];

  return (
    <img
      ref={kickerRef}
      src={src}
      alt={`FG Frame ${currentFrame + 1}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default AwayFGFrames;
