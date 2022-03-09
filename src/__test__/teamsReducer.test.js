import teamsReducer from '../redux/Teams/teams';

describe('Testing for Get Teams action in teamsReducer ', () => {
  test('when the action is getTeams, we have a new state with the list of teams added from the payload', () => {
    // arrange
    const state = [
      { id: 50, name: 'Manchester United', rank: 1 },
      { id: 51, name: 'Chelsea', reserved: false },
      { id: 52, name: 'Liverpool', reserved: false },
    ];

    const GET_TEAMS = 'football-fallback/teams/GET_TEAMS';
    const action = { type: GET_TEAMS, payload: state };

    // act
    const result = teamsReducer([], action);
    // assert
    expect(result).toEqual(state);
  });
});

describe('When we give wrong action in teamsReducer ', () => {
  test('when the action is wrong, we return the same state with no changes', () => {
    // arrange
    const state = [
      { id: 50, name: 'Manchester United', rank: 1 },
      { id: 51, name: 'Chelsea', reserved: false },
      { id: 52, name: 'Liverpool', reserved: false },
    ];

    const WRONG_ACTION = 'football-fallback/rockets/WRONG_ROCKETS';
    const action = { type: WRONG_ACTION, payload: state };

    // act
    const result = teamsReducer([], action);
    // assert
    expect(result).toEqual([]);
  });
});
