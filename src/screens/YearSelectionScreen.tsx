// src/screens/YearSelectionScreen.tsx
import React from 'react';
import TeamCard from '../components/TeamCard';
import BackButton from '../components/BackButton';

interface YearSelectionScreenProps {
  selectedTeam: any;
  onBackClick: () => void;
  onYearClick: (year: number) => void;
}

const YearSelectionScreen: React.FC<YearSelectionScreenProps> = ({ selectedTeam, onBackClick, onYearClick }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto">
      <TeamCard name={selectedTeam.name} logo={selectedTeam.logo} onClick={() => {}} />
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 mt-4">
        {Array.from({ length: 13 }, (_, i) => 2010 + i).map((year) => (
          <button
            key={year}
            className="bg-white shadow-md rounded-lg p-2 cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={() => onYearClick(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <BackButton onClick={onBackClick} />
    </div>
  );
};

export default YearSelectionScreen;
