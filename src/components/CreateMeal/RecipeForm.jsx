import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const RecipeForm = ({ onSubmit }) => {
  const [details, setDetails] = useState('');

  return (
    <Form>
      <Form.TextArea
        label="Ingredients"
        value={details}
        onChange={(e, { value }) => setDetails(value)}
      />
      <Form.Button type="submit" onClick={onSubmit(details)}>
        Next
      </Form.Button>
    </Form>
  );
};

RecipeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RecipeForm;
