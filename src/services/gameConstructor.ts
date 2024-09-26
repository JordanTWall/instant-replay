import { GameEvent, LoadedGame, DummyEvent } from '../types/GamaData';

export function gameConstructor(gameEvents: GameEvent[], gameStage: string): LoadedGame {
  // Determine if this is the postseason (15 minutes for overtime) or regular season (10 minutes)
  const isPostSeason = gameStage === 'Post Season';
  const overtimeDuration = isPostSeason ? 15 : 10; // Overtime is 15 minutes in postseason, 10 in regular season

  // Check if there's any overtime event in the gameEvents
  const hasOvertime = gameEvents.some((event) => event.quarter === 'Overtime');
  
  // Create array for 4 quarters or 5 if overtime is present
  const loadedGame: LoadedGame = hasOvertime ? [[], [], [], [], []] : [[], [], [], []];

  // Insert game events into the correct quarter/minute
  gameEvents.forEach((event) => {
    const quarterMap: Record<string, number> = {
      'First': 0,
      'Second': 1,
      'Third': 2,
      'Fourth': 3,
      'Overtime': 4,
    };

    const quarterIndex = quarterMap[event.quarter];
    const minute = parseInt(event.minute.split(':')[0], 10); // Get the minute part (MM)

    if (!loadedGame[quarterIndex][minute]) {
      loadedGame[quarterIndex][minute] = [];
    }

    loadedGame[quarterIndex][minute].push(event);
  });

  // Insert dummy events, including "15:00" and "0:00" for each quarter
  loadedGame.forEach((quarter, quarterIndex) => {
    // Add "15:00" or "10:00/15:00" at the start of each quarter
    const startMinute = quarterIndex === 4 ? `${overtimeDuration}:00` : '15:00'; // Overtime is 15 or 10 minutes
    const endMinute = '0:00'; // Every quarter ends at 0:00

    // Add the start event (15:00 or 10:00/15:00 for overtime)
    if (!quarter[parseInt(startMinute.split(':')[0], 10)]) {
      quarter[parseInt(startMinute.split(':')[0], 10)] = [];
    }
    quarter[parseInt(startMinute.split(':')[0], 10)].unshift({
      quarter: ['First', 'Second', 'Third', 'Fourth', 'Overtime'][quarterIndex],
      minute: startMinute,
    });

    // Add the end event (0:00)
    if (!quarter[0]) {
      quarter[0] = [];
    }
    quarter[0].push({
      quarter: ['First', 'Second', 'Third', 'Fourth', 'Overtime'][quarterIndex],
      minute: endMinute,
    });

    // Generate dummy events for each minute
    const maxMinute = quarterIndex === 4 ? overtimeDuration - 1 : 14; // Adjust for overtime duration
    for (let minute = maxMinute; minute >= 0; minute--) {
      if (!quarter[minute]) {
        quarter[minute] = [];
      }

      const existingSeconds = quarter[minute].map((event) => event.minute.split(':')[1]);

      // Get random seconds not in existing events for dummy events
      const dummySeconds = generateDummySeconds(existingSeconds);
      dummySeconds.forEach((second) => {
        const dummyEvent: DummyEvent = {
          quarter: ['First', 'Second', 'Third', 'Fourth', 'Overtime'][quarterIndex],
          minute: `${minute.toString().padStart(2, '0')}:${second}`,
        };
        quarter[minute].push(dummyEvent);
      });

      // Sort events by seconds in descending order (e.g., 59 down to 00)
      quarter[minute].sort((a, b) => parseInt(b.minute.split(':')[1], 10) - parseInt(a.minute.split(':')[1], 10));
    }
  });

  // Reverse the order of each minute array to ensure they are in descending order (starting at 15:00 or 10:00/15:00)
  loadedGame.forEach((quarter) => {
    quarter.reverse();
  });

  return loadedGame;
}

// Helper function to generate dummy seconds
function generateDummySeconds(existingSeconds: string[]): string[] {
  const seconds: string[] = [];
  const secondRanges: [number, number][] = [
    [0, 9], [10, 19], [20, 29], [30, 39], [40, 49], [50, 59],
  ];

  secondRanges.forEach((range) => {
    const randomSecond = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
    const secondString = randomSecond.toString().padStart(2, '0');

    // Only add if not already used
    if (!existingSeconds.includes(secondString)) {
      seconds.push(secondString);
    }
  });

  return seconds;
}
