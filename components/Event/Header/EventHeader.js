import ContentDetails from './ContentDetails';
import ContentExtra from './ContentExtra';
import ContentDesc from './ContentDesc';
import ContentHeader from './ContentHeader';

import { Segment, Item, Divider, Responsive, Image } from 'semantic-ui-react';

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
            <ContentHeader event={event} />
            <Divider hidden />
            <Divider hidden />
            <Item.Description>
              <ContentDesc event={event} />
            </Item.Description>
            <Divider hidden />
            <Divider hidden />
            <Item.Extra>
              <ContentExtra event={event} />
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <ContentDetails event={event} />
        </Item>
      </Item.Group>
    </Segment>
  );
}

export default EventHeader;
