import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import DescriptionScreen from './screens/DescriptionScreen';
import TeamListScreen from './screens/TeamListScreen';
import SeasonSelectionScreen from './screens/SeasonSelectionScreen';
import GameListScreen from './screens/GameListScreen';
import InstantReplayScreen from './screens/InstantReplayScreen';
import BackButton from './components/BackButton';
import { fetchGameEvents, fetchGames } from './services/fetchAPIData';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'description' | 'teamList' | 'seasonSelection' | 'gameList' | 'instantReplay'>('description');
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
  const [games, setGames] = useState<any[]>([]); // Store games in App state
  const [gameEvents, setGameEvents] = useState<any>(null);
  const [selectedGame, setSelectedGame] = useState<any>(null);

  useEffect(() => {
    if (selectedTeam && selectedSeason !== null) {
      const fetchData = async () => {
        try {
          const gamesData = await fetchGames(selectedTeam.name, selectedSeason.toString());
          setGames(gamesData);
        } catch (err) {
          console.error('Failed to load games:', err);
        }
      };
      fetchData();
    }
  }, [selectedTeam, selectedSeason]);

  const handlePlayClick = () => {
    setCurrentScreen('teamList');
  };

  const handleTeamClick = (team: any) => {
    setSelectedTeam(team);
    setCurrentScreen('seasonSelection');
  };

  const handleSeasonClick = (season: number) => {
    setSelectedSeason(season);
    setCurrentScreen('gameList');
  };

  const handleGameClick = async (game: any) => {
    setSelectedGame(game); // Set the selected game in the state
  };
  
  // Use a useEffect to trigger fetchGameEvents when selectedGame changes
  useEffect(() => {
    const fetchEvents = async () => {
      if (selectedGame) {
        try {
          const events = await fetchGameEvents(selectedGame.gameId);
          setGameEvents(events);
          setCurrentScreen('instantReplay'); // Navigate to the InstantReplay screen
        } catch (err) {
          console.error('Failed to fetch game events:', err);
        }
      }
    };
  
    fetchEvents();
  }, [selectedGame]);

  const resetAppState = () => {
    setCurrentScreen('description');
    setSelectedTeam(null);
    setSelectedSeason(null);
    setGames([]);
    setSelectedGame(null);
    setGameEvents(null);
  };

  const handleBackClick = () => {
    switch (currentScreen) {
      case 'instantReplay':
        setCurrentScreen('gameList');
        break;
      case 'gameList':
        setCurrentScreen('seasonSelection');
        break;
      case 'seasonSelection':
        setCurrentScreen('teamList');
        setSelectedSeason(null);
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
        <GameListScreen
          onBackClick={handleBackClick}
          selectedTeam={selectedTeam.name}
          selectedSeason={selectedSeason}
          onGameClick={handleGameClick} // Pass the handler to GameListScreen
          games={games} // Pass the games list
        />
      )}
        {currentScreen === 'instantReplay' && selectedGame && gameEvents && (
          <InstantReplayScreen
            gameEvents={gameEvents}
            onBackClick={handleBackClick}
            game={selectedGame}
            showScores={true}
            selectedTeam={selectedTeam.name}
          />
        )}
        {currentScreen !== 'description' && <BackButton onClick={handleBackClick} />}
      </div>
    </Router>
  );
};

export default App;
