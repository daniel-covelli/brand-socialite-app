import { Grid, Button, Modal } from 'semantic-ui-react';
import ConfirmDeleteEvent from './ConfirmDeleteEvent';

const moment = require('moment');

function EventActions({ event }) {
  const iscurrentDate = moment(event.date).isSame(new Date(), 'day');

  return (
    <Grid columns={2}>
      <Grid.Column floated='left' width={6}>
        {iscurrentDate ? (
          <Button floated='right' fluid disabled>
            Delete
          </Button>
        ) : (
          <ConfirmDeleteEvent event={event} />
        )}
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
