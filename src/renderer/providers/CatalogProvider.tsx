import React from 'react';

/* eslint react/prop-types: 0 */

const meals: Meal[] = [
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

const plans: Plan[] = [
  {
    id: 1,
    startDate: '2022/02/07',
    meals: [1, 3],
  },
];

interface Meal {
  id: number;
  name: string;
  mainIngredient: string;
}

interface Plan {
  id: number;
  startDate: string;
  meals: number[];
}

interface Catalog {
  meals: Meal[];
  plans: Plan[];
}

const CatalogContext = React.createContext<Catalog | undefined>(undefined);

const CatalogProvider: React.FunctionComponent = ({ children }) => {
  return (
    <CatalogContext.Provider value={{ meals, plans }}>
      {children}
    </CatalogContext.Provider>
  );
};

function useCatalog() {
  const context = React.useContext(CatalogContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

export { CatalogProvider, useCatalog, CatalogContext };
