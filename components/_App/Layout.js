import Head from 'next/head';
import { Container, Grid } from 'semantic-ui-react';

import Header from './Header';
import HeadContent from './HeadContent';
import SideBar from './SideBar';

function Layout({ children }) {
  // TODO: Implement Sidebar

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
      {/* <SideBar /> */}
      <Grid divided fluid padded stretched>
        <Grid.Row>
          <Grid.Column width={3}>
            <SideBar />
          </Grid.Column>
          <Grid.Column width={13}>
            <Container style={{ paddingTop: '1em' }}>{children}</Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Layout;
