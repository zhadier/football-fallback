import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import leagueReducer, { getTeamsFromAPI } from './league/league';

const reducer = combineReducers({
  leagueReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.dispatch(getTeamsFromAPI());

export default store;
