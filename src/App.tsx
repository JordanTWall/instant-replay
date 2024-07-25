// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './components/Description';
import TeamCard from './components/TeamCard';
import NavBar from './components/NavBar';
import teamsData from './assets/data/teams.json';

const App: React.FC = () => {
  const [showTeams, setShowTeams] = useState(false);

  const handlePlayClick = () => {
    setShowTeams(true);
  };

  const filteredTeams = teamsData.response.filter(team => team.city !== null).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Router>
      <div>
        <NavBar />
        <Description onPlayClick={handlePlayClick} />
        {showTeams && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {filteredTeams.map(team => (
              <TeamCard key={team.id} name={team.name} logo={team.logo} />
            ))}
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
