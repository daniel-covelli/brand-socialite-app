import React from 'react';
import Link from 'next/Link';
import { Menu, Icon, Divider } from 'semantic-ui-react';
import Router, { useRouter } from 'next/router';

// The menu sidebar for the brands
// called from Layout

function BrandSideBar(user) {
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu vertical={true} secondary fluid style={{ height: '100vh' }}>
      <Divider hidden />
      <Link href='/brand/dashboard'>
        <Menu.Item active={isActive('/brand/dashboard')}>
          <Icon name='home' />
          Home
        </Menu.Item>
      </Link>
      <Link href='/brand/profile'>
        <Menu.Item active={isActive('/brand/profile')}>
          <Icon name='user circle' />
          Profile
        </Menu.Item>
      </Link>
      <Link href='/brand/eventslist'>
        <Menu.Item active={isActive('/brand/eventslist')}>
          <Icon name='cocktail' />
          Events
        </Menu.Item>
      </Link>
      <Link href='#'>
        <Menu.Item active={false}>
          <Icon name='calendar' />
          History
        </Menu.Item>
      </Link>
    </Menu>
  );
}

export default BrandSideBar;
