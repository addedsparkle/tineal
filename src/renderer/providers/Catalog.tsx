import Meal from './Meal';
import Plan from './Plan';

/* const meals: Meal[] = [
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
]; */

interface Catalog {
  meals: Meal[];
  plans: Plan[];
}


export default Catalog;
