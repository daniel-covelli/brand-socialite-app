import { Item, Header, Grid, Container, Icon, Button } from 'semantic-ui-react';

function ContentHeader({ event }) {
  return (
    <>
      <Grid columns={2}>
        <Grid.Column width={12}>
          <Header as='h1'>{event.eventName}</Header>
        </Grid.Column>
        <Grid.Column width={4}>
          <Container textAlign='right'>
            <Button color='blue' size='tiny' circular icon>
              <Icon name='write' />
            </Button>
          </Container>
        </Grid.Column>
      </Grid>
      <Item.Meta>hosted by {event.hostName}</Item.Meta>
    </>
  );
}

export default ContentHeader;
