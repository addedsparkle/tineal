import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';


describe('The App component', () => {

  describe('when tab menu is set to Meals', () => {
    beforeEach( () => render(<App />))
    test('renders link to create a meal', () => {
      const linkElement = screen.getByText(/Add a new meal/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('renders link to view meals', () => {
      const linkElement = screen.getByText(/View meals/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('renders active tab for meals', () => {
      const linkElement = screen.getByText('Meals');
      expect(linkElement).toBeInTheDocument();
    });

    test('renders tab for plans', () => {
      const linkElement = screen.getByText('Plans');
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe('when tab menu is set to plans', () => {

    beforeEach( () => {
      render(<App />)
      fireEvent.click(screen.getByText('Plans'))
    })
    test('renders link to create a plan', () => {
      const linkElement = screen.getByText(/Add a new meal plan/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('renders link to view plans', () => {
      const linkElement = screen.getByText(/View meal plans/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('renders active tab for plans', () => {
      const linkElement = screen.getByText('Plans');
      expect(linkElement).toBeInTheDocument();
    });

    test('renders tab for meals', () => {
      const linkElement = screen.getByText('Meals');
      expect(linkElement).toBeInTheDocument();
    });
  });
});
