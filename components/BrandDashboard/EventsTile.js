import { Card, Icon, Divider, Grid } from 'semantic-ui-react';
import Link from 'next/Link';

function EventsTile({ events }) {
  // TODO: Standardize card heights

  function mapEventsToItems(events) {
    return events.map((event) => (
      <Card color='teal' key={event._id}>
        <Card.Content>
          <Card.Meta floated='left'>{event.date_from_now}</Card.Meta>
          <Divider hidden />
          <Card.Header>{event.eventName}</Card.Header>
          <Card.Meta>{event.date_formatted}</Card.Meta>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Card.Description>
            <Icon name='time' /> {event.timespan}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link href={`/event?_id=${event._id}`}>
            <a>
              Show Event <Icon name='angle right' />
            </a>
          </Link>
        </Card.Content>
      </Card>
    ));
  }

  return (
    <>
      {events ? (
        <Grid.Column width={16}>
          <Grid.Row>
            <Card.Group
              stackable
              itemsPerRow='3'
              fluid='true'
              style={{ padding: ' 1em 1em' }}
              centered>
              {mapEventsToItems(events)}
            </Card.Group>
          </Grid.Row>
        </Grid.Column>
      ) : (
        'NO EVENTS'
      )}
    </>
  );
}

export default EventsTile;

// start: event.start,
// end: event.end,
// <img src={event.eventMediaUrl} height={300} />
