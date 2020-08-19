import React from 'react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import Link from 'next/Link';
import { Grid, Image, Divider, Segment, Header, Icon } from 'semantic-ui-react';

// children components
import AddEvent from '../components/_App/pieces/AddEvent';
import EventsTile from '../components/BrandDashboard/EventsTile';

function BrandDashboard({ events, brand }) {
  return (
    <>
      {console.log('brand', brand)}
      <Grid stackable>
        <Grid.Row>
          <Grid.Column>
            <AddEvent />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <Segment raised>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8} textAlign='left'>
                    <Header as='h2'>{brand}</Header>
                  </Grid.Column>
                  <Grid.Column width={8} textAlign='right'>
                    <Link href='/brand-profile'>
                      <a>
                        Show More <Icon name='angle right' />
                      </a>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
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
                <EventsTile events={events} />
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

BrandDashboard.getInitialProps = async (ctx) => {
  // fetch data on server
  const { token } = parseCookies(ctx);
  const url = `${baseUrl}/api/events`;
  const brand_url = `${baseUrl}/api/brand-user`;
  const payload = { headers: { Authorization: token } };
  const response = await axios.all([
    axios.get(url, payload),
    axios.get(brand_url, payload)
  ]);

  const events = response[0].data;
  const brand = response[1].data;

  return { events, brand };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default BrandDashboard;
