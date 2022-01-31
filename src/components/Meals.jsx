import React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

const Meals = () => {
  const meals = [{
    name: 'One Pot Savoury Chicken',
    mainIngredient: 'Chicken',
  },
  {
    name: 'Keema Matar',
    mainIngredient: 'Beef',
  },
  {
    name: 'Teriyaki Salmon Rice',
    mainIngredient: 'Fish',
  }];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Main Ingredient</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meals.map((meal) => (
            <TableRow
              key={meal.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {meal.name}
              </TableCell>
              <TableCell align="right">{meal.mainIngredient}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Meals;
