import { Menu, Dropdown, Button } from 'semantic-ui-react';
import Link from 'next/Link';
import {
  MediaContextProvider,
  mediaStyles,
  Media
} from '../../../utils/responsive';

function PreLoginHeader({ isActive }) {
  return (
    <>
      {/* Show buttons if screen width > 1000 */}
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Menu.Item as={Media} greaterThanOrEqual='tablet'>
          <Link href='/login'>
            <Menu.Item active={isActive('/login')}>Login</Menu.Item>
          </Link>
          <Menu.Item>
            <Button.Group color='blue'>
              <Dropdown text='Sign Up' icon button>
                <Dropdown.Menu>
                  <Link href='/brand-signup'>
                    <Dropdown.Item>Sign Up to Hire</Dropdown.Item>
                  </Link>
                  <Link href='/talent-signup'>
                    <Dropdown.Item>Apply to Work</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Button.Group>
          </Menu.Item>
        </Menu.Item>

        {/* Show hamburger if screen width < 999 */}
        <Menu.Item as={Media} lessThan='tablet'>
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
        </Menu.Item>
      </MediaContextProvider>
    </>
  );
}

export default PreLoginHeader;
