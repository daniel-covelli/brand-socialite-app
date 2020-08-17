import EventsList from '../components/Events/EventsList';
import EventsPageHeader from '../components/Events/EventsPageHeader';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import { parseCookies } from 'nookies';

import { Grid } from 'semantic-ui-react';

// displays list of all active events
function Events({ events }) {
  return (
    <>
      <Grid>
        <EventsPageHeader />
        <Grid.Row>
          <Grid.Column>
            <EventsList events={events} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

Events.getInitialProps = async (ctx) => {
  // fetch data on server
  const { token } = parseCookies(ctx);
  const url = `${baseUrl}/api/events-list`;
  const payload = { headers: { Authorization: token } };
  const response = await axios.get(url, payload);
  return { events: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default Events;
