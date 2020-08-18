import HeaderTab from './Details/HeaderTab';
import HeaderModals from './Details/HeaderModals';
import { Item, Responsive } from 'semantic-ui-react';

// called from EventHeader
const ContentDetails = ({ event }) => {
  // Grab width manually using innerWidth
  const isBrowser = () => typeof window !== 'undefined';
  const getWidth = () => (isBrowser() ? window.innerWidth : 1000);

  return (
    <Item.Content>
      {/* Call getWidth because on initial render width=0 bc ssr. 
      This forces client to get the actual width.
      https://github.com/Semantic-Org/Semantic-UI-React/issues/3110#issuecomment-416500463
      */}
      <Responsive fireOnMount getWidth={getWidth} minWidth={600}>
        <HeaderTab event={event} />
      </Responsive>
      <Responsive fireOnMount getWidth={getWidth} maxWidth={600}>
        <HeaderModals event={event} />
      </Responsive>
    </Item.Content>
  );
};

export default ContentDetails;
