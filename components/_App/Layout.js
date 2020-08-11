import Head from 'next/head';
import { Container, Grid, Responsive } from 'semantic-ui-react';
import Header from './Header';
import HeadContent from './HeadContent';
import SideBar from './SideBar';

// contains head, header and sidebar used accross all pages
function Layout({ children }) {
  const isBrowser = () => typeof window !== 'undefined';
  const getWidth = () => (isBrowser() ? window.innerWidth : 1000);
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
      <Responsive fireOnMount getWidth={getWidth} minWidth={1000}>
        <Grid divided padded style={{ paddingTop: 75 }}>
          <Grid.Row>
            <Grid.Column
              width={2}
              style={({ height: '100vh' }, { background: '#F5F6F6' })}>
              <SideBar />
            </Grid.Column>
            <Grid.Column width={14} style={{ paddingTop: 20 }}>
              <Container>{children}</Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>

      {/* gets rid of sidebar if screen width < 1000 */}
      <Responsive maxWidth={999}>
        <Container style={{ paddingTop: 100 }}>{children}</Container>
      </Responsive>
    </>
  );
}

export default Layout;
