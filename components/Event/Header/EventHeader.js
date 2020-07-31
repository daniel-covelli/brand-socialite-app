import ContentDetails from './Details/ContentDetails';
import ContentExtra from './ContentExtra';
import ContentDesc from './Description/ContentDesc';
import ContentHeader from './ContentHeader';

import {
  Segment,
  Item,
  Header,
  Grid,
  Divider,
  Container,
  Icon,
  Button,
  Responsive,
  Image,
  Comment
} from 'semantic-ui-react';

function EventHeader({ event }) {
  return (
    <Segment>
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
        <Divider hidden />
        <ContentDetails event={event} />
      </Item.Group>
    </Segment>
  );
}

export default EventHeader;
