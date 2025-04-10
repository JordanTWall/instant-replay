// src/screens/DescriptionScreen.tsx
import React from 'react';
import Description from '../components/Description';
import HomeFieldBackground from '../components/HomeFieldBackground';

interface DescriptionScreenProps {
  onPlayClick: () => void;
}

const DescriptionScreen: React.FC<DescriptionScreenProps> = ({ onPlayClick }) => {
  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      {/* Background field */}
      <HomeFieldBackground isCheering={false} />

      {/* Safe overlay *behind* content box */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full" />
      </div>

      {/* Foreground content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Description onPlayClick={onPlayClick} buttonText="Play" />
      </div>
    </div>
  );
};

export default DescriptionScreen;
