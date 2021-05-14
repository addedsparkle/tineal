import React from 'react';
import PropTypes from 'prop-types';
import { Step, Icon } from 'semantic-ui-react';

const getStepState = (currentStep, stepIndex) => ({
  active: currentStep === stepIndex,
  disabled: currentStep < stepIndex,
  completed: currentStep > stepIndex,
});

const CreateMealStep = ({
  currentStep, stepIndex, name, description, icon,
}) => {
  const { active, completed, disabled } = getStepState(currentStep, stepIndex);

  return (
    <Step active={active} disabled={disabled} completed={completed}>
      <Icon name={icon} />
      <Step.Content>
        <Step.Title>{name}</Step.Title>
        <Step.Description>{description}</Step.Description>
      </Step.Content>
    </Step>
  );
};

CreateMealStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  stepIndex: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const createMealSteps = [
  { name: 'Name', description: 'Name for the meal', icon: 'pencil' },
  { name: 'Key Ingredient', description: 'Key Ingredient in the meal', icon: 'puzzle piece' },
  { name: 'Recipe', description: 'Full ingredients and steps to create this meal', icon: 'numbered list' },
  { name: 'Review', description: 'Review and save meal', icon: 'clipboard check' },
];

const CreateMealSteps = ({ currentStep }) => (
  <Step.Group attached widths={createMealSteps.length}>
    {
      createMealSteps.map(({ name, description, icon }, index) => (
        <CreateMealStep
          name={name}
          description={description}
          icon={icon}
          stepIndex={index}
          currentStep={currentStep}
        />
      ))
    }
  </Step.Group>
);

CreateMealSteps.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default CreateMealSteps;
