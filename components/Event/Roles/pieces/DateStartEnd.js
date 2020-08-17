const options = require('../../../../utils/options');
import { dateToMilitary, dateToTime } from '../../../../utils/timeUtils';
import { Form } from 'semantic-ui-react';

// child of components/Event/Roles/RolesEdit
function DateStartEnd({ date, onChange, shiftStart, shiftEnd }) {
  return (
    <Form.Group widths='equal'>
      <Form.Input
        disabled={true}
        label='Date'
        placeholder='Date'
        value={date}
      />
      <Form.Select
        label='Shift Start'
        name='shiftStart'
        placeholder='12:00 PM'
        options={options.times}
        onChange={onChange}
        value={dateToMilitary(shiftStart)}
        text={dateToTime(shiftStart)}
      />
      <Form.Select
        label='Shift End'
        name='shiftEnd'
        placeholder='18:00 PM'
        options={options.times}
        onChange={onChange}
        value={dateToMilitary(shiftEnd)}
        text={dateToTime(shiftEnd)}
      />
    </Form.Group>
  );
}

export default DateStartEnd;
