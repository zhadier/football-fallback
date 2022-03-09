import React from 'react';
import { setupServer } from 'msw/node';
import {
  waitFor, render, fireEvent, screen, cleanup,
} from './test-utils';
import App from '../App';
import '@testing-library/jest-dom';
import handlers from './mock/handles';

const server = setupServer(...handlers);

afterEach(() => cleanup(), server.resetHandlers());

beforeAll(() => server.listen({
  onUnhandledRequest: 'error',
}));

afterAll(() => server.close());

it('App Renders Correctly', async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText('Premier League'));
  expect(container).toMatchSnapshot();
});

it('Clicking on a team takes you to its details page', async () => {
  render(<App />);
  await waitFor(() => screen.getByText('Liverpool'));
  fireEvent.click(screen.getByText('Liverpool'));
  expect(screen.getByText('All Stats')).toBeInTheDocument();
});

it('Clicking on < takes you back to the home page', async () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('back'));
  expect(screen.getByText('Team rankings')).toBeInTheDocument();
});
