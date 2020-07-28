import Head from 'next/head';
import { Container } from 'semantic-ui-react';

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
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css'
        />
        <title>Brand Socialite</title>
      </Head>
      <Header />
      {/* <SideBar /> */}
      <Container style={{ paddingTop: '1em' }}>{children}</Container>
    </>
  );
}

export default Layout;
