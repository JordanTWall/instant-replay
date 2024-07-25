// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import DescriptionScreen from './screens/DescriptionScreen';
import TeamListScreen from './screens/TeamListScreen';
import YearSelectionScreen from './screens/YearSelectionScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'description' | 'teamList' | 'yearSelection'>('description');
  const [selectedTeam, setSelectedTeam] = useState<any>(null);

  const handlePlayClick = () => {
    setCurrentScreen('teamList');
  };

  const handleTeamClick = (team: any) => {
    setSelectedTeam(team);
    setCurrentScreen('yearSelection');
  };

  const handleBackClick = () => {
    setCurrentScreen('teamList');
    setSelectedTeam(null);
  };

  const resetAppState = () => {
    setCurrentScreen('description');
    setSelectedTeam(null);
  };

  return (
    <Router>
      <div>
        <NavBar resetAppState={resetAppState} />
        {currentScreen === 'description' && <DescriptionScreen onPlayClick={handlePlayClick} />}
        {currentScreen === 'teamList' && <TeamListScreen onTeamClick={handleTeamClick} />}
        {currentScreen === 'yearSelection' && selectedTeam && (
          <YearSelectionScreen selectedTeam={selectedTeam} onBackClick={handleBackClick} />
        )}
      </div>
    </Router>
  );
};

export default App;
