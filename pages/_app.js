import App from 'next/app';
import Layout from '../components/_App/Layout';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { parseCookies, destroyCookie } from 'nookies';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import Router from 'next/router';

//  TODO PROTECT ROUTES AS THEY ARE ADDED

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { token } = parseCookies(ctx);

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // if not logged in following paths can't be displayed
    // else, get user info
    if (!token) {
      const isProtectedRoute =
        ctx.pathname === '/brand/dashboard' ||
        ctx.pathname === '/brand/createevent' ||
        ctx.pathname === '/talent-dashboard' ||
        ctx.pathname === '/brand/event' ||
        ctx.pathname === '/brand/eventslist' ||
        ctx.pathname === '/brand/profile';

      if (isProtectedRoute) {
        redirectUser(ctx, '/login');
      }
    } else {
      try {
        const payload = { headers: { Authorization: token } };
        const url = `${baseUrl}/api/account`;
        const response = await axios.get(url, payload);

        // user.role either brand or talent
        const user = response.data;
        pageProps.user = user;

        // redirect brand user to dashboard if on talent or userless route
        // else, redirect talent to dashboard if on brand or userless route
        if (user.role === 'brand') {
          const isProtectedRoute =
            ctx.pathname === '/login' ||
            ctx.pathname === '/talent-signup' ||
            ctx.pathname === '/brand/signup' ||
            ctx.pathname === '/' ||
            ctx.pathname === '/talent-dashboard';

          if (isProtectedRoute) {
            redirectUser(ctx, '/brand/dashboard');
          }
        } else {
          const isProtectedRoute =
            ctx.pathname === '/login' ||
            ctx.pathname === '/talent-signup' ||
            ctx.pathname === '/brand/signup' ||
            ctx.pathname === '/' ||
            ctx.pathname === '/brand/dashboard' ||
            ctx.pathname === '/brand/event' ||
            ctx.pathname === '/brand/eventlist' ||
            ctx.pathname === '/brand/profile';
          if (isProtectedRoute) {
            redirectUser(ctx, '/talent-dashboard');
          }
        }
      } catch (error) {
        console.error('Error getting current user', error);

        // Throw out invalid token and redirect to login
        destroyCookie(ctx, 'token');
        redirectUser(ctx, '/login');
      }
    }
    return { pageProps };
  }

  // listens for storage update
  componentDidMount() {
    window.addEventListener('storage', this.syncLogout);
  }

  // if update is logout route user to login
  syncLogout = (event) => {
    if (event.key === 'logout') {
      console.log('logged out from storage');
      Router.push('/login');
    }
  };

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
