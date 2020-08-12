import { Form, TextArea } from 'semantic-ui-react';

function UniformInstructions({ handleChange, uniform }) {
  return (
    <Form.Input label='Uniform Details'>
      <TextArea
        name='uniformInstructions'
        placeholder='Detail uniform specifications for this position...'
        onChange={handleChange}
        value={uniform}
      />
    </Form.Input>
  );
}

export default UniformInstructions;
