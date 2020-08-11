import EventsList from '../components/Events/EventsList';
import EventsPageHeader from '../components/Events/EventsPageHeader';
import Link from 'next/Link';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

import { Segment, Divider, Grid, Responsive } from 'semantic-ui-react';

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

Events.getInitialProps = async () => {
  // fetch data on server
  const url = `${baseUrl}/api/events-list`;
  const response = await axios.get(url);
  return { events: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default Events;
