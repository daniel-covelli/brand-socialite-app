import {
  Icon,
  Item,
  Divider,
  Segment,
  Label,
  Grid,
  Responsive,
  Header
} from 'semantic-ui-react';
import Link from 'next/Link';

// child of pages/event-list
function EventsList({ events }) {
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
              <Grid>
                <Grid.Row>
                  <Grid.Column width={13}>
                    <Link href={`/event?_id=${event._id}`}>
                      <Header as='a'>{EventName(event.eventName)}</Header>
                    </Link>
                    <Item.Meta>
                      <Label>{event.date_formatted}</Label>
                    </Item.Meta>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='right'>
                    <Responsive minWidth={1000}>
                      <Label basic>
                        <Icon name='calendar' />
                        {event.date_from_now}
                      </Label>
                    </Responsive>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

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

export default EventsList;

// start: event.start,
// end: event.end,
// <img src={event.eventMediaUrl} height={300} />
