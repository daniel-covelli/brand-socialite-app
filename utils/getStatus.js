import React from 'react';
import { Icon, Container } from 'semantic-ui-react';

//Represents a status label for jobs
//takes in prop 'status' that also determines color

function getColor(status) {
  switch (status) {
    case 'complete':
    case 'accepted':
      return 'green';
    case 'review':
    case 'settle':
      return 'red';
    case 'cancelled':
      return 'grey';
    case null:
    case 'inProgress':
    case 'request':
      return 'yellow';
    default:
      return 'grey';
  }
}

function getText(status) {
  switch (status) {
    case 'complete':
      return 'Complete';
    case 'accepted':
      return 'Accepted';
    case 'inProgress':
      return 'In Progress';
    case 'request':
      return 'Request';
    case 'review':
      return 'Review';
    case 'settle':
      return 'Settle';
    case 'cancelled':
      return 'Cancelled';
    case null:
      return <div style={{ color: '#fbbd08' }}>Empty</div>;
    default:
      return 'Unknown';
  }
}

function getStatus(props) {
  return (
    <Container fluid textAlign='center'>
      {/*Only way to change text color is with style? */}
      <Icon name='circle' color={getColor(props.status)} />
      {getText(props.status)}
    </Container>
  );
}

export default getStatus;
