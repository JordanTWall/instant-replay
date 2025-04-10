// src/components/CommentBox.tsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface CommentBoxProps {
  backgroundColor: string;
  textColor: string;
  comment: string;
  logo: string;
  playerImg: string;
}

const CommentBox: React.FC<CommentBoxProps> = ({
  backgroundColor,
  textColor,
  comment,
  logo,
  playerImg,
}) => {
  const commentRef = useRef<HTMLDivElement | null>(null);


  useGSAP(
    () => {
      if (!commentRef.current) return;

    
      const timeline = gsap.timeline();

      // Step 1: Bounce in from the top
      timeline.fromTo(
        commentRef.current,
        { y: -150, opacity: 1 }, 
        {
          y: 20,
          opacity: 1,
          duration: 1, 
          ease: 'bounce.out',
          delay: 1, 
        }
      );

      // Step 2: Pause for 2 seconds
      timeline.to(commentRef.current, { duration: 2.5 });

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
    [] 
  );

  return (
    <div
      className="comment-box"
      ref={commentRef}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5px 20px',
        borderRadius: '8px',
        height: '110px',
        width: '80%',
        maxWidth: '800px',
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
      }}
    >
      {/* Team Logo */}
      <img
        src={logo}
        alt="Team Logo"
        style={{ height: '100px', borderRadius: '8px' }}
      />

      {/* Comment */}
      <div
        style={{
          flex: 1,
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '0 20px',
        }}
      >
        {comment}
      </div>

      {/* Player Image */}
      <img
        src={playerImg}
        alt="Player"
        style={{ height: '100px', borderRadius: '8px' }}
      />
    </div>
  );
};

export default CommentBox;
