import React from 'react';
import {
  Grid,
  Icon,
  Header,
  Tab,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CreateMealIconLink = () => (
  <Link to="/meals/new" aria-label="Create new meal">
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
    render: () => (
      <Tab.Pane>
        <PlansPane />
      </Tab.Pane>
    ),
  },
];

const Home = () => (
  <Segment padded textAlign="center">
    <Tab panes={panes} />
  </Segment>
);

export default Home;
