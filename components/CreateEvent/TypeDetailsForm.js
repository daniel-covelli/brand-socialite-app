import { Form } from 'semantic-ui-react';

function TypeDetailsForm({ props }) {
  return (
    <Form.Group widths='equal'>
      <Form.Input
        name='eventType'
        value={props.event.eventType}
        label='Event Type'
        placeholder='Ex. Cocktail Party'
        onChange={props.handleChange}
      />
      <Form.Input
        name='estAttendance'
        value={props.event.estAttendance}
        label='Est. Attendance'
        placeholder='Ex. 500'
        onChange={props.handleChange}
      />
    </Form.Group>
  );
}

export default TypeDetailsForm;
