import MealStore from "./MealStore";
import PlanStore from "./PlanStore";

export interface Catalog {
  meals?: MealStore;
  plans?: PlanStore;
};

export enum CatalogSection {
  Meals,
  Plans,
}
