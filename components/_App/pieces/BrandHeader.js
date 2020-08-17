import { Responsive, Menu, Dropdown, Icon } from 'semantic-ui-react';
import Link from 'next/Link';
import ContactLogout from './ContactLogout';
import LogoutDropdown from './LogoutDropdown';

function BrandHeader({ isActive }) {
  return (
    <>
      {/* Show contact and logout button if width > 1000*/}
      <ContactLogout />

      {/* Show sidebar menu items along with contact and logout if width < 999 */}
      <Responsive as={Menu.Item} maxWidth={999}>
        <Menu.Item>
          <Dropdown icon='bars' className='icon' button>
            <Dropdown.Menu>
              <Link href='/brand-dashboard'>
                <Dropdown.Item active={isActive('/brand-dashboard')}>
                  <Icon name='home' />
                  Home
                </Dropdown.Item>
              </Link>
              <Link href='/events-list'>
                <Dropdown.Item active={isActive('/events-list')}>
                  <Icon name='cocktail' />
                  Events
                </Dropdown.Item>
              </Link>
              <Dropdown.Item active={false}>
                <Icon name='user circle' />
                Profile
              </Dropdown.Item>
              <Link href='/'>
                <Dropdown.Item active={false}>
                  <Icon name='calendar' />
                  History
                </Dropdown.Item>
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

export default BrandHeader;
