import React from 'react';
import './App.css';
import {
  // Container,
  Grid,
  Icon,
  Header,
  Segment,
} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import 'firebase/auth';
import { AuthCheck } from 'reactfire';
import CreateMeal from './components/CreateMeal';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import MainMenu from './components/MainMenu';

function App() {
  return (
    <div className="App">
      <Segment inverted color="yellow">
        <Header size="huge" icon>
          <Icon name="asterisk" />
          <Header.Content>Recipe Roulette</Header.Content>
        </Header>
      </Segment>
      <AuthCheck fallback={<LoginForm />}>
        <Router>
          <Grid padded>
            <Grid.Column width={2}>
              <MainMenu />
            </Grid.Column>
            <Grid.Column width={14}>
              <Switch>
                <Route path="/meals/new">
                  <CreateMeal />
                </Route>
                <Route path="/meals">
                  View Meals
                </Route>
                <Route path="/plans/new">
                  New Plan
                </Route>
                <Route path="/plans">
                  View Plans
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Grid.Column>
          </Grid>
        </Router>
      </AuthCheck>
    </div>
  );
}

export default App;
