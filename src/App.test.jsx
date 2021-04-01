import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link to create a meal', () => {
  render(<App />);
  const linkElement = screen.getByText(/Create Meal/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders link to create a plan', () => {
  render(<App />);
  const linkElement = screen.getByText(/Create Plan/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders link to view meals', () => {
  render(<App />);
  const linkElement = screen.getByText(/View Meals/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders link to view plans', () => {
  render(<App />);
  const linkElement = screen.getByText(/View Plans/i);
  expect(linkElement).toBeInTheDocument();
});
