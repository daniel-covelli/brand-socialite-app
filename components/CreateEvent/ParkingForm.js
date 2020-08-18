import {
  Form,
  Radio,
  Label,
  TextArea,
  Divider,
  Segment
} from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Will Be Provided', value: 'Will Be Provided' },
  { key: 'f', text: 'Street Parking', value: 'Street Parking' },
  { key: 'o', text: 'Pay For Parking', value: 'Pay For Parking' }
];

// child of CreateRoot
function ParkingForm({ props }) {
  // changes radio state then passes change & checked to handleRadio
  const [checked, setChecked] = React.useState({ bool: true });
  function handleRadio() {
    setChecked((prevState) => ({
      ...prevState,
      bool: !checked.bool
    }));

    props.handleRadio(checked, props.event, props.setEvent);
  }

  // disables parking address form if Street Parking
  // then sends object and value to be stored in event
  const [disabled, setDisabled] = React.useState({ bool: false });
  function handleOption(e, { value }) {
    if (value === 'Street Parking') {
      setDisabled((prevState) => ({
        ...prevState,
        bool: true
      }));
    } else {
      setDisabled((prevState) => ({
        ...prevState,
        bool: false
      }));
    }
    props.handleOption(e, { value });
  }

  return (
    <>
      <Divider />
      <Form.Group>
        <Form.Select
          name='parking'
          label='Parking'
          placeholder='Ex. Will Be Provided'
          options={options}
          onChange={handleOption}
        />
      </Form.Group>
      <Label style={{ margin: '1em 0 2em 0' }}>
        <Radio
          toggle
          label='Parking Address Same as Event Address'
          disabled={disabled.bool}
          checked={checked.checked}
          onChange={handleRadio}
        />
      </Label>
      <Segment>
        <Form.Group widths='equal'>
          <Form.Input
            name='parkingvenue'
            label='Parking Venue'
            placeholder='Ex. Hollywood Hilton Hotel'
            disabled={disabled.bool}
            value={props.event.parkingvenue}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            name='parkingaddress1'
            label='Parking Address 1'
            placeholder='Ex. 693 Woodland Drive'
            disabled={disabled.bool}
            value={props.event.parkingaddress1}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            name='parkingaddress2'
            label='Parking Address 2'
            placeholder='Ex. Appartment, Floor, Building'
            disabled={disabled.bool}
            value={props.event.parkingaddress2}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            name='parkingcity'
            label='Parking City'
            placeholder='Ex. Los Angeles'
            disabled={disabled.bool}
            value={props.event.parkingcity}
            onChange={props.handleChange}
          />
          <Form.Input
            name='parkingstate'
            label='Parking State'
            placeholder='Ex. CA'
            disabled={disabled.bool}
            value={props.event.parkingstate}
            onChange={props.handleChange}
          />
          <Form.Input
            name='parkingzip'
            label='Parking Zip'
            placeholder='Ex. 99999'
            disabled={disabled.bool}
            value={props.event.parkingzip}
            onChange={props.handleChange}
          />
        </Form.Group>
      </Segment>
      <Form.Group widths='equal'>
        <Form.Input label='Parking Instructions'>
          <TextArea
            name='parkingInstructions'
            placeholder='Ex. Parking will require that employees...'
            value={props.event.parkingInstructions}
            onChange={props.handleChange}
          />
        </Form.Input>
      </Form.Group>
      <Divider />
    </>
  );
}

export default ParkingForm;
