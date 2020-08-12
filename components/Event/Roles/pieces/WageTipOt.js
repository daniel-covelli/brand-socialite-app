import { Form, Label, Input } from 'semantic-ui-react';

function WageTipOt({ handleChange, wage, tip, overtime }) {
  return (
    <Form.Group widths='equal'>
      <Form.Input label='Hourly Wage'>
        <Input
          type='text'
          name='wage'
          labelPosition='right'
          placeholder='15'
          onChange={handleChange}
          value={wage}>
          <Label basic>$</Label>
          <input />
          <Label>/hr</Label>
        </Input>
      </Form.Input>
      <Form.Input
        iconPosition='left'
        icon='dollar sign'
        label='Tip'
        name='tip'
        placeholder='50'
        onChange={handleChange}
        value={tip}
      />
      <Form.Input
        icon='time'
        label='Overtime'
        name='overtime'
        disabled={true}
        value={overtime}
      />
    </Form.Group>
  );
}

export default WageTipOt;
