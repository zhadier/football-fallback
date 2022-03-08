import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import teamsReducer, { getTeamsFromAPI } from './Teams/teams';
import leagueReducer, { getLeagueFromAPI } from './Leagues/leagues';

const reducer = combineReducers({
  teamsReducer,
  leagueReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.dispatch(getTeamsFromAPI());
store.dispatch(getLeagueFromAPI());

export default store;
