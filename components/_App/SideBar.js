import React from 'react';
import Link from 'next/Link';
import { Menu, Icon, Divider, Responsive } from 'semantic-ui-react';
import Router, { useRouter } from 'next/router';

// The menu sidebar for the brands
// called from Layout

function SideBar() {
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu vertical={true} secondary='true' fluid style={{ height: '100vh' }}>
      <Divider hidden />
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
    </Menu>
  );
}

export default SideBar;
