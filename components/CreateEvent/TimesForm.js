import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { Segment, Form } from 'semantic-ui-react';

function TimesForm({ props }) {
  return (
    <Segment secondary>
      <Form.Group widths='equal'>
        <SemanticDatepicker
          name='date'
          label='Date'
          showToday={false}
          format='MMMM DD, YYYY'
          onChange={props.dateChange}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input
          name='setupStart'
          type='time'
          placeholder='12:00'
          label='Setup Start'
          value={props.times.setupStart}
          onChange={props.handleTime}
        />
        <Form.Input
          name='setupEnd'
          type='time'
          placeholder='12:00'
          label='Setup End'
          min={props.times.setupStart}
          value={props.times.setupEnd}
          onChange={props.handleTime}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input
          name='eventStart'
          type='time'
          placeholder='12:00'
          label='Event Start'
          min={props.times.setupEnd}
          value={props.times.eventStart}
          onChange={props.handleTime}
        />
        <Form.Input
          name='eventEnd'
          type='time'
          placeholder='12:00'
          label='Event End'
          min={props.times.eventStart}
          value={props.times.eventEnd}
          onChange={props.handleTime}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input
          name='breakdownStart'
          type='time'
          placeholder='12:00'
          label='Breakdown Start'
          min={props.times.eventEnd}
          value={props.times.breakdownStart}
          onChange={props.handleTime}
        />
        <Form.Input
          name='breakdownEnd'
          type='time'
          placeholder='12:00'
          label='Breakdown End'
          min={props.times.breakdownStart}
          value={props.times.breakdownEnd}
          onChange={props.handleTime}
        />
      </Form.Group>
    </Segment>
  );
}

export default TimesForm;
