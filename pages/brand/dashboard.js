import React from 'react';
import axios from 'axios';
import { parseCookies } from 'nookies';
import Link from 'next/Link';
import {
  Grid,
  Image,
  Divider,
  Segment,
  Header,
  Icon,
  Item,
  Comment
} from 'semantic-ui-react';

// functions and objects
import {
  mediaStyles,
  Media,
  MediaContextProvider
} from '../../utils/responsive';
import baseUrl from '../../utils/baseUrl';

// children components
import EventsTile from '../../components/BrandDashboard/DashboardEventsTile';
import DashboardHeader from '../../components/BrandDashboard/DashboardHeader';

function BrandDashboard({ events, login, profile, admin }) {
  return (
    <Grid stackable>
      <DashboardHeader companyName={login.companyName} />
      <Grid.Row>
        <Grid.Column width={6}>
          <Segment raised>
            <style>{mediaStyles}</style>
            <MediaContextProvider>
              <Grid>
                <Grid.Column textAlign='left'>
                  <Item.Group unstackable>
                    <Item>
                      <Item.Image as={Media} greaterThanOrEqual='fullScreen'>
                        <Image
                          src={
                            profile.brandMediaUrl
                              ? profile.brandMediaUrl
                              : '../static/no-image-1.jpg'
                          }
                          size='small'
                        />
                      </Item.Image>
                      <Item.Image as={Media} between={['small', 'tablet']}>
                        <Image
                          src={
                            profile.brandMediaUrl
                              ? profile.brandMediaUrl
                              : '../static/no-image-1.jpg'
                          }
                          size='small'
                        />
                      </Item.Image>

                      <Item.Content>
                        <Grid>
                          <Grid.Row>
                            <Grid.Column width={10}>
                              <Link href='/brand/profile'>
                                <Header as='a'>{login.companyName}</Header>
                              </Link>
                            </Grid.Column>
                            <Grid.Column width={6} textAlign='right'>
                              <Link href='/brand/profile'>
                                <a>
                                  View <Icon name='angle right' />
                                </a>
                              </Link>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row>
                            <Item.Description
                              style={{ padding: '2em 0 0 1em' }}>
                              <Comment.Group>
                                <Comment>
                                  <Comment.Avatar
                                    src={
                                      admin.adminMediaUrl
                                        ? admin.adminMediaUrl
                                        : '../static/no-image-1.jpg'
                                    }
                                  />
                                  <Comment.Content>
                                    <Comment.Author>
                                      {admin.adminName
                                        ? admin.adminName
                                        : 'Admin Name'}
                                    </Comment.Author>
                                    <Comment.Text>
                                      {admin.adminTitle
                                        ? admin.adminTitle
                                        : 'Admin Title'}
                                    </Comment.Text>
                                  </Comment.Content>
                                </Comment>
                              </Comment.Group>
                            </Item.Description>
                          </Grid.Row>
                        </Grid>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Grid.Column>
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
        <Grid.Column width={10}>
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
