// src/components/TeamCard.tsx
import React from 'react';

interface TeamCardProps {
  name: string;
  logo: string;
  onClick: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, logo, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center cursor-pointer hover:bg-gray-200 transition-colors"
    >
      <img src={logo} alt={name} className="w-24 h-24 mb-4" />
      <h3 className="text-xl text-gray-800">{name}</h3>
    </div>
  );
};

export default TeamCard;
