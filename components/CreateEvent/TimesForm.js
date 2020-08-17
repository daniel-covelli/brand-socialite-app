import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { Segment, Form } from 'semantic-ui-react';

// functions and objects
import options from '../../utils/options';
import { dateToMilitary, dateToTime } from '../../utils/timeUtils';

// child of components/CreateEvent/CreateEventRoot
function TimesForm({ props, handleTime, event }) {
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
        <Form.Select
          name='setupStart'
          placeholder='12:00 PM'
          label='Setup Start'
          options={options.times}
          value={dateToMilitary(event.setupStart)}
          text={dateToTime(event.setupStart)}
          onChange={handleTime}
        />
        <Form.Select
          name='setupEnd'
          type='time'
          placeholder='2:00 PM'
          label='Setup End'
          options={options.times}
          value={dateToMilitary(event.setupEnd)}
          text={dateToTime(event.setupEnd)}
          onChange={handleTime}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Select
          name='eventStart'
          type='time'
          placeholder='2:00 PM'
          label='Event Start'
          options={options.times}
          value={dateToMilitary(event.eventStart)}
          text={dateToTime(event.eventStart)}
          onChange={handleTime}
        />
        <Form.Select
          name='eventEnd'
          type='time'
          placeholder='8:00 PM'
          label='Event End'
          options={options.times}
          value={dateToMilitary(event.eventEnd)}
          text={dateToTime(event.eventEnd)}
          onChange={handleTime}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Select
          name='breakdownStart'
          type='time'
          placeholder='8:00 PM'
          label='Breakdown Start'
          options={options.times}
          value={dateToMilitary(event.breakdownStart)}
          text={dateToTime(event.breakdownStart)}
          onChange={handleTime}
        />
        <Form.Select
          name='breakdownEnd'
          type='time'
          placeholder='10:00 PM'
          label='Breakdown End'
          options={options.times}
          value={dateToMilitary(event.breakdownEnd)}
          text={dateToTime(event.breakdownEnd)}
          onChange={handleTime}
        />
      </Form.Group>
    </Segment>
  );
}

export default TimesForm;
