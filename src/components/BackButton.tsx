// src/components/BackButton.tsx
import React from 'react';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-red-700 transition duration-300"
    >
      Back
    </button>
  );
};

export default BackButton;
