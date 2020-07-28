import React from 'react';
import axios from 'axios';

import EventsTile from '../components/BrandDashboard/EventsTile';
import {
  Grid,
  Image,
  Divider,
  Segment,
  Header,
  Button,
  Icon,
  Responsive
} from 'semantic-ui-react';

function Home({ eventInstances }) {
  return (
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={5}>
          <Segment>
            <Header as='h1'>Profile</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

            <Divider section />

            <Header as='h3'>Section Two</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Segment>
          <Segment>
            <Header as='h1'>Event History</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

            <Divider section />

            <Header as='h3'>Section Two</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Segment>
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment>
            <Header>
              <Responsive as='h1' minWidth={568}>
                Upcoming Events
                <Button color='blue' floated='right'>
                  View Events <Icon name='angle right' />
                </Button>
              </Responsive>
              <Responsive as='h1' maxWidth={568}>
                Events
                <Button color='blue' floated='right'>
                  View Events <Icon name='angle right' />
                </Button>
              </Responsive>
            </Header>
            <EventsTile events={eventInstances} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = 'http://localhost:3000/api/eventInstances';
  const response = await axios.get(url);
  console.log('response data', response);
  return { eventInstances: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default Home;
