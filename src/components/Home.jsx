import React from 'react';
import { Link } from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import {
  Typography,
  Grid,
  Box,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const ViewMealIconLink = () => (
  <MaterialLink component={Link} to="/meals" aria-label="View all meals">
    <Typography variant="h5">
      <DinnerDiningIcon sx={{ fontSize: 120 }} />
      <p>View meals</p>
    </Typography>
  </MaterialLink>
);

const ViewPlanIconLink = () => (
  <MaterialLink to="/plans" aria-label="View all meal plans">
    <Typography variant="h5">
      <FeaturedPlayListIcon sx={{ fontSize: 120 }} />
      <p>View plans</p>
    </Typography>
  </MaterialLink>
);

const Home = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item>
          <ViewMealIconLink />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <ViewPlanIconLink />
        </Item>
      </Grid>
    </Grid>
  </Box>
);

export default Home;
