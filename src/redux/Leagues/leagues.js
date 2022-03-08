import { loadState, saveState } from '../../logic/localStorage';
// constants
const GET_LEAGUE = 'football-fallback/leagues/GET_LEAGUE';
const baseURL = 'https://v3.football.api-sports.io/leagues?id=39';

// initial state
const initialState = [];

// action creators
export const getLeague = (payload) => ({
  type: GET_LEAGUE,
  payload,
});

// thunk action functions
export const getLeagueFromAPI = () => async (dispatch) => {
  if (loadState('league').length === 0) {
    await fetch(`${baseURL}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'd194d989b964bc94b097e50bd3c27233',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        const leag = res.response.map((league) => ({
          name: league.league.name,
          logo: league.league.logo,
          country: league.country.name,
          season: '2021 - 2022',
        }));
        console.log(leag);
        saveState(leag, 'league');
        dispatch(getLeague(loadState('league')));
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    dispatch(getLeague(loadState('league')));
  }
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEAGUE: {
      return [...action.payload];
    }
    default:
      return state;
  }
};

export default reducer;
