import DateTimeModal from './Description/DateTimeModal';
import { Header, Grid, Container, Divider } from 'semantic-ui-react';

const ContentDesc = ({ event }) => {
  return (
    <Grid stackable columns={2}>
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
        <Header sub>Event Type</Header>
        <span>{event.eventType}</span>

        <Header sub>Est. Attendance</Header>
        <span>{event.estAttendance}</span>
      </Grid.Column>
    </Grid>
  );
};

export default ContentDesc;
