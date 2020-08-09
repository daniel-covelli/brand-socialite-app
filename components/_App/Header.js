import {
  Menu,
  Image,
  Button,
  Dropdown,
  Responsive,
  MenuItem
} from 'semantic-ui-react';
import Link from 'next/Link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

// nprogress set up
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
  const router = useRouter();
  const user = false;

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu borderless fluid size='tiny' id='menu'>
      <Responsive as={MenuItem} minWidth={769}>
        <Link href='/'>
          <Menu.Item header>
            <Image size='small' src='/static/logo-menu.png' />
          </Menu.Item>
        </Link>
      </Responsive>
      <Responsive as={MenuItem} maxWidth={770}>
        <Link href='/'>
          <Menu.Item color='brown' header>
            Brand Socialite
          </Menu.Item>
        </Link>
      </Responsive>

      <Menu.Menu position='right'>
        {user ? (
          <>
            <Menu.Item>Contact</Menu.Item>
            <Menu.Item>Logout</Menu.Item>
          </>
        ) : (
          <>
            <Responsive as={MenuItem} minWidth={768}>
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
            <Responsive as={MenuItem} maxWidth={768}>
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
  );
}

export default Header;
