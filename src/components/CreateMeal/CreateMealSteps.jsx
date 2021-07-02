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

const CreateMealSteps = ({ currentStep, steps }) => (
  <Step.Group attached widths={steps.length}>
    {
      steps.map(({ name, description, icon }, index) => (
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
  steps: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
};

export default CreateMealSteps;
