import EventsList from '../components/Events/EventsList';
import EventsPageHeader from '../components/Events/EventsPageHeader';
import Link from 'next/Link';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

import { Segment, Divider, Grid, Responsive } from 'semantic-ui-react';

function Events({ events }) {
  return (
    <>
      <Responsive minWidth={768}>
        <Divider hidden style={{ padding: ' 1em 0 ' }} />
      </Responsive>
      <Grid>
        <EventsPageHeader />
        <Grid.Row>
          <Grid.Column>
            {/* Upcoming Group */}
            <EventsList events={events} />

            {/* Other event tile */}
            {/* Other event tile */}
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
