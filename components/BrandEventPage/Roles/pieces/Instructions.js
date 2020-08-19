import { Form, TextArea } from 'semantic-ui-react';
import { roles } from '../../../../utils/options';

function instructions({ handleChange, instructions }) {
  return (
    <Form.Input label='Instructions'>
      <TextArea
        name='instructions'
        placeholder='List the oblications of this position...'
        onChange={handleChange}
        value={instructions}
      />
    </Form.Input>
  );
}

export default instructions;
