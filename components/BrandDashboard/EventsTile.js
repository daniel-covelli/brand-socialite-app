import { Card, Icon, Divider } from 'semantic-ui-react';

function EventsTile({ eventInstances }) {
  // TODO: Sort Cards by Date
  // TODO: Standardize card heights
  // TODO: Limit display to three cards

  function mapEventsToItems(eventInstances) {
    console.log('event tile', eventInstances);
    return eventInstances.map((event) => (
      <Card color='teal' key={event._id}>
        <Card.Content>
          {/* <Card.Meta floated='left'>{eventInstance.dates_from_now}</Card.Meta> */}
          <Divider hidden />
          <Card.Header>{event.eventName}</Card.Header>
          {/* <Card.Meta>{eventInstance.dates_formatted}</Card.Meta> */}
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Card.Description>
            {/* <Icon name='time' /> {eventInstance.timespan} */}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={`/event?_id=${event._id}`}>
            Show Event <Icon name='angle right' />
          </a>
        </Card.Content>
      </Card>
    ));
  }

  return (
    <Card.Group
      stackable
      itemsPerRow='3'
      fluid='true'
      style={{ padding: ' 1em 2em' }}
      centered>
      {mapEventsToItems(eventInstances)}
    </Card.Group>
  );
}

export default EventsTile;

// start: event.start,
// end: event.end,
// <img src={event.eventMediaUrl} height={300} />
