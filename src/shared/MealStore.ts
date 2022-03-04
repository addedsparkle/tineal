import Meal from "./Meal";

export default interface MealStore {
  lastUpdate: number;
  meals: Meal[];
}
