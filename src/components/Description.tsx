// src/components/Description.tsx
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface DescriptionProps {
  onPlayClick: () => void;
  buttonText: string;
}

const Description: React.FC<DescriptionProps> = ({ onPlayClick, buttonText }) => {
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const shimmerRef = useRef<HTMLSpanElement | null>(null);
  const [shimmerActive, setShimmerActive] = useState(false);

  useGSAP(() => {
    if (!descriptionRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo(
      descriptionRef.current,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'bounce.out',
        delay: 1,
      }
    );
    return () => tl.kill();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShimmerActive(true);
      gsap.fromTo(
        shimmerRef.current,
        { x: '-150%' },
        {
          x: '150%',
          duration: 1,
          ease: 'power2.inOut',
          onComplete: () => setShimmerActive(false),
        }
      );
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/fields/awayfieldcheer1.png')` }}
    >
      <div
        ref={descriptionRef}
        className="bg-gradient-to-br from-red-700 via-red-800 to-gray-900 text-white text-center p-10 rounded-2xl shadow-2xl w-[90%] max-w-3xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Instant Replay lets you relive iconic NFL moments — one play at a time.
        </h2>

        <button
          onClick={onPlayClick}
          className="relative bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg text-xl hover:bg-sky-400 transition duration-300 overflow-hidden shadow-md"
        >
          <span className="relative z-10">{buttonText}</span>
          {shimmerActive && (
            <span
              ref={shimmerRef}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 pointer-events-none"
              style={{ transform: 'translateX(-150%)' }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Description;
