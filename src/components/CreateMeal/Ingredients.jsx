import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  Header,
} from 'semantic-ui-react';
import Carrot from '../icons/Carrot';
import Fish from '../icons/Fish';
import Pork from '../icons/Pork';
import Chicken from '../icons/Chicken';
import Cow from '../icons/Cow';
import Sheep from '../icons/Sheep';

const ingredients = [
  { value: 'fish', label: 'Fish', icon: (<Fish />) },
  { value: 'chicken', label: 'Chicken', icon: (<Chicken />) },
  { value: 'beef', label: 'Beef', icon: (<Cow />) },
  { value: 'pork', label: 'Pork', icon: (<Pork />) },
  { value: 'lamb', label: 'Lamb/Mutton', icon: (<Sheep />) },
  { value: 'vegetarian', label: 'Vegetarian', icon: (<Carrot />) },
];

const IngredientSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState('');

  return (
    <div>
      <Grid centered columns={ingredients.length}>
        { ingredients.map(({ value, label, icon }) => (
          <Grid.Column>

            <Button
              basic
              fluid
              icon
              color={selected === value && 'yellow'}
              onClick={() => { onSelect(value); setSelected(value); }}
            >
              {icon}
              <Header as="h5">{label}</Header>
            </Button>
          </Grid.Column>
        ))}
      </Grid>
      <span className="footer">
        Ingredient icons made by
        <a href="https://www.freepik.com" title="Freepik"> Freepik </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a>
      </span>
    </div>
  );
};

IngredientSelector.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default IngredientSelector;
