// src/services/fetchAPIData.ts
import axios from 'axios';
import { GameObject, GameEvent, GameEventResponse } from '../types/GamaData';

export const fetchGames = async (teamName: string, season: string): Promise<GameObject[]> => {
  try {
    const response = await axios.get(`http://localhost:8080/instantreplay/api/games`, {
      params: {
        teamName: teamName,
        season: season,
      },
    });
    return response.data as GameObject[]; 
  } catch (err) {
    console.error('Failed to fetch game data:', err);
    throw err;
  }
};

export const fetchGameEvents = async (gameId: number): Promise<GameEvent[]> => {
  try {
    const response = await axios.get<GameEventResponse>(`http://localhost:8080/instantreplay/api/events`, {
      params: { gameId },
    });
    console.log(response.data.response)
    return response.data.response; 
  } catch (err) {
    console.error('Failed to fetch game event data:', err);
    throw err;
  }
};

