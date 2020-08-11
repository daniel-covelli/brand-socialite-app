import { Modal, Form, Button, Icon, Divider } from 'semantic-ui-react';

function AddRole({ props }) {
  return (
    <Modal
      trigger={
        <Button floated='right' size='tiny' primary>
          <Icon name='plus' />
          Add
        </Button>
      }>
      <Modal.Header>Add Role</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Form>
            <Form.Group widths='equal'>
              <Form.Select
                fluid
                label='Role Type'
                options={props.options}
                placeholder='Choose a Role'
              />
            </Form.Group>
            <Divider hidden />
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='Date'
                placeholder='Date'
                value={props.event.date_formatted}
              />
              <Form.Input fluid label='Shift Start' placeholder='First name' />
              <Form.Input fluid label='Shift End' placeholder='Last name' />
            </Form.Group>
            <Form.TextArea
              label='Instructions'
              placeholder='List the oblications of this position...'
            />
            <Form.TextArea
              label='Uniform Details'
              placeholder='Detail uniform specifications for this position...'
            />
            <Divider hidden />
            <Form.Group widths='equal'>
              <Form.Button floated='right' fluid primary>
                Save
              </Form.Button>
            </Form.Group>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default AddRole;
