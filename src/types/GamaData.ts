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
  
  export interface GameEvent {
    quarter: string;
    minute: string;
    team: {
      id: number;
      name: string;
      logo: string;
    };
    player: {
      id: number;
      name: string;
      image: string;
    };
    type: string;
    comment: string;
    score: {
      home: number;
      away: number;
    };
  }
  
  export interface DummyEvent {
    quarter: string;
    minute: string;
  }
  
  export interface GameEventResponse {
    get: string;
    parameters: {
      id: string;
    };
    errors: any[];
    results: number;
    response: GameEvent[];  // response array contains GameEvent objects
  }
  
  // src/types/GameObject.ts
export interface GameObject {
  gameId: number;
  gameStage: string;
  gameWeek: string;
  gameDate: string;
  homeTeamId: number;
  homeTeamName: string;
  homeTeamLogo: string;
  awayTeamId: number;
  awayTeamName: string;
  awayTeamLogo: string;
  homeTeamScore: number;
  awayTeamScore: number;
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
  
  export interface DummyEvent {
    quarter: string;
    minute: string; 
  }
  
  export type MinuteEvents = (GameEvent | DummyEvent)[];
  export type Quarter = MinuteEvents[];
  export type LoadedGame = Quarter[];