import { Form, Radio, Label } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Will Be Provided', value: 'Will Be Provided' },
  { key: 'f', text: 'Street Parking', value: 'Street Parking' },
  { key: 'o', text: 'Pay For Parking', value: 'Pay For Parking' }
];

function ParkingForm({ props }) {
  const INITIAL_PARKING = {
    parkingvenue: '',
    parkingaddress1: '',
    parkingaddress2: '',
    parkingcity: '',
    parkingstate: '',
    parkingzip: ''
  };

  const [parking, setParking] = React.useState(INITIAL_PARKING);

  function handleParking(change) {
    const { name, value } = change.target;
    console.log('parking', name, value);
    setParking((prevState) => ({
      ...prevState,
      [name]: value
    }));
    props.handleChange(change);
  }

  return (
    <>
      <Form.Group widths='equal'>
        <Form.Select
          name='parking'
          label='Parking'
          placeholder='Ex. Will Be Provided'
          options={options}
          onChange={props.handleOption}
        />
      </Form.Group>
      <Label style={{ margin: '1em 0 2em 0' }}>
        <Radio
          toggle
          label='Parking Address Same as Event Address'
          onChange={props.handleRadio}
        />
      </Label>

      <Form.Group widths='equal'>
        <Form.Input
          name='parkingvenue'
          label='Parking Venue'
          placeholder='Ex. Hollywood Hilton Hotel'
          value={props.event.parkingvenue}
          onChange={handleParking}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input
          name='parkingaddress1'
          label='Parking Address 1'
          placeholder='Ex. 693 Woodland Drive'
          value={props.event.parkingaddress1}
          onChanget={props.handleChange}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input
          name='parkingaddress2'
          label='Parking Address 2'
          placeholder='Ex. Appartment, Floor, Building'
          value={props.event.parkingaddress2}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input
          name='parkingcity'
          label='Parking City'
          placeholder='Ex. Los Angeles'
          value={props.event.parkingcity}
          onChange={props.handleParking}
        />
        <Form.Input
          name='parkingstate'
          label='Parking State'
          placeholder='Ex. CA'
          value={props.event.parkingstate}
          onChange={props.handleParking}
        />
        <Form.Input
          name='parkingzip'
          label='Parking Zip'
          placeholder='Ex. 99999'
          value={props.event.parkingzip}
          onChange={props.handleParking}
        />
      </Form.Group>
    </>
  );
}

export default ParkingForm;
