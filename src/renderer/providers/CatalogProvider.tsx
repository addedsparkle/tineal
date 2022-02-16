import React, { ReactNode } from 'react';
import Catalog from './Catalog';

/* eslint react/prop-types: 0 */

const CatalogContext = React.createContext<Catalog | undefined>(undefined);


const CatalogProvider: React.FunctionComponent<{ children?: ReactNode, value: Catalog }> = (props: { children?: ReactNode, value: Catalog }) => {
  return (
    <CatalogContext.Provider value={props.value}>
      {props.children}
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
