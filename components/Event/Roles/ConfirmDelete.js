import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

function ConfirmDelete({ props }) {
  const [modal, setModal] = React.useState(false);

  function handleDelete() {}

  return (
    <Modal
      open={modal}
      size={'tiny'}
      trigger={
        <Form.Button onClick={() => setModal(true)} fluid>
          Delete
        </Form.Button>
      }>
      <Modal.Header>Confirm Delete</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Are you sure you want to delete this role?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color='red'
          icon='trash'
          content='Delete'
          onClick={handleDelete}></Button>
        <Button onClick={() => setModal(false)}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ConfirmDelete;
