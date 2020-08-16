import App from 'next/app';
import Layout from '../components/_App/Layout';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { parseCookies } from 'nookies';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { token } = parseCookies(ctx);

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // if not logged in following paths can't be displayed
    if (!token) {
      const isProtectedRoute =
        ctx.pathname === '/brand-dashboard' ||
        ctx.pathname === '/create-event' ||
        ctx.pathname === '/talent-dashboard' ||
        ctx.pathname === '/event' ||
        ctx.pathname === '/events-list';

      if (isProtectedRoute) {
        redirectUser(ctx, '/login');
      }
    } else {
      try {
        const payload = { headers: { Authorization: token } };
        const url = `${baseUrl}/api/account`;
        const response = await axios.get(url, payload);
        // user is either brand or talent
        const user = response.data;
        pageProps.user = user;

        // returns users to their respective dashboard when they are
        // on an uprotected route
        const isUnprotectedRoute =
          ctx.pathname === '/login' ||
          ctx.pathname === '/talent-signup' ||
          ctx.pathname === '/brand-signup' ||
          ctx.pathname === '/';

        if (isUnprotectedRoute) {
          if (user.role === 'brand') {
            redirectUser(ctx, '/brand-dashboard');
          } else {
            redirectUser(ctx, '/talent-dashboard');
          }
        }
      } catch (error) {
        console.error('Error getting current user', error);
      }
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
