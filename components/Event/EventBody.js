import { Segment, Header } from 'semantic-ui-react';

function EventBody({ event }) {
  return (
    <Segment>
      <Header as='h3' dividing>
        Roles
      </Header>
    </Segment>
  );
}

export default EventBody;
