// services/fetchAPIData.ts

import axios from 'axios';

export const fetchGames = async (teamName: string, season: string) => {
  try {
    const response = await axios.get(`http://localhost:8080/instantreplay/api/games`, {
      params: {
        teamName: teamName,
        season: season
      }
    });
    return response.data;
  } catch (err) {
    console.error('Failed to fetch game data:', err);
    throw err;
  }
};

export const fetchGameEvents = async (gameId: number) => {
  try {
    console.log(`Attempting to fetch events for gameId: ${gameId}`);
    const response = await axios.get(`http://localhost:8080/instantreplay/api/events`, {
      params: { gameId: gameId },
    });
    console.log('Response data:', response.data);
    return response.data;
  } catch (err) {
    console.error('Failed to fetch game event data:', err);
    throw err;
  }
};
