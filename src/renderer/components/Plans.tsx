import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material';
import { useCatalog } from '../providers/CatalogProvider';

const Plans: React.FC = () => {
  const catalog = useCatalog();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4">Meal Plans</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: 'primary.light',
              }}
            >
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {catalog.plans.map((plan) => (
              <TableRow
                key={plan.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {plan.startDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default Plans;
