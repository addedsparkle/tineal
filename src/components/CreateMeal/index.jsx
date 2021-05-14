/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import {
  Button,
  Container,
  Form,
  Input,
  Segment,
  Header,
} from 'semantic-ui-react';

import './CreateMeal.css';
import CreateMealSteps from './Steps';
import IngredientSelector from './Ingredients';

const CreateMeal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState('');
  const [keyIngredient, setKeyIngredient] = useState('');
  const [details, setDetails] = useState('');

  return (
    <Container>
      <CreateMealSteps currentStep={currentStep} />
      { currentStep === 0 && (
        <Segment attached>
          <Input placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} key="nameField" />
          <Button disabled={!name} onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
        </Segment>
      )}
      { currentStep === 1 && (
        <Segment attached padded>
          <IngredientSelector
            onSelect={(selection) => {
              setKeyIngredient(selection);
              setCurrentStep(currentStep + 1);
            }}
          />
        </Segment>
      )}
      { currentStep === 2 && (
        <Segment attached padded>
          <Form>
            <Form.TextArea
              label="Ingredients"
              value={details}
              onChange={(e, { value }) => setDetails(value)}
            />
            <Form.Button type="submit" onClick={setCurrentStep(currentStep + 1)}>
              Next
            </Form.Button>
          </Form>
        </Segment>
      )}
      { currentStep === 3 && (
        <Segment attached padded>
          <Header as="h5">{name}</Header>
          <Header as="h5">{keyIngredient}</Header>
          <Header as="h5">{details}</Header>
          <Button>
            Save
          </Button>
        </Segment>
      )}
    </Container>
  );
};

export default CreateMeal;
