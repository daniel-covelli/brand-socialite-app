import {
  Grid,
  Segment,
  Item,
  Image,
  Header,
  Icon,
  Container,
  Button
} from 'semantic-ui-react';

// Child Components
import HeaderModal from './modals/HeaderModal';

function BrandProfileHeader({ profile, login }) {
  return (
    <Segment>
      <Grid.Row>
        <Item.Group unstackable>
          <Item>
            <Item.Image size='small'>
              <Image
                src={
                  profile.brandMediaUrl
                    ? profile.brandMediaUrl
                    : '../static/no-image-1.jpg'
                }
              />
            </Item.Image>
            <Item.Content>
              <Grid columns={2}>
                <Grid.Column width={12}>
                  <Header as='h2'>{login.companyName}</Header>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Container textAlign='right'>
                    <HeaderModal profile={profile} login={login} />
                  </Container>
                </Grid.Column>
              </Grid>

              <Item.Description></Item.Description>
              <Item.Extra></Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Row>
    </Segment>
  );
}

export default BrandProfileHeader;
