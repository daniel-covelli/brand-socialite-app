import { Form } from 'semantic-ui-react';

function NamesForm({ props }) {
  return (
    <Form.Group widths='equal'>
      <Form.Input
        name='eventName'
        value={props.event.eventName}
        label='Event Name'
        placeholder='Ex. Album Release Party'
        onChange={props.handleChange}
      />
      <Form.Input
        name='hostName'
        value={props.event.hostName}
        label='Host'
        placeholder='Ex. Vogue'
        onChange={props.handleChange}
      />
    </Form.Group>
  );
}

export default NamesForm;
