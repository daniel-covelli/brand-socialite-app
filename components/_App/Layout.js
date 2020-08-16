import Head from 'next/head';
import { Container, Grid, Responsive } from 'semantic-ui-react';
import Header from './Header';
import HeadContent from './HeadContent';
import {
  MediaContextProvider,
  mediaStyles,
  Media
} from '../../utils/actions/responsive';
import BrandSideBar from './pieces/BrandSidebar';
import TalentSidebar from './pieces/TalentSidebar';

function Layout({ children, user }) {
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

      {/* Header renders on size and user status */}
      <Header user={user} />

      {/* shows sidebar if screen width > 1000 */}
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Grid as={Media} greaterThanOrEqual='computer' divided padded>
          <Grid.Row style={{ paddingTop: 90 }}>
            {user ? (
              user.role === 'brand' ? (
                <>
                  {/* Brand Sidebar plus content */}
                  <Grid.Column width={2} style={{ background: '#F5F6F6' }}>
                    <BrandSideBar />
                  </Grid.Column>
                  <Grid.Column width={14} style={{ paddingTop: 20 }}>
                    <Container>{children}</Container>
                  </Grid.Column>
                </>
              ) : (
                <>
                  {/* Talent Sidebar plus content */}
                  <Grid.Column width={2} style={{ background: '#F5F6F6' }}>
                    <TalentSidebar />
                  </Grid.Column>
                  <Grid.Column width={14} style={{ paddingTop: 20 }}>
                    <Container>{children}</Container>
                  </Grid.Column>
                </>
              )
            ) : (
              <>
                {/* No Sidebar just content */}
                <Grid.Column width={16} style={{ paddingTop: 20 }}>
                  <Container>{children}</Container>
                </Grid.Column>
              </>
            )}
          </Grid.Row>
        </Grid>

        {/* gets rid of sidebar if screen width < 1000 */}
        <Container as={Media} lessThan='computer'>
          <div style={{ paddingTop: 80 }}> {children}</div>
        </Container>
      </MediaContextProvider>
    </>
  );
}

export default Layout;
