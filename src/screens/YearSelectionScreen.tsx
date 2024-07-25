// src/screens/YearSelectionScreen.tsx
import React from 'react';
import TeamCard from '../components/TeamCard';

interface YearSelectionScreenProps {
  selectedTeam: any;
  onBackClick: () => void;
}

const YearSelectionScreen: React.FC<YearSelectionScreenProps> = ({ selectedTeam, onBackClick }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto">
      <TeamCard name={selectedTeam.name} logo={selectedTeam.logo} onClick={() => {}} />
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 mt-4">
        {Array.from({ length: 13 }, (_, i) => 2010 + i).map((year) => (
          <button
            key={year}
            className="first:mt-4 first:ml-4 bg-white shadow-md rounded-lg p-2 cursor-pointer hover:bg-gray-200 transition-colors"
          >
            {year}
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={onBackClick}
          className="bg-red-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-red-700 transition duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default YearSelectionScreen;
