import React, { useState } from 'react';

import {
  Button,
  Container,
  Step,
  Icon,
  Input,
  Segment,
  Grid,
} from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish, faDrumstickBite, faCarrot } from '@fortawesome/free-solid-svg-icons';

const constructNameStep = (currentStep, name) => {
  const active = currentStep === 0 && 'active';
  return (
    <Step active={active} completed={name}>
      <Icon name="pencil" />
      <Step.Content>
        <Step.Title>Name</Step.Title>
        <Step.Description>Name for the meal</Step.Description>
      </Step.Content>
    </Step>
  );
};

const constructIngredientStep = (currentStep, ingredient) => {
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

const constructSaveStep = (currentStep) => {
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

const CreateMeal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState();
  const [ingredient, setIngredient] = useState();

  return (
    <Container>
      <Step.Group attached widths={3}>

        { constructNameStep(currentStep, name) }
        { constructIngredientStep(currentStep, ingredient) }
        { constructSaveStep(currentStep) }

      </Step.Group>
      { currentStep === 0 && (
        <Segment attached>
          <Input placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} key="nameField" />
          <Button disabled={!name} onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
        </Segment>
      )}
      { currentStep === 1 && (
        <Segment attached padded>
          <Grid centered columns={5}>
            <Grid.Column>
              <Button onClick={() => { setIngredient('fish'); setCurrentStep(currentStep + 1); }}>
                <Icon>
                  <FontAwesomeIcon icon={faFish} />
                </Icon>
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={() => { setIngredient('chicken'); setCurrentStep(currentStep + 1); }}>
                <Icon>
                  <FontAwesomeIcon icon={faDrumstickBite} />
                </Icon>
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={() => { setIngredient('beef'); setCurrentStep(currentStep + 1); }}>
                <Icon>
                  <FontAwesomeIcon icon={faDrumstickBite} />
                </Icon>
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={() => { setIngredient('pork'); setCurrentStep(currentStep + 1); }}>
                <Icon>
                  <FontAwesomeIcon icon={faDrumstickBite} />
                </Icon>
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={() => { setIngredient('vegetable'); setCurrentStep(currentStep + 1); }}>
                <Icon>
                  <FontAwesomeIcon icon={faCarrot} />
                </Icon>
              </Button>
            </Grid.Column>
          </Grid>
          Ingredient icons made by
          <a href="https://www.freepik.com" title="Freepik">Freepik</a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </Segment>
      )}
      <br />
      {currentStep}
      { name }
      { ingredient }

    </Container>

  );
};

export default CreateMeal;
