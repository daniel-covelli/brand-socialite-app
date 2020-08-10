import {
  Menu,
  Image,
  Button,
  Dropdown,
  Responsive,
  MenuItem,
  Divider,
  Segment,
  Icon,
  Grid
} from 'semantic-ui-react';
import Link from 'next/Link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import React, { useRef } from 'react';

// nprogress set up
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header({ props }) {
  const router = useRouter();
  const user = true;
  let ref = useRef(null);

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <>
      <Menu
        borderless
        fluid
        fixed='top'
        size='tiny'
        id='menu'
        style={{ marginBottom: '0' }}>
        {/* Show brand logo when width > 1000 and brand text when width < 999 */}
        <Responsive as={MenuItem} minWidth={1000}>
          <Link href='/'>
            <Menu.Item header>
              <Image size='tiny' src='/static/logo-menu.png' />
            </Menu.Item>
          </Link>
        </Responsive>
        <Responsive as={MenuItem} maxWidth={999}>
          <Link href='/'>
            <Menu.Item color='brown' header>
              Brand Socialite
            </Menu.Item>
          </Link>
        </Responsive>

        {/* If user is logged in show logout and contact, else show login and sign up */}
        <Menu.Menu position='right'>
          {user ? (
            <>
              {/* Show contact and logout button if width > 1000*/}
              <Responsive as={MenuItem} minWidth={1000}>
                <Menu.Item>Contact</Menu.Item>
                <Menu.Item>Logout</Menu.Item>
              </Responsive>

              {/* Show sidebar menu items along with contact and logout if width < 999 */}
              <Responsive as={MenuItem} maxWidth={999}>
                <Menu.Item>
                  <Dropdown icon='bars' className='icon' button>
                    <Dropdown.Menu>
                      <Link href='/'>
                        <Menu.Item active={isActive('/')}>
                          <Icon name='home' />
                          Home
                        </Menu.Item>
                      </Link>
                      <Link href='/events-list'>
                        <Menu.Item active={isActive('/events-list')}>
                          <Icon name='cocktail' />
                          Events
                        </Menu.Item>
                      </Link>
                      <Menu.Item active={false}>
                        <Icon name='user circle' />
                        Profile
                      </Menu.Item>
                      <Link href='/'>
                        <Menu.Item active={false}>
                          <Icon name='calendar' />
                          History
                        </Menu.Item>
                      </Link>
                      <Link href='/logout'>
                        <Dropdown.Item active={isActive('/logout')}>
                          Logout
                        </Dropdown.Item>
                      </Link>
                      <Link href='/contact'>
                        <Dropdown.Item active={isActive('/contact')}>
                          Contact
                        </Dropdown.Item>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Responsive>
            </>
          ) : (
            <>
              {/* Show buttons if screen width > 1000 */}
              <Responsive as={MenuItem} minWidth={1000}>
                <Link href='/login'>
                  <Menu.Item active={isActive('/login')}>Login</Menu.Item>
                </Link>
                <Menu.Item>
                  <Button.Group color='blue'>
                    <Dropdown text='Sign Up' icon button>
                      <Dropdown.Menu>
                        <Link href='/signup'>
                          <Dropdown.Item>Sign Up to Hire</Dropdown.Item>
                        </Link>
                        <Link href='/signup'>
                          <Dropdown.Item>Apply to Work</Dropdown.Item>
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Button.Group>
                </Menu.Item>
              </Responsive>

              {/* Show hamburger if screen width < 999 */}
              <Responsive as={MenuItem} maxWidth={999}>
                <Menu.Item>
                  <Dropdown icon='bars' className='icon' button>
                    <Dropdown.Menu>
                      <Link href='/login'>
                        <Dropdown.Item active={isActive('/login')}>
                          Login
                        </Dropdown.Item>
                      </Link>
                      <Link href='/signup'>
                        <Dropdown.Item active={isActive('/signup')}>
                          Sign Up to Hire
                        </Dropdown.Item>
                      </Link>
                      <Link href='/signup'>
                        <Dropdown.Item active={isActive('/signup')}>
                          Apply to Work
                        </Dropdown.Item>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Responsive>
            </>
          )}
        </Menu.Menu>
      </Menu>
    </>
  );
}

export default Header;
