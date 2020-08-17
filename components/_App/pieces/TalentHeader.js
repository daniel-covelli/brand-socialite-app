import { Responsive, Menu, Dropdown, Icon } from 'semantic-ui-react';
import Link from 'next/Link';
import ContactLogout from './ContactLogout';
import LogoutDropdown from './LogoutDropdown';

function TalentHeader({ isActive }) {
  //   const isBrowser = () => typeof window !== 'undefined';
  //   const getWidth = () => (isBrowser() ? window.innerWidth : 1000);

  return (
    <>
      {/* Show contact and logout button if width > 1000*/}
      <ContactLogout />

      {/* Show sidebar menu items along with contact and logout if width < 999 */}
      <Responsive as={Menu.Item} maxWidth={999}>
        <Menu.Item>
          <Dropdown icon='bars' className='icon' button>
            <Dropdown.Menu>
              <Link href='/talent-dashboard'>
                <Menu.Item active={isActive('/talent-dashboard')}>
                  <Icon name='home' />
                  Home
                </Menu.Item>
              </Link>
              <Link href='#'>
                <Menu.Item active={false}>
                  <Icon name='user circle' />
                  Profile
                </Menu.Item>
              </Link>
              <Link href='#'>
                <Menu.Item active={false}>
                  <Icon name='calendar' />
                  Availability
                </Menu.Item>
              </Link>
              <Link href='#'>
                <Menu.Item active={false}>
                  <Icon name='cocktail' />
                  Events
                </Menu.Item>
              </Link>
              <Link href='#'>
                <Menu.Item active={false}>
                  <Icon name='dollar sign' />
                  My Earnings
                </Menu.Item>
              </Link>
              {/* Logout button */}
              <LogoutDropdown />
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

export default TalentHeader;
