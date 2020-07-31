import { Segment, Header } from 'semantic-ui-react';

function EventBody({ event, roles }) {
  return (
    <Segment raised>
      <Header as='h3' dividing>
        Roles
      </Header>
    </Segment>
  );
}

export default EventBody;
