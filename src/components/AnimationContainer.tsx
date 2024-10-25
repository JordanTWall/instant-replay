// src/components/AnimationContainer.tsx
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import TDAnimation from './TDAnimation';
import CommentBox from './CommentBox';

interface AnimationContainerProps {
  backgroundColor: string;
  textColor: string;
  playerImg: string;
  comment: string;
  logo: string;
  direction: 'home' | 'away';
}

const AnimationContainer = forwardRef<any, AnimationContainerProps>(
  ({ backgroundColor, textColor, playerImg, comment, logo, direction }, ref) => {
    const commentRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Expose the startAnimation method using useImperativeHandle
    useImperativeHandle(ref, () => ({
      startAnimation: () => {
        if (containerRef.current) {
          gsap.fromTo(
            containerRef.current,
            { x: direction === 'home' ? '-50vw' : '50vw', opacity: 1 },
            {
              x: direction === 'home' ? '50vw' : '-50vw',
              duration: 3,
              ease: 'power1.inOut',
              onComplete: () => {
                gsap.to(containerRef.current, { opacity: 0, duration: 1 });
              },
            }
          );
        }
      },
    }));

    // useGSAP for the CommentBox animation
    useGSAP(
      () => {
        if (!commentRef.current) return;
        const timeline = gsap.timeline();

        // Step 1: Bounce in from the top
        timeline.fromTo(
          commentRef.current,
          { y: -150, opacity: 0 },
          {
            y: 20,
            opacity: 1,
            duration: 1,
            ease: 'bounce.out',
            delay: 1,
          }
        );

        // Step 2: Pause for 2 seconds
        timeline.to(commentRef.current, { duration: 2 });

        // Step 3: Fade out and move up off the screen
        timeline.to(commentRef.current, {
          y: -150,
          opacity: 0,
          duration: 1,
          ease: 'power1.in',
        });

        return () => {
          timeline.kill();
        };
      },
      { scope: commentRef }
    );

    return (
      <div className="absolute inset-0">
        <div
          ref={containerRef}
          className="absolute inset-0 flex items-center justify-center translate-y-10"
        >
          {/* Render the TDAnimation */}
          <TDAnimation
            textColor={textColor}
            backgroundColor={backgroundColor}
            playerImg={playerImg}
            direction={direction}
          />
        </div>
        <div ref={commentRef}>
          {/* Render the CommentBox */}
          <CommentBox
            textColor={textColor}
            backgroundColor={backgroundColor}
            comment={comment}
            logo={logo}
            playerImg={playerImg}
          />
        </div>
      </div>
    );
  }
);

export default AnimationContainer;
