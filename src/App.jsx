import React from 'react';
import './App.css';
import {
  Container,
  Grid,
  Icon,
  Header,
  Tab,
  Segment,
} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import CreateMeal from './components/CreateMeal';

const CreateMealIconLink = () => (
  <Link to="/meals/create" aria-label="Create new meal">
    <Header icon>
      <Icon link name="food" />
      Add a new meal
    </Header>
  </Link>
);

const ViewMealIconLink = () => (
  <Link to="/meals" aria-label="View all meals">
    <Header icon>
      <Icon link name="list" />
      View meals
    </Header>
  </Link>
);

const CreatePlanIconLink = () => (
  <Link to="/plans/create" aria-label="Create new meal plan">
    <Header icon>
      <Icon link name="list alternate" />
      Add a new meal plan
    </Header>
  </Link>
);

const ViewPlanIconLink = () => (
  <Link to="/plans" aria-label="View all meal plans">
    <Header icon>
      <Icon link name="list" />
      View meal plans
    </Header>
  </Link>
);

const MealPane = () => (
  <Grid columns={2} stackable textAlign="center">
    <Grid.Row verticalAlign="middle">
      <Grid.Column>
        <CreateMealIconLink />
      </Grid.Column>
      <Grid.Column>
        <ViewMealIconLink />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const PlansPane = () => (
  <Grid columns={2} stackable textAlign="center">
    <Grid.Row verticalAlign="middle">
      <Grid.Column>
        <CreatePlanIconLink />
      </Grid.Column>
      <Grid.Column>
        <ViewPlanIconLink />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const panes = [
  {
    menuItem: {
      key: 'meals',
      icon: 'food',
      content: 'Meals',
    },
    render: () => (
      <Tab.Pane>
        <MealPane />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: 'plans', icon: 'list alternate', content: 'Plans' },
    render: () => (<Tab.Pane><PlansPane /></Tab.Pane>),
  },
];

function App() {
  return (
    <div className="App">
      <Segment inverted color="yellow">
        <Header size="huge" icon>
          <Icon loading name="asterisk" />
          <Header.Content>Recipe Roulette</Header.Content>
        </Header>
      </Segment>
      <Router>
        <Container>
          <Segment padded textAlign="center">
            <Tab panes={panes} />
          </Segment>
          <Switch>
            <Route path="/meals/create">
              <CreateMeal />
            </Route>
            <Route path="/">
              <Header>
                Choose a task to perform from the menu
              </Header>
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
