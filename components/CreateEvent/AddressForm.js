import { Form, Divider, Segment } from 'semantic-ui-react';

function AddressForm({ props }) {
  return (
    <>
      <Segment secondary>
        <Form.Group widths='equal'>
          <Form.Input
            name='venue'
            value={props.event.venue}
            label='Venue'
            placeholder='Ex. Hollywood Hilton Hotel'
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            name='address1'
            value={props.event.address1}
            label='Address 1'
            placeholder='Ex. 693 Woodland Drive'
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            name='address2'
            value={props.event.address2}
            label='Address 2'
            placeholder='Ex. Appartment, Floor, Building'
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            name='city'
            value={props.event.city}
            label='City'
            placeholder='Ex. Los Angeles'
            onChange={props.handleChange}
          />
          <Form.Input
            name='state'
            value={props.event.state}
            label='State'
            placeholder='Ex. CA'
            onChange={props.handleChange}
          />
          <Form.Input
            name='zip'
            value={props.event.state}
            label='Zip'
            placeholder='Ex. 99999'
            onChange={props.handleChange}
          />
        </Form.Group>
      </Segment>
    </>
  );
}

export default AddressForm;
