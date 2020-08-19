import { Form, TextArea } from 'semantic-ui-react';

function TypeDetailsForm({ props }) {
  return (
    <>
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
      <Form.Group widths='equal'>
        <Form.Input label='Event Details'>
          <TextArea
            name='eventDescription'
            value={props.event.eventDescription}
            placeholder='Ex. This event is a celebration of the 50th anniversary...'
            onChange={props.handleChange}
          />
        </Form.Input>
      </Form.Group>
    </>
  );
}

export default TypeDetailsForm;
