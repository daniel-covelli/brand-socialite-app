import {
  Icon,
  Item,
  Divider,
  Segment,
  Label,
  Grid,
  Responsive
} from 'semantic-ui-react';
import Link from 'next/Link';

function EventsTile({ events }) {
  // TODO: Standardize card heights

  function EventName(name) {
    const length = name.length;
    if (length > 50) {
      return <>{`${name.substring(0, 50)}...`}</>;
    }
    return <>{name}</>;
  }

  function mapEventsToItems(events) {
    return events.map((event) => (
      <Segment key={event._id} raised>
        <Item.Group unstackable>
          <Item>
            <Item.Image size='small' src={event.eventMediaUrl} />
            <Item.Content>
              <Link href={`/event?_id=${event._id}`}>
                <Item.Header as='a'>{EventName(event.eventName)}</Item.Header>
              </Link>
              <Item.Meta>
                <Label>{event.date_formatted}</Label>
              </Item.Meta>
              <Divider hidden />
              <Divider hidden />
              <Divider hidden />
              <Divider hidden />
              <Grid>
                <Grid.Row>
                  <Grid.Column textAlign='left' width={6}>
                    <Responsive minWidth={768}>
                      <Icon name='user' />
                      Limited
                    </Responsive>
                  </Grid.Column>
                  <Grid.Column textAlign='right' width={10}>
                    <Link href={`/event?_id=${event._id}`}>
                      <a>
                        View
                        <Icon name='right chevron' />
                      </a>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    ));
  }

  return <div>{mapEventsToItems(events)}</div>;
}

export default EventsTile;

// start: event.start,
// end: event.end,
// <img src={event.eventMediaUrl} height={300} />
