// src/components/TestButton.tsx
import React from 'react';

interface TestButtonProps {
  onClick: () => void;
}

const TestButton: React.FC<TestButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 left-4 bg-red-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-red-700 transition duration-300 z-50"
      style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }} // Temporary background color for debugging
    >
      Test
    </button>
  );
};

export default TestButton;
