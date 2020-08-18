import {
  Icon,
  Item,
  Segment,
  Label,
  Grid,
  Responsive,
  Header,
  List
} from 'semantic-ui-react';
import Link from 'next/Link';

// functions and objects
import filledCount from '../../utils/actions/EventList/filledCount';
import roleCount from '../../utils/actions/EventList/roleCount';
import eventName from '../../utils/actions/EventList/eventName';

// child of pages/event-list
function EventsList({ events, roles }) {
  console.log('EVENTSLIST roles', roles);

  function mapEventsToItems(events, roles) {
    return events.map((event) => (
      <Segment key={event._id} raised style={{ marginBottom: '2em' }}>
        <Item.Group unstackable>
          <Item>
            <Item.Image size='small' src={event.eventMediaUrl} />
            <Item.Content>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={13}>
                    <Link href={`/event?_id=${event._id}`}>
                      <Header as='a'>{eventName(event.eventName)}</Header>
                    </Link>
                    <Item.Meta>
                      <Label>{event.date_formatted}</Label>
                    </Item.Meta>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='right'>
                    <Responsive minWidth={1000}>
                      {event.date_from_now}
                    </Responsive>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid style={{ paddingTop: '3em' }}>
                <Grid.Row>
                  <Grid.Column textAlign='left' width={6}>
                    <Responsive minWidth={768}>
                      <List bulleted horizontal>
                        <List.Item>
                          <Icon name='user' style={{ paddingRight: '1em' }} />{' '}
                          {roleCount(event, roles)} roles
                        </List.Item>
                        <List.Item>{filledCount(event, roles)}</List.Item>
                      </List>
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

  return <div>{mapEventsToItems(events, roles)}</div>;
}

export default EventsList;

// start: event.start,
// end: event.end,
// <img src={event.eventMediaUrl} height={300} />
