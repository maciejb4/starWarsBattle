import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Star Wars Battle!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header description', () => {
  render(<App />);
  const linkElement = screen.getByText(/Epic Star Wars fights!/i);
  expect(linkElement).toBeInTheDocument();
});
