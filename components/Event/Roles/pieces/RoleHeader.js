import { Modal, Grid, Button } from 'semantic-ui-react';

function RoleHeader({
  disabled,
  setModal,
  setModalDiscard,
  modalDiscard,
  headerContent
}) {
  // closes first and second modal
  function onDiscard() {
    setModal(false);
    setModalDiscard(false);
  }

  return (
    <Modal.Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8} textAlign='left'>
            {headerContent}
          </Grid.Column>
          <Grid.Column width={8} textAlign='right'>
            <Modal
              size='mini'
              open={modalDiscard}
              trigger={
                <Button
                  circular
                  icon='close'
                  onClick={() =>
                    disabled ? setModal(false) : setModalDiscard(true)
                  }
                />
              }>
              <Modal.Header>Discard Changes</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <p>
                    Are you sure you want to discard the changes you have made?
                  </p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  color='red'
                  content='Discard'
                  onClick={() => onDiscard()}></Button>
                <Button onClick={() => setModalDiscard(false)}>Back</Button>
              </Modal.Actions>
            </Modal>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Header>
  );
}
export default RoleHeader;
