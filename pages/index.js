import React from 'react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';

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

function Home({ events }) {
  return (
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={5}>
          <Segment raised>
            <Header as='h1'>Profile</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

            <Divider section />

            <Header as='h3'>Section Two</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Segment>
          <Segment raised>
            <Header as='h1'>Event History</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

            <Divider section />

            <Header as='h3'>Section Two</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Segment>
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment raised>
            <Responsive minWidth={568}>
              <Header as='h1' style={{ paddingBottom: '1em' }}>
                Upcoming Events
                <Button color='blue' floated='right'>
                  Show More <Icon name='angle right' />
                </Button>
              </Header>
            </Responsive>
            <Responsive maxWidth={568}>
              <Header as='h1' style={{ paddingBottom: '1em' }}>
                Events
                <Button color='blue' floated='right'>
                  Show More <Icon name='angle right' />
                </Button>
              </Header>
            </Responsive>
            <EventsTile events={events} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = `${baseUrl}/api/events`;
  const response = await axios.get(url);
  return { events: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default Home;
