import Head from 'next/head';
import {
  Container,
  Grid,
  Responsive,
  Sidebar,
  Menu,
  Segment
} from 'semantic-ui-react';
import Router, { useRouter } from 'next/router';
import Header from './Header';
import HeadContent from './HeadContent';
import SideBar from './SideBar';
import { getLocationOrigin } from 'next/dist/next-server/lib/utils';

function Layout({ children }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel='stylesheet' type='text/css' href='/static/styles.css' />
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        <script src='https://cdn.jsdelivr.net/npm/semantic-ui-calendar-react@latest/dist/umd/semantic-ui-calendar-react.js' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'
        />
        <title>Brand Socialite</title>
      </Head>
      <Header />

      {/* shows sidebar if screen width > 1000 */}
      <Responsive minWidth={1000}>
        <Grid divided padded style={{ paddingTop: 90 }}>
          <Grid.Row>
            <Grid.Column
              width={2}
              style={({ height: '100vh' }, { background: '#F5F6F6' })}>
              <SideBar />
            </Grid.Column>
            <Grid.Column width={14}>
              <Container>{children}</Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>

      {/* shows container and adds sidebar popup if screen width < 1000 */}
      <Responsive maxWidth={999}>
        <Container style={{ paddingTop: 90 }}>{children}</Container>
      </Responsive>
    </>
  );
}

export default Layout;
