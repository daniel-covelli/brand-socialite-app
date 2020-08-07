import CreateRoot from '../components/CreateEvent/CreateRoot';
import { Grid, Header } from 'semantic-ui-react';

function CreateEvent() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={12} textAlign='left'>
          <Header as='h1'>Create Event</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <CreateRoot />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CreateEvent;
