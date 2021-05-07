/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import {
  Button,
  Container,
  Step,
  Icon,
  Input,
  Segment,
  Grid,
  Header,
} from 'semantic-ui-react';
import Carrot from './icons/Carrot';
import Fish from './icons/Fish';
import Pork from './icons/Pork';
import Chicken from './icons/Chicken';
import Cow from './icons/Cow';
import Sheep from './icons/Sheep';

import './CreateMeal.css';

const NameStep = ({ currentStep, name }) => {
  const active = currentStep === 0;
  return (
    <Step active={active} completed={!!name}>
      <Icon name="pencil" />
      <Step.Content>
        <Step.Title>Name</Step.Title>
        <Step.Description>Name for the meal</Step.Description>
      </Step.Content>
    </Step>
  );
};

const IngredientStep = ({ currentStep, ingredient }) => {
  const active = currentStep === 1;
  const disabled = currentStep < 1;

  return (
    <Step active={active} disabled={disabled} completed={ingredient}>
      <Icon name="puzzle piece" />
      <Step.Content>
        <Step.Title>Key Ingredient</Step.Title>
        <Step.Description>Main Ingredient</Step.Description>
      </Step.Content>
    </Step>
  );
};

const SaveStep = ({ currentStep }) => {
  const active = currentStep === 2;

  return (
    <Step active={active} disabled={!active}>
      <Icon name="pencil" />
      <Step.Content>
        <Step.Title>Review</Step.Title>
        <Step.Description>Review and save</Step.Description>
      </Step.Content>
    </Step>
  );
};

const IngredientButton = ({ update, label, children }) => (
  <Button
    basic
    fluid
    icon
    onClick={() => update()}
  >
    {children}
    <Header as="h5">{label}</Header>
  </Button>
);

const CreateMeal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState('');
  const [ingredient, setIngredient] = useState();

  const ingredients = [
    { value: 'fish', label: 'Fish', icon: (<Fish />) },
    { value: 'chicken', label: 'Chicken', icon: (<Chicken />) },
    { value: 'beef', label: 'Beef', icon: (<Cow />) },
    { value: 'pork', label: 'Pork', icon: (<Pork />) },
    { value: 'lamb', label: 'Lamb/Mutton', icon: (<Sheep />) },
    { value: 'vegetarian', label: 'Vegetarian', icon: (<Carrot />) },
  ];

  return (
    <Container>
      <Step.Group attached widths={3}>
        <NameStep currentStep={currentStep} name={name} />
        <IngredientStep currentStep={currentStep} ingredient={ingredient} />
        <SaveStep currentStep={currentStep} />
      </Step.Group>
      { currentStep === 0 && (
        <Segment attached>
          <Input placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} key="nameField" />
          <Button disabled={!name} onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
        </Segment>
      )}
      { currentStep === 1 && (
        <Segment attached padded>
          <Grid centered columns={ingredients.length}>
            { ingredients.map(({ value, label, icon }) => (
              <Grid.Column>
                <IngredientButton
                  update={() => {
                    setIngredient(value);
                    setCurrentStep(currentStep + 1);
                  }}
                  label={label}
                >
                  {icon}
                </IngredientButton>
              </Grid.Column>
            ))}
          </Grid>
          <span className="footer">
            Ingredient icons made by
            <a href="https://www.freepik.com" title="Freepik"> Freepik </a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a>
          </span>
          <br />
        </Segment>
      )}
      { currentStep === 2 && (
        <Segment attached padded>
          <Header as="h5">{name}</Header>
          <Header as="h5">{ingredient}</Header>
          <Button>
            Save
          </Button>
        </Segment>
      )}
    </Container>

  );
};

export default CreateMeal;
