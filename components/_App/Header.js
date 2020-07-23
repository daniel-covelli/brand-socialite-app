import { Menu, Container, Image, Button, Dropdown } from 'semantic-ui-react';
import Link from 'next/Link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

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
    <Menu secondary fluid id='menu'>
      <Link href='/'>
        <Menu.Item header>
          <Image size='small' src='/static/logo-menu.png' />
        </Menu.Item>
      </Link>
      <Menu.Menu position='right'>
        {user ? (
          <>
            <Menu.Item>Contact</Menu.Item>
            <Menu.Item>Logout</Menu.Item>
          </>
        ) : (
          <>
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
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
