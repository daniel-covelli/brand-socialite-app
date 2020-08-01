import HeaderTab from './HeaderTab';
import HeaderModals from './HeaderModals';
import { Item, Responsive } from 'semantic-ui-react';

const ContentDetails = ({ event }) => {
  return (
    <Item.Content>
      <Responsive minWidth={600}>
        <HeaderTab event={event} />
      </Responsive>
      <Responsive maxWidth={600}>
        <HeaderModals event={event} />
      </Responsive>
    </Item.Content>
  );
};

export default ContentDetails;
