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
