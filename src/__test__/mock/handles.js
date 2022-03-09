import { rest } from 'msw';

const handlers = [
  rest.get('https://v3.football.api-sports.io/standings', (req, res, ctx) => {
    console.log('Mocked Team');

    return res(
      ctx.json({
        response: [
          {
            league: {
              id: 39,
              name: 'Premier League',
              standings: [
                [
                  {
                    rank: 1,
                    team: {
                      id: 40,
                      name: 'Liverpool',
                      logo: 'https://media.api-sports.io/football/teams/40.png',
                    },
                    points: 70,
                    goalsDiff: 41,
                    group: 'Premier League',
                    form: 'WWWWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage)',
                    all: {
                      played: 24,
                      win: 23,
                      draw: 1,
                      lose: 0,
                      goals: {
                        for: 56,
                        against: 15,
                      },
                    },
                    home: {
                      played: 12,
                      win: 12,
                      draw: 0,
                      lose: 0,
                      goals: {
                        for: 31,
                        against: 9,
                      },
                    },
                    away: {
                      played: 12,
                      win: 11,
                      draw: 1,
                      lose: 0,
                      goals: {
                        for: 25,
                        against: 6,
                      },
                    },
                    update: '2020-01-29T00:00:00+00:00',
                  },
                ],
              ],
            },
          },
        ],
      }),
      ctx.status(200),
    );
  }),
  rest.get('https://v3.football.api-sports.io/leagues', (req, res, ctx) => {
    console.log('Mocked League');

    return res(
      ctx.json({
        response: [
          {
            league: {
              id: 39,
              name: 'Premier League',
              type: 'League',
              logo: 'https://media.api-sports.io/football/leagues/2.png',
            },
            country: {
              name: 'England',
              code: 'GB',
              flag: 'https://media.api-sports.io/flags/gb.svg',
            },
            seasons: [{ 2021: true }, { 2022: true }],
          },
        ],
      }),
      ctx.status(200),
    );
  }),
];

export default handlers;
