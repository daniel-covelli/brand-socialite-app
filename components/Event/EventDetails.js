import { Segment, Item, Divider, Header } from 'semantic-ui-react';

function EventDetails({ event }) {
  return (
    <Segment>
      <Header as='h3' dividing>
        Total Cost
      </Header>
    </Segment>
  );
}

export default EventDetails;
