import React from 'react';

/* eslint react/prop-types: 0 */

const meals = [
  {
    id: 1,
    name: 'One Pot Savoury Chicken',
    mainIngredient: 'Chicken',
  },
  {
    id: 2,
    name: 'Keema Matar',
    mainIngredient: 'Beef',
  },
  {
    id: 3,
    name: 'Teriyaki Salmon Rice',
    mainIngredient: 'Fish',
  },
];

const MealsContext = React.createContext();

function MealsProvider({ children }) {
  return <MealsContext.Provider value={meals}>{children}</MealsContext.Provider>;
}

function useMeals() {
  const context = React.useContext(MealsContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

export { MealsProvider, useMeals };
