import EventsList from '../components/EventsListPage/EventsList';
import EventsPageHeader from '../components/EventsListPage/EventsPageHeader';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import { parseCookies } from 'nookies';

import { Grid } from 'semantic-ui-react';

// displays list of all active events
function Events({ events, roles }) {
  return (
    <Grid>
      <EventsPageHeader />
      <Grid.Row>
        <Grid.Column>
          <EventsList events={events} roles={roles} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

Events.getInitialProps = async (ctx) => {
  // fetch data on server
  const { token } = parseCookies(ctx);
  const roles_url = `${baseUrl}/api/roles-list`;
  const events_url = `${baseUrl}/api/events-list`;
  const payload = { headers: { Authorization: token } };
  const response = await axios.all([
    axios.get(roles_url, payload),
    axios.get(events_url, payload)
  ]);

  const roles = response[0].data;
  const events = response[1].data;

  return { events, roles };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default Events;
