// src/components/BackButton.tsx
import React from 'react';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 left-4 bg-pink-600 text-white px-6 py-3 rounded-lg text-xl"
    >
      Back
    </button>
  );
};

export default BackButton;
