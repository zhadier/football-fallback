import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import teamsReducer, { getTeamsFromAPI } from './Teams/teams';

const reducer = combineReducers({
  teamsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.dispatch(getTeamsFromAPI());

export default store;
