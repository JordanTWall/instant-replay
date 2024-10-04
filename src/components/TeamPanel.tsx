import React from 'react';

interface TeamPanelProps {
  teamName: string;
  teamLogo: string;
  teamScore: number;
  gameStage: string;
  gameWeek: string;
  teamColors: {
    background: string;
    text: string;
  };
}

const TeamPanel: React.FC<TeamPanelProps> = ({
  teamName,
  teamLogo,
  teamScore,
  gameStage,
  gameWeek,
  teamColors,
}) => {
  return (
    <div
      className="flex flex-col justify-start items-center p-4 h-full" // Set height to full
      style={{ backgroundColor: teamColors.background, color: teamColors.text }}
    >
      <img src={teamLogo} alt={`${teamName} Logo`} className="w-24 h-24 mb-2" />
      <h2 className="text-xl font-bold mb-2 text-center min-h-16">{teamName}</h2>
      <h1 className="text-4xl font-bold mb-4">{teamScore}</h1>
      <div className="bg-blue-600 rounded-lg p-4 mt-4 text-center min-h-6 text-white">
        <p>{`${gameStage} - ${gameWeek}`}</p>
      </div>
    </div>
  );
};

export default TeamPanel;
