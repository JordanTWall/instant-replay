// src/components/HomeFGFrames.tsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// 🏃‍♂️ Home Run Frames
import HomeRun1 from "../assets/svgs/homeFGSvgs/homeRun1.svg";
import HomeRun2 from "../assets/svgs/homeFGSvgs/homeRun2.svg";
import HomeRun3 from "../assets/svgs/homeFGSvgs/homeRun3.svg";
import HomeRun4 from "../assets/svgs/homeFGSvgs/homeRun4.svg";
import HomeRun5 from "../assets/svgs/homeFGSvgs/homeRun5.svg";
import HomeRun6 from "../assets/svgs/homeFGSvgs/homeRun6.svg";
import HomeRun7 from "../assets/svgs/homeFGSvgs/homeRun7.svg";
import HomeRun8 from "../assets/svgs/homeFGSvgs/homeRun8.svg";
import HomeRun9 from "../assets/svgs/homeFGSvgs/homeRun9.svg";
import HomeRun10 from "../assets/svgs/homeFGSvgs/homeRun10.svg";
import HomeRun11 from "../assets/svgs/homeFGSvgs/homeRun11.svg";
import HomeRun12 from "../assets/svgs/homeFGSvgs/homeRun12.svg";

// 🦵 Home Kick Frames
import HomeKick1 from "../assets/svgs/homeFGSvgs/homeKick1.svg";
import HomeKick2 from "../assets/svgs/homeFGSvgs/homeKick2.svg";
import HomeKick3 from "../assets/svgs/homeFGSvgs/homeKick3.svg";
import HomeKick4 from "../assets/svgs/homeFGSvgs/homeKick4.svg";
import HomeKick5 from "../assets/svgs/homeFGSvgs/homeKick5.svg";
import HomeKick6 from "../assets/svgs/homeFGSvgs/homeKick6.svg";
import HomeKick7 from "../assets/svgs/homeFGSvgs/homeKick7.svg";
import HomeKick8 from "../assets/svgs/homeFGSvgs/homeKick8.svg";
import HomeKick9 from "../assets/svgs/homeFGSvgs/homeKick9.svg";
import HomeKick10 from "../assets/svgs/homeFGSvgs/homeKick10.svg";
import HomeKick11 from "../assets/svgs/homeFGSvgs/homeKick11.svg";
import HomeKick12 from "../assets/svgs/homeFGSvgs/homeKick12.svg";
import HomeKick13 from "../assets/svgs/homeFGSvgs/homeKick13.svg";
import HomeKick14 from "../assets/svgs/homeFGSvgs/homeKick14.svg";

// ✅ Hardcoded home FG frames
const homeRunFrames = [
  HomeRun1, HomeRun2, HomeRun3, HomeRun4, HomeRun5, HomeRun6,
  HomeRun7, HomeRun8, HomeRun9, HomeRun10, HomeRun11, HomeRun12,
];

const homeKickFrames = [
   HomeKick2, HomeKick3, HomeKick4, HomeKick5,
   HomeKick7, HomeKick8, 
  HomeKick11, HomeKick12, HomeKick13, HomeKick14,
];

interface Props {
  onRemove?: () => void;
  headRef?: React.RefObject<HTMLDivElement | null>;
}

const HomeFGFrames: React.FC<Props> = ({ onRemove, headRef }) => {
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
        const next = (currentFrame + 1) % homeRunFrames.length;
        if (next === 0) setLoopCount((prev) => prev + 1);

        if (loopCount >= 6 && next === homeRunFrames.length - 1) {
          setPhase("kick");
          setCurrentFrame(0);
        } else {
          setCurrentFrame(next);
        }
      } else {
        const next = currentFrame + 1;
        if (next >= homeKickFrames.length) {
          clearInterval(interval);
        } else {
          setCurrentFrame(next);
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [currentFrame, phase, loopCount]);

  const src =
    phase === "run" ? homeRunFrames[currentFrame] : homeKickFrames[currentFrame];

  return (
    <img
      ref={kickerRef}
      src={src}
      alt={`FG Frame ${currentFrame + 1}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default HomeFGFrames;
