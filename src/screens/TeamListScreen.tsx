// src/screens/TeamListScreen.tsx
import React from 'react';
import TeamCard from '../components/TeamCard';
import teamsData from '../assets/data/teams.json';

interface TeamListScreenProps {
  onTeamClick: (team: any) => void;
}

const TeamListScreen: React.FC<TeamListScreenProps> = ({ onTeamClick }) => {
  const filteredTeams = teamsData.response
    .filter((team) => team.city !== null)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-[#b8f7fc]">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full max-w-5xl mx-auto">
    {filteredTeams.map((team) => (
      <TeamCard
        key={team.id}
        name={team.name}
        logo={team.logo}
        onClick={() => onTeamClick(team)}
      />
    ))}
  </div>
</div>

  );
};

export default TeamListScreen;
