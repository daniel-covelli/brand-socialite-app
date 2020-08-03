import { Grid, Button, Modal } from 'semantic-ui-react';

function EventActions({ event }) {
  return (
    <Grid columns={2}>
      <Grid.Column floated='left' width={6}>
        <Button floated='right' fluid>
          Delete
        </Button>
      </Grid.Column>
      <Grid.Column floated='right' width={6}>
        <Button floated='left' primary fluid>
          Save
        </Button>
      </Grid.Column>
    </Grid>
  );
}

export default EventActions;
