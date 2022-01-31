import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import {
  AppBar,
  Box,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';

const MainMenu = ({ location }) => (
  <Box sx={{ textAlign: 'center', paddingBottom: 5, flexGrow: 1 }}>
    <Paper sx={{ backgroundColor: 'primary.main' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Recipe Roulette
          </Typography>
          <Typography variant="h6" sx={{ marginLeft: 20 }}>
            <MaterialLink
              component={Link}
              to="/"
              aria-label="Home"
              underline={location === 'home' ? 'always' : 'hover'}
              color="inherit"
            >
              Home
            </MaterialLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginLeft: 20 }}>
            <MaterialLink
              component={Link}
              to="/meals"
              aria-label="Meals"
              underline={location === 'meals' ? 'always' : 'hover'}
              color="inherit"
            >
              Meals
            </MaterialLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginLeft: 20 }}>
            <MaterialLink
              component={Link}
              to="/plans"
              aria-label="Plans"
              underline={location === 'plans' ? 'always' : 'hover'}
              color="inherit"
            >
              Plans
            </MaterialLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  </Box>
);

MainMenu.propTypes = {
  location: PropTypes.string.isRequired,
};

export default MainMenu;
