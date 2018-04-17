export const API_PIC_URL =
    process.env.REACT_APP_API_PIC_URL || 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/active_players.json?team=nyy';
export const API_DATA_URL =
    process.env.REACT_APP_API_DATA_URL || 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/cumulative_player_stats.json?playerstats=HR&team=nyy&sort=stats.HR.D&limit=4';