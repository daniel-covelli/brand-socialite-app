import DateTimeModal from './DateTimeModal';
import { Header, Grid, Container, Divider } from 'semantic-ui-react';

const ContentDesc = ({ event }) => {
  return (
    <Grid columns={2}>
      <Grid.Column width={9}>
        <Header sub>Date/Time</Header>
        <DateTimeModal
          props={{
            icon: 'calendar',
            eventdate: event.date_formatted,
            date_formatted_long: event.date_formatted_long,
            setup_timespan: event.setup_timespan,
            event_timespan: event.event_timespan,
            breakdown_timespan: event.breakdown_timespan
          }}
        />
        <DateTimeModal
          props={{
            icon: 'clock',
            eventdate: event.timespan,
            date_formatted_long: event.date_formatted_long,
            setup_timespan: event.setup_timespan,
            event_timespan: event.event_timespan,
            breakdown_timespan: event.breakdown_timespan
          }}
        />
      </Grid.Column>
      <Grid.Column width={7}>
        <Container textAlign='right'>
          <Header sub>Event Type</Header>
          <span>{event.eventType}</span>
          <Divider hidden />
          <Header sub>Est. Attendance</Header>
          <span>{event.estAttendance}</span>
        </Container>
      </Grid.Column>
    </Grid>
  );
};

export default ContentDesc;
