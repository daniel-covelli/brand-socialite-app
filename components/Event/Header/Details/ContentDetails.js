import HeaderTab from './HeaderTab';
import HeaderModals from './HeaderModals';
import { Container, Responsive } from 'semantic-ui-react';

const ContentDetails = ({ event }) => {
  return (
    <Container>
      <Responsive minWidth={600}>
        <HeaderTab event={event} />
      </Responsive>
      <Responsive maxWidth={600}>
        <HeaderModals event={event} />
      </Responsive>
    </Container>
  );
};

export default ContentDetails;
