import React from 'react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import { Grid, Image, Divider, Segment, Header } from 'semantic-ui-react';

// children components
import EventTileHeader from '../components/BrandDashboard/EventTileHeader';
import AddEvent from '../components/_App/pieces/AddEvent';
import EventsTile from '../components/BrandDashboard/EventsTile';

function BrandHome({ events }) {
  return (
    <Grid stackable>
      <Grid.Row>
        <Grid.Column>
          <AddEvent />
        </Grid.Column>
      </Grid.Row>
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
            <Grid>
              <EventTileHeader />
              <EventsTile events={events} />
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

BrandHome.getInitialProps = async (ctx) => {
  // fetch data on server
  const { token } = parseCookies(ctx);
  const url = `${baseUrl}/api/events`;
  const payload = { headers: { Authorization: token } };
  const response = await axios.get(url, payload);
  return { events: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default BrandHome;
