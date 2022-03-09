import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import teamsReducer from './Teams/teams';
import leagueReducer from './Leagues/leagues';

const reducer = combineReducers({
  teamsReducer,
  leagueReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
