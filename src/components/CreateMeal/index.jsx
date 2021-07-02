/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Container,
  Input,
  Segment,
} from 'semantic-ui-react';

import './CreateMeal.css';
import CreateMealSteps from './CreateMealSteps';
import IngredientSelector from './Ingredients';
import StepsNavigator from './StepsNavigator';
import Details from './Details';
import ReviewCard from './ReviewCard';

const createMealSteps = [
  { name: 'Name', description: 'Name for the meal', icon: 'pencil' },
  { name: 'Key Ingredient', description: 'Key Ingredient in the meal', icon: 'puzzle piece' },
  { name: 'Ingredients', description: 'Full ingredients', icon: 'numbered list' },
  { name: 'Instructions', description: 'Instructions on how to make the meal', icon: 'numbered list' },
  { name: 'Review', description: 'Review and save meal', icon: 'clipboard check' },
];

const CreateMeal = ({ history }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState('');
  const [keyIngredient, setKeyIngredient] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  return (
    <Container>
      <CreateMealSteps currentStep={currentStep} steps={createMealSteps} />
      { currentStep === 0 && (
        <Segment attached padded>
          <Segment basic>
            <Input placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} key="nameField" />
          </Segment>
          <StepsNavigator
            disabled={!name}
            currentStep={currentStep}
            lastStep={createMealSteps.length - 1}
            onNext={() => setCurrentStep(currentStep + 1)}
          />
        </Segment>
      )}
      { currentStep === 1 && (
        <Segment attached padded>
          <IngredientSelector
            onSelect={(selection) => {
              setKeyIngredient(selection);
            }}
          />
          <StepsNavigator
            isComplete={!keyIngredient}
            currentStep={currentStep}
            lastStep={createMealSteps.length - 1}
            onNext={() => setCurrentStep(currentStep + 1)}
            onPrevious={() => setCurrentStep(currentStep - 1)}
          />
        </Segment>
      )}
      { currentStep === 2 && (
        <Segment attached padded>
          <Details value={ingredients} onChange={setIngredients} />
          <StepsNavigator
            isComplete={!ingredients}
            currentStep={currentStep}
            lastStep={createMealSteps.length - 1}
            onNext={() => setCurrentStep(currentStep + 1)}
            onPrevious={() => setCurrentStep(currentStep - 1)}
          />
        </Segment>
      )}
      { currentStep === 3 && (
        <Segment attached padded>
          <Details value={instructions} onChange={setInstructions} />
          <StepsNavigator
            isComplete={!instructions}
            currentStep={currentStep}
            lastStep={createMealSteps.length - 1}
            onNext={() => setCurrentStep(currentStep + 1)}
            onPrevious={() => setCurrentStep(currentStep - 1)}
          />
        </Segment>
      )}
      { currentStep === 4 && (
        <Segment attached padded>
          <ReviewCard
            name={name}
            keyIngredient={keyIngredient}
            ingredients={ingredients}
            instructions={instructions}
          />
          <StepsNavigator
            currentStep={currentStep}
            lastStep={createMealSteps.length - 1}
            onPrevious={() => setCurrentStep(currentStep - 1)}
            onFinish={() => { history.push('/meals'); }}
          />
        </Segment>
      )}
    </Container>
  );
};

export default withRouter(CreateMeal);
