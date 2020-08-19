import HeaderDetails from './HeaderDetails';
import HeaderExtra from './HeaderExtra';
import HeaderDesc from './HeaderDesc';
import HeaderHeader from './HeaderHeader';

import { Segment, Item, Divider, Responsive, Image } from 'semantic-ui-react';

// child of pages/event.js
function EventHeader({ event }) {
  return (
    <Segment raised>
      <Item.Group>
        <Item>
          <Item.Image size='medium'>
            <Responsive minWidth={768}>
              <Image src={event.eventMediaUrl} />
            </Responsive>
          </Item.Image>
          <Item.Content>
            <HeaderHeader event={event} />
            <Divider hidden />
            <Divider hidden />
            <Item.Description>
              <HeaderDesc event={event} />
            </Item.Description>
            <Divider hidden />
            <Divider hidden />
            <Item.Extra>
              <HeaderExtra event={event} />
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <HeaderDetails event={event} />
        </Item>
      </Item.Group>
    </Segment>
  );
}

export default EventHeader;
