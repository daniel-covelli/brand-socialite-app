import { Grid, Button, Modal } from 'semantic-ui-react';
import ConfirmDeleteEvent from './ConfirmDeleteEvent';

const moment = require('moment');

function EventActions({ event }) {
  // number of days away the event from the current date
  const iscurrentDate = moment(event.date).diff(new Date(), 'day');

  // delete button is disabled if event is within two days of current date
  return (
    <Grid columns={2}>
      <Grid.Column floated='left' width={8}>
        {iscurrentDate < 2 ? (
          <Button floated='right' fluid disabled>
            Delete
          </Button>
        ) : (
          <ConfirmDeleteEvent event={event} />
        )}
      </Grid.Column>
      <Grid.Column floated='right' width={8}>
        <Button floated='left' size='large' primary fluid>
          Save
        </Button>
      </Grid.Column>
    </Grid>
  );
}

export default EventActions;
