import { Form, Radio, Label } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Will Be Provided', value: 'Will Be Provided' },
  { key: 'f', text: 'Street Parking', value: 'Street Parking' },
  { key: 'o', text: 'Pay For Parking', value: 'Pay For Parking' }
];

function ParkingForm({ props }) {
  function handleParking(change) {
    const { name, value } = change.target;
    setParking((prevState) => ({
      ...prevState,
      [name]: value
    }));

    props.handleChange(change);
  }

  // changes radio state then passes change & checked to handleRadio
  const [checked, setChecked] = React.useState({ bool: true });
  function handleRadio(change) {
    setChecked((prevState) => ({
      ...prevState,
      bool: !checked.bool
    }));

    props.handleRadio(checked);
  }

  const [disabled, setDisabled] = React.useState({ bool: false });
  function handleOption(e, { value }) {
    console.log('value', value);
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
    props.handleOption;
  }

  return (
    <>
      <Form.Group widths='equal'>
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

      <Form.Group widths='equal'>
        <Form.Input
          name='parkingvenue'
          label='Parking Venue'
          placeholder='Ex. Hollywood Hilton Hotel'
          disabled={disabled.bool}
          value={props.event.parkingvenue}
          onChange={handleParking}
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
          onChange={props.handleParking}
        />
        <Form.Input
          name='parkingstate'
          label='Parking State'
          placeholder='Ex. CA'
          disabled={disabled.bool}
          value={props.event.parkingstate}
          onChange={props.handleParking}
        />
        <Form.Input
          name='parkingzip'
          label='Parking Zip'
          placeholder='Ex. 99999'
          disabled={disabled.bool}
          value={props.event.parkingzip}
          onChange={props.handleParking}
        />
      </Form.Group>
    </>
  );
}

export default ParkingForm;
