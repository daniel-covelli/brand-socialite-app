import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import { useRouter } from 'next/router';

function ConfirmDeleteRole({ props }) {
  const [modal, setModal] = React.useState(false);
  const router = useRouter();

  // sends delete req of to roles route in api
  async function handleDelete() {
    const url = `${baseUrl}/api/roles`;
    const payload = { params: { _id: `${props.role._id}` } };
    await axios.delete(url, payload);
    router.reload();
  }

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

export default ConfirmDeleteRole;
