import fs from 'fs';
import path from 'path';
import { CatalogRequest, RequestAction } from '../shared/CatalogRequests';
import { app } from 'electron';
import MealStore from '../shared/MealStore';
import PlanStore from '../shared/PlanStore';
import { Catalog, CatalogSection } from '../shared/Catalog';

const CATALOG_DIR: string = '/recipe-roulette/catalog';
const MEALS_FILE: string = 'meals.json';
const PLANS_FILE: string = 'plans.json';

const loadCatalogData = (catalogRequest: CatalogRequest) => {
  const catalogPath = path.join(app.getPath('appData'), CATALOG_DIR)
  const catalog: Catalog = {meals: undefined, plans: undefined};

  if (CatalogSection.Meals in catalogRequest.sections)
  {
    const mealsPath = path.join(catalogPath, MEALS_FILE);
    const data = fs.readFileSync(mealsPath, 'utf-8');
    catalog.meals = JSON.parse(data);
  }
  if (CatalogSection.Meals in catalogRequest.sections)
  {
    const plansPath = path.join(catalogPath, PLANS_FILE);
    const data = fs.readFileSync(plansPath, 'utf-8');
    catalog.plans = JSON.parse(data);
  }
  return catalog;
}

const CatalogService = {
  handleCatalogRequest: (event: Electron.IpcMainInvokeEvent, catalogRequest: CatalogRequest) => {
    switch (catalogRequest.action) {
      case RequestAction.load: {
        return loadCatalogData(catalogRequest);
      }
      default: {
        throw 'Unknown catalog request action'
      }
    }
  },
  initialise: () => {
    const catalogPath = path.join(app.getPath('appData'), CATALOG_DIR)

    fs.mkdir(catalogPath, (error) => {

      if (error && error.code != 'EEXIST') throw error;

      const mealsPath = path.join(catalogPath, MEALS_FILE);
      const plansPath = path.join(catalogPath, PLANS_FILE);

      const mealsData : MealStore = { lastUpdate: Date.now(), meals: []};
      const plansData : PlanStore = { lastUpdate: Date.now(), plans: []};

      fs.writeFile(mealsPath, JSON.stringify(mealsData), { flag: 'wx' }, function (err) {
        if (err &&  err.code != 'EEXIST') throw err;
      });

      fs.writeFile(plansPath, JSON.stringify(plansData), { flag: 'wx' }, function (err) {
        if (err &&  err.code != 'EEXIST') throw err;
      });
    });

  },
}

export default CatalogService;
