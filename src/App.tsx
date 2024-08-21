import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import DescriptionScreen from './screens/DescriptionScreen';
import TeamListScreen from './screens/TeamListScreen';
import SeasonSelectionScreen from './screens/SeasonSelectionScreen';
import GameListScreen from './screens/GameListScreen';
import BackButton from './components/BackButton';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'description' | 'teamList' | 'seasonSelection' | 'gameList'>('description');
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null); // Add selectedSeason state

  const handlePlayClick = () => {
    setCurrentScreen('teamList');
  };

  const handleTeamClick = (team: any) => {
    setSelectedTeam(team);
    setCurrentScreen('seasonSelection');
  };

  const handleSeasonClick = (season: number) => {
    setSelectedSeason(season); // Set the selected season
    setCurrentScreen('gameList');
  };

  const resetAppState = () => {
    setCurrentScreen('description');
    setSelectedTeam(null);
    setSelectedSeason(null); // Reset selectedSeason when resetting the app
  };

  const handleBackClick = () => {
    switch (currentScreen) {
      case 'gameList':
        setCurrentScreen('seasonSelection');
        break;
      case 'seasonSelection':
        setCurrentScreen('teamList');
        setSelectedSeason(null); // Reset selectedSeason when going back to team list
        break;
      case 'teamList':
        setCurrentScreen('description');
        setSelectedTeam(null);
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
        {currentScreen === 'seasonSelection' && selectedTeam && (
          <SeasonSelectionScreen selectedTeam={selectedTeam} onBackClick={handleBackClick} onSeasonClick={handleSeasonClick} />
        )}
        {currentScreen === 'gameList' && selectedTeam && selectedSeason !== null && (
          <GameListScreen onBackClick={handleBackClick} selectedTeam={selectedTeam.name} selectedSeason={selectedSeason} />
        )}
        {currentScreen !== 'description' && <BackButton onClick={handleBackClick} />}
      </div>
    </Router>
  );
};

export default App;
