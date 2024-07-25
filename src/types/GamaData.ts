// src/types/GameData.ts
export interface Game {
    id: number;
    stage: string;
    week: string;
    date: {
      timezone: string;
      date: string;
      time: string;
      timestamp: number;
    };
    venue: {
      name: string;
      city: string;
    };
    status: {
      short: string;
      long: string;
      timer: string | null;
    };
  }
  
  export interface League {
    id: number;
    name: string;
    season: string;
    logo: string;
    country: {
      name: string;
      code: string;
      flag: string;
    };
  }
  
  export interface Team {
    id: number;
    name: string;
    logo: string;
  }
  
  export interface Scores {
    home: {
      quarter_1: number;
      quarter_2: number;
      quarter_3: number;
      quarter_4: number;
      overtime: number | null;
      total: number;
    };
    away: {
      quarter_1: number;
      quarter_2: number;
      quarter_3: number;
      quarter_4: number;
      overtime: number | null;
      total: number;
    };
  }
  
  export interface GameResponse {
    game: Game;
    league: League;
    teams: {
      home: Team;
      away: Team;
    };
    scores: Scores;
  }
  
  export interface ExampleGameData {
    get: string;
    parameters: {
      season: string;
      team: string;
    };
    errors: any[];
    results: number;
    response: GameResponse[];
  }
  