// src/screens/DescriptionScreen.tsx
import React from 'react';
import Description from '../components/Description';

interface DescriptionScreenProps {
  onPlayClick: () => void;
}

const DescriptionScreen: React.FC<DescriptionScreenProps> = ({ onPlayClick }) => {
  return (
    <div>
      <Description onPlayClick={onPlayClick} buttonText="Play" />
    </div>
  );
};

export default DescriptionScreen;
