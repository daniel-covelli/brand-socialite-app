const options = require('../../../../utils/options');
import { Form } from 'semantic-ui-react';

function RoleType({ roletype, onChange }) {
  return (
    <Form.Group widths='equal'>
      <Form.Select
        name='roletype'
        label='Role Type'
        placeholder='Choose a Role'
        value={roletype}
        options={options.roles}
        onChange={onChange}
      />
    </Form.Group>
  );
}

export default RoleType;
