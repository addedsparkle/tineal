import React from 'react';
import { Link } from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import { AppBar, Box, Grid, Paper, Toolbar, Typography } from '@mui/material';

const MainMenu: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', paddingBottom: 5, flexGrow: 1 }}>
      <Paper sx={{ backgroundColor: 'primary.main' }}>
        <AppBar position="static">
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h2">Recipe Roulette</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">
                  <MaterialLink
                    component={Link}
                    to="/"
                    aria-label="Home"
                    underline="hover"
                    color="inherit"
                  >
                    Home
                  </MaterialLink>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">
                  <MaterialLink
                    component={Link}
                    to="/meals"
                    aria-label="Meals"
                    underline="hover"
                    color="inherit"
                  >
                    Meals
                  </MaterialLink>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">
                  <MaterialLink
                    component={Link}
                    to="/plans"
                    aria-label="Plans"
                    underline="hover"
                    color="inherit"
                  >
                    Plans
                  </MaterialLink>
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Paper>
    </Box>
  );
};

export default MainMenu;
