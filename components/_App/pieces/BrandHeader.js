import { Responsive, Menu, Dropdown, Icon } from 'semantic-ui-react';
import Link from 'next/Link';

function BrandHeader({ isActive }) {
  //   const isBrowser = () => typeof window !== 'undefined';
  //   const getWidth = () => (isBrowser() ? window.innerWidth : 1000);

  return (
    <>
      {/* Show contact and logout button if width > 1000*/}
      <Responsive as={Menu.Item} minWidth={1000}>
        <Menu.Item>Contact</Menu.Item>
        <Menu.Item>Logout</Menu.Item>
      </Responsive>

      {/* Show sidebar menu items along with contact and logout if width < 999 */}
      <Responsive as={Menu.Item} maxWidth={999}>
        <Menu.Item>
          <Dropdown icon='bars' className='icon' button>
            <Dropdown.Menu>
              <Link href='/brand-dashboard'>
                <Menu.Item active={isActive('/brand-dashboard')}>
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
  );
}

export default BrandHeader;
