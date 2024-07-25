// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import DescriptionScreen from './screens/DescriptionScreen';
import TeamListScreen from './screens/TeamListScreen';
import YearSelectionScreen from './screens/YearSelectionScreen';
import GameListScreen from './screens/GameListScreen';
import BackButton from './components/BackButton';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'description' | 'teamList' | 'yearSelection' | 'gameList'>('description');
  const [selectedTeam, setSelectedTeam] = useState<any>(null);

  const handlePlayClick = () => {
    setCurrentScreen('teamList');
  };

  const handleTeamClick = (team: any) => {
    setSelectedTeam(team);
    setCurrentScreen('yearSelection');
  };

  const handleYearClick = (year: number) => {
    setCurrentScreen('gameList');
  };

  const resetAppState = () => {
    setCurrentScreen('description');
    setSelectedTeam(null);
  };

  const handleBackClick = () => {
    switch (currentScreen) {
      case 'gameList':
        setCurrentScreen('yearSelection');
        break;
      case 'yearSelection':
        setCurrentScreen('teamList');
        setSelectedTeam(null);
        break;
      case 'teamList':
        setCurrentScreen('description');
        break;
      default:
        break;
    }
  };

  return (
    <Router>
      <div>
        <NavBar resetAppState={resetAppState} />
        {currentScreen === 'description' && <DescriptionScreen onPlayClick={handlePlayClick} />}
        {currentScreen === 'teamList' && <TeamListScreen onTeamClick={handleTeamClick} />}
        {currentScreen === 'yearSelection' && selectedTeam && (
          <YearSelectionScreen selectedTeam={selectedTeam} onBackClick={handleBackClick} onYearClick={handleYearClick} />
        )}
        {currentScreen === 'gameList' && selectedTeam && (
          <GameListScreen onBackClick={handleBackClick} selectedTeam={selectedTeam.name} />
        )}
        {currentScreen !== 'description' && <BackButton onClick={handleBackClick} />}
      </div>
    </Router>
  );
};

export default App;
