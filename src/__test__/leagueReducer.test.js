import leagueReducer from '../redux/Leagues/leagues';

describe('Testing for Get League action in leagueReducer ', () => {
  test('when the action is getLeague, we have a new state equal to the details of the new league added from the payload', () => {
    // arrange
    const state = [{
      id: 39, name: 'Barclays Premier League', season: 2021, country: 'England',
    }];

    const GET_LEAGUE = 'football-fallback/leagues/GET_LEAGUE';
    const action = { type: GET_LEAGUE, payload: state };

    // act
    const result = leagueReducer([], action);
    // assert
    expect(result).toEqual(state);
  });
});

describe('When we give wrong action in leagueReducer ', () => {
  test('when the action is wrong, we return the same state with no changes', () => {
    // arrange
    const state = [{
      id: 39, name: 'Barclays Premier League', season: 2021, country: 'England',
    }];

    const WRONG_ACTION = 'football-fallback/rockets/WRONG_ROCKETS';
    const action = { type: WRONG_ACTION, payload: state };

    // act
    const result = leagueReducer([], action);
    // assert
    expect(result).toEqual([]);
  });
});
