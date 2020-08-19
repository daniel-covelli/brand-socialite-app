import React from 'react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import Link from 'next/Link';
import {
  Grid,
  Image,
  Divider,
  Segment,
  Header,
  Icon,
  Comment,
  Item
} from 'semantic-ui-react';

// functions and objects
import { mediaStyles, Media, MediaContextProvider } from '../utils/responsive';

// children components
import AddEvent from '../components/_App/pieces/AddEvent';
import EventsTile from '../components/BrandDashboard/EventsTile';
import { getRounds } from 'bcrypt';

function BrandDashboard({ events, login, profile, admin }) {
  return (
    <Grid stackable>
      <Grid.Row style={{ padding: '2em 0' }}>
        <Grid.Column width={8} textAlign='left' verticalAlign='bottom'>
          <Header as='h1'>Hello, {login.companyName}!</Header>
        </Grid.Column>
        <Grid.Column width={8} textAlign='right'>
          <AddEvent />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}>
          <Segment raised>
            <style>{mediaStyles}</style>
            <MediaContextProvider>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8} textAlign='left'>
                    <Header as='h2'>Profile</Header>
                  </Grid.Column>
                  <Grid.Column width={8} textAlign='right'>
                    <Link href='/brand-profile'>
                      <a>
                        Show More <Icon name='angle right' />
                      </a>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Item.Group>
                      <Item>
                        <Item.Image
                          size='small'
                          src={
                            profile.brandMediaUrl
                              ? profile.brandMediaUrl
                              : 'static/no-image-1.jpg'
                          }
                        />

                        <Item.Content>
                          <Link href='/brand-profile'>
                            <Item.Header as='a'>
                              {login.companyName}
                            </Item.Header>
                          </Link>

                          <Item.Description style={{ paddingTop: '3em' }}>
                            <Grid>
                              <Grid.Row>
                                <Image
                                  src={
                                    admin.adminMediaUrl
                                      ? admin.adminMediaUrl
                                      : 'static/no-image-1.jpg'
                                  }
                                  size='mini'
                                  circular
                                />

                                {admin.adminName
                                  ? admin.adminName
                                  : 'Admin Name'}
                                <br />

                                {admin.adminTitle
                                  ? admin.adminTitle
                                  : 'Admin Title'}
                              </Grid.Row>
                            </Grid>
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </MediaContextProvider>
          </Segment>

          <Segment raised>
            <Header as='h3'>Event History</Header>
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
  );
}

BrandDashboard.getInitialProps = async (ctx) => {
  // fetch data on server
  const { token } = parseCookies(ctx);
  const url = `${baseUrl}/api/events`;
  const login_url = `${baseUrl}/api/brand-user`;
  const profile_url = `${baseUrl}/api/brand-profile`;
  const admin_url = `${baseUrl}/api/brand-admin`;
  const payload = { headers: { Authorization: token } };
  const response = await axios.all([
    axios.get(url, payload),
    axios.get(login_url, payload),
    axios.get(profile_url, payload),
    axios.get(admin_url, payload)
  ]);

  const events = response[0].data;
  const login = response[1].data;
  const profile = response[2].data;
  const admin = response[3].data;

  return { events, login, profile, admin };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default BrandDashboard;
