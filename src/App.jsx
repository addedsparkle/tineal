import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import MainMenu from './components/MainMenu';
import Meals from './components/Meals';
import { MealsProvider } from './providers/MealsProvider';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#79000e',
    },
    text: {
      secondary: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MealsProvider>
        <Container>
          <Router>
            <Switch>
              <Route path="/meals">
                <MainMenu location="meals" />
                <Meals />
              </Route>
              <Route path="/plans">
                <MainMenu location="plans" />
                View Plans
              </Route>
              <Route path="/">
                <MainMenu location="home" />
                <Home />
              </Route>
            </Switch>
          </Router>
        </Container>
      </MealsProvider>
    </ThemeProvider>
  );
}

export default App;
