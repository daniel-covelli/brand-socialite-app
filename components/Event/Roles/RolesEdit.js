import React from 'react';
import ConfirmDeleteRole from './ConfirmDeleteRole';
import { Button, Icon, Modal, Form, Divider } from 'semantic-ui-react';

const options = [
  { key: '0', text: 'Bartender', value: 'Bartender' },
  { key: '1', text: 'Mixologist', value: 'Mixologist' },
  { key: '2', text: 'Photographer', value: 'Photographer' }
];

function RolesEdit({ event, role }) {
  return (
    <Modal
      trigger={
        <Button size='small' circular icon>
          <Icon name='pencil' />
        </Button>
      }
      header='Role Information'
      actions={['Close', { key: 'done', content: 'Save', primary: true }]}>
      <Modal.Header>Edit Role</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Form>
            <Form.Group widths='equal'>
              <Form.Select
                fluid
                label='Role Type'
                options={options}
                placeholder='Choose a Role'
              />
            </Form.Group>
            <Divider hidden />
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='Date'
                placeholder='Date'
                value={event.date_formatted}
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
              <ConfirmDeleteRole props={{ event, role }} />

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

export default RolesEdit;
