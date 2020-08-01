import { Header, Button, Icon, Modal } from 'semantic-ui-react';

function RolesEdit({ role }) {
  return (
    <Modal
      trigger={
        <Button size='mini' circular icon>
          <Icon name='pencil' />
        </Button>
      }
      header='Role Information'
      actions={['Close', { key: 'done', content: 'Save', primary: true }]}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default RolesEdit;
