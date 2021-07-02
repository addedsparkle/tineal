import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const Details = ({ label, details, onChange }) => (
  <Form>
    <Form.TextArea
      label={label}
      value={details}
      onChange={(e, { value }) => onChange(value)}
    />
  </Form>
);

Details.propTypes = {
  label: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Details;
