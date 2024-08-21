import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';
import BackButton from '../components/BackButton';
import { fetchGames } from '../services/fetchGames';

interface GameListScreenProps {
  onBackClick: () => void;
  selectedTeam: string;
  selectedSeason: number;
}

const GameListScreen: React.FC<GameListScreenProps> = ({ onBackClick, selectedTeam, selectedSeason }) => {
  const [showScores, setShowScores] = useState(false);
  const [games, setGames] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const gamesData = await fetchGames(selectedTeam, selectedSeason.toString()); // Use selectedSeason
        setGames(gamesData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load games. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTeam, selectedSeason]);

  const toggleScores = () => {
    setShowScores(!showScores);
  };

  if (loading) return <p>Loading games...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      <BackButton onClick={onBackClick} />
      <button
        onClick={toggleScores}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {showScores ? 'Hide Final Scores' : 'Show Final Scores'}
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {games.map((game, index) => (
          <GameCard key={game.gameId} game={game} showScores={showScores} selectedTeam={selectedTeam} />
        ))}
      </div>
    </div>
  );
};

export default GameListScreen;
