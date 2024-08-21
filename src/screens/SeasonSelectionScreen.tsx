import React from 'react';
import TeamCard from '../components/TeamCard';
import BackButton from '../components/BackButton';

interface SeasonSelectionScreenProps {
  selectedTeam: any;
  onBackClick: () => void;
  onSeasonClick: (season: number) => void;
}

const SeasonSelectionScreen: React.FC<SeasonSelectionScreenProps> = ({ selectedTeam, onBackClick, onSeasonClick }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto">
      <TeamCard name={selectedTeam.name} logo={selectedTeam.logo} onClick={() => {}} />
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 mt-4">
        {Array.from({ length: 14 }, (_, i) => 2010 + i).map((season) => (
          <button
            key={season}
            className="first:mt-4 first:ml-4 selection:bg-white shadow-md rounded-lg p-2 cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={() => onSeasonClick(season)}
          >
            {season}
          </button>
        ))}
      </div>
      <BackButton onClick={onBackClick} />
    </div>
  );
};

export default SeasonSelectionScreen;
