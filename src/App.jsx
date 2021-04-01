import React from 'react';
import './App.css';
import { Grid, Icon } from 'semantic-ui-react';

const CreateMealIconLink = () => (
  <Icon.Group size="huge">
    <Icon circular link name="food" color="green" />
    <Icon corner name="add" />
  </Icon.Group>
);

const ViewMealIconLink = () => (
  <Icon.Group size="huge">
    <Icon circular link name="food" color="green" />
    <Icon corner name="search" />
  </Icon.Group>
);

const CreatePlanIconLink = () => (
  <Icon.Group size="huge">
    <Icon circular link name="list alternate" color="green" />
    <Icon corner name="add" />
  </Icon.Group>
);

const ViewPlanIconLink = () => (
  <Icon.Group size="huge">
    <Icon circular link name="list alternate" color="green" />
    <Icon corner name="search" />
  </Icon.Group>
);

function App() {
  return (
    <div className="App">
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <CreateMealIconLink />
            <h3>Create Meal</h3>
          </Grid.Column>
          <Grid.Column>
            <ViewMealIconLink />
            <h3>View Meals</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <CreatePlanIconLink />
            <h3>Create Plan</h3>
          </Grid.Column>
          <Grid.Column>
            <ViewPlanIconLink />
            <h3>View Plans</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
