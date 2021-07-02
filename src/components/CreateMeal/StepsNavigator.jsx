import React from 'react';
import PropTypes from 'prop-types';
import { Button, Segment } from 'semantic-ui-react';

const StepsNavigator = ({
  lastStep,
  disabled,
  onNext,
  onPrevious,
  currentStep,
  onFinish,
}) => (
  <Segment basic>
    {currentStep > 0 && (
    <Button onClick={() => onPrevious()}>Prev</Button>
    )}
    {currentStep === lastStep ? (
      <Button disabled={disabled} onClick={() => onFinish()}>Finish</Button>
    ) : (
      <Button disabled={disabled} onClick={() => onNext()}>Next</Button>
    )}
  </Segment>
);

StepsNavigator.propTypes = {
  lastStep: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
};

export default StepsNavigator;
