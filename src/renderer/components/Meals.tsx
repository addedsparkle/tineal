import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Paper,
} from '@mui/material';
import { useCatalog } from '../providers/CatalogProvider';

const Meals: React.FC = () => {
  const catalog = useCatalog();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4">Meals</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: 'primary.light',
              }}
            >
              <TableCell>Name</TableCell>
              <TableCell align="right">Main Ingredient</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {catalog.meals.map((meal) => (
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
    </Box>
  );
};
export default Meals;
