import { loadState, saveState } from '../../logic/localStorage';
// constants
const GET_TEAMS = 'football-fallback/league/GET_TEAMS';
const baseURL = 'https://v3.football.api-sports.io/standings?league=39&season=2021';

// initial state
const initialState = [];

// action creators
export const getTeams = (payload) => ({
  type: GET_TEAMS,
  payload,
});

// thunk action functions

export const getTeamsFromAPI = () => async (dispatch) => {
  if (!loadState()) {
    await fetch(`${baseURL}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'd194d989b964bc94b097e50bd3c27233',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        const arrangedList = res.response[0].league.standings[0].map((team) => team);
        saveState(arrangedList);
        dispatch(getTeams(arrangedList));
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    dispatch(getTeams(loadState()));
  }
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAMS: {
      return [...action.payload];
    }
    default:
      return state;
  }
};

export default reducer;
