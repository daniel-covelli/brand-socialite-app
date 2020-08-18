import CreateEventRoot from '../components/CreateEvent/CreateEventRoot';
import { Grid, Header } from 'semantic-ui-react';
import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';

function CreateEvent({ brand_id }) {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={12} textAlign='left'>
          <Header as='h1'>Create Event</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <CreateEventRoot brand_id={brand_id} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

CreateEvent.getInitialProps = async (ctx) => {
  console.log('ctx', ctx);
  const { token } = parseCookies(ctx);
  const { userId } = jwt.verify(token, process.env.JWT_SECRET);
  return { brand_id: userId };
};

export default CreateEvent;
