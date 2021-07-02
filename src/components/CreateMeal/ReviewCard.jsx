import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, Header } from 'semantic-ui-react';

const ReviewCard = ({
  name,
  keyIngredient,
  ingredients,
  instructions,
}) => (
  <Card.Group>
    <Card>
      <Card.Content header={name} />
      <Card.Content meta={keyIngredient} />
      <Card.Content>
        <Grid columns={2} divided>
          <Grid.Column>
            <Header>Ingredients</Header>
            {ingredients}
          </Grid.Column>
          <Grid.Column>
            <Header>Instructions</Header>
            {instructions}
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  </Card.Group>
);

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  keyIngredient: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
};

export default ReviewCard;
