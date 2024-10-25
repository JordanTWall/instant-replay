// src/components/TDAnimation.tsx
import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import HomeTD1 from './animationComponents/HomeTD1';
import HomeTD2 from './animationComponents/HomeTD2';
import HomeTD3 from './animationComponents/HomeTD3';
import HomeTD4 from './animationComponents/HomeTD4';
import HomeTD5 from './animationComponents/HomeTD5';
import AwayTD1 from './animationComponents/AwayTD1';
import AwayTD2 from './animationComponents/AwayTD2';
import AwayTD3 from './animationComponents/AwayTD3';
import AwayTD4 from './animationComponents/AwayTD4';
import AwayTD5 from './animationComponents/AwayTD5';

interface TDAnimationProps {
  backgroundColor: string;
  textColor: string;
  playerImg: string;
  direction: 'home' | 'away'; // Added direction prop to control animation direction
}

const TDAnimation = forwardRef(({
  backgroundColor,
  textColor,
  playerImg,
  direction,
}: TDAnimationProps, ref) => {
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Expose the startAnimation method using useImperativeHandle
  useImperativeHandle(ref, () => ({
    startAnimation: () => {
      if (containerRef.current) {
        // Restart animations by resetting the frame state
        setCurrentFrame(0);
      }
    },
  }));

  // Use the useGSAP hook to handle GSAP animations
  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Determine the direction of the animation
      const directionMultiplier = direction === 'home' ? 1 : -1;

      // Create a GSAP timeline for the running animation (frame changes)
      const frameTimeline = gsap.timeline({ repeat: -1, paused: false });

      // Animate each frame with a delay of 0.1 seconds (10 frames per second)
      frameTimeline
        .call(() => setCurrentFrame(0), [], 0)
        .call(() => setCurrentFrame(1), [], 0.1)
        .call(() => setCurrentFrame(2), [], 0.2)
        .call(() => setCurrentFrame(3), [], 0.3)
        .call(() => setCurrentFrame(4), [], 0.4);

      // Create a GSAP tween to move the character across the screen based on direction
      gsap.fromTo(
        containerRef.current,
        { x: `${directionMultiplier * -50}vw`, opacity: 1 }, // Start off-screen based on direction
        {
          x: `${directionMultiplier * 50}vw`, // Move across the screen
          opacity: 1,
          duration: 2, // Duration for one complete run across the screen
          delay: 0.5, // Delay before starting the animation
          repeat: 0, // Run only once
          ease: 'power1.in', // Smooth acceleration and deceleration
          onComplete: () => {
            // Fade out the player when the animation completes
            gsap.to(containerRef.current, {
              opacity: 0,
              duration: 0.1, // Duration for the fade-out
              ease: 'power1.out',
            });
          },
        }
      );

      // Cleanup function to revert animations when the component unmounts
      return () => {
        frameTimeline.kill();
      };
    },
    [direction] // Re-run animations if the direction changes
  );

  // Arrays for home and away frames
  const homeFrames = [
    <HomeTD1 backgroundColor={backgroundColor} textColor={textColor} playerImg={playerImg} />,
    <HomeTD2 backgroundColor={backgroundColor} textColor={textColor} playerImg={playerImg} />,
    <HomeTD3 backgroundColor={backgroundColor} textColor={textColor} playerImg={playerImg} />,
    <HomeTD4 backgroundColor={backgroundColor} textColor={textColor} playerImg={playerImg} />,
    <HomeTD5 backgroundColor={backgroundColor} textColor={textColor} playerImg={playerImg} />,
  ];

  const awayFrames = [
    <AwayTD1 backgroundColor={backgroundColor} textColor={textColor} playerImg={playerImg} />,
    <AwayTD2 backgroundColor={backgroundColor} textColor={textColor} playerImg={playerImg} />,
    <AwayTD3 backgroundColor={backgroundColor} textColor={textColor} playerImg={playerImg} />,
    <AwayTD4 backgroundColor={backgroundColor} textColor={textColor} playerImg={playerImg} />,
    <AwayTD5 backgroundColor={backgroundColor} textColor={textColor} playerImg={playerImg} />,
  ];

  // Determine which frames to use based on the direction
  const frames = direction === 'home' ? homeFrames : awayFrames;

  return (
    <div className="animation-container" ref={containerRef}>
      {/* Render the current frame based on state */}
      {frames[currentFrame]}
    </div>
  );
});

export default TDAnimation;
 