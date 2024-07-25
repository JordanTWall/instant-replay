// src/components/Description.tsx
import React from 'react';

interface DescriptionProps {
  onPlayClick: () => void;
}

const Description: React.FC<DescriptionProps> = ({ onPlayClick }) => {
  return (
    <div className="text-center my-8">
      <h2 className="text-3xl text-gray-800 mb-4">Instant Replay allows you to search and replay any NFL Game</h2>
      <button
        onClick={onPlayClick}
        className="bg-red-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-red-700 transition duration-300"
      >
        Play
      </button>
    </div>
  );
};

export default Description;
