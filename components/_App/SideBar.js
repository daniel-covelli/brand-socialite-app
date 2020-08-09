import React from 'react';
import Link from 'next/Link';
import { Menu, Icon } from 'semantic-ui-react';
import Router, { useRouter } from 'next/router';

// The menu sidebar for the talent

//props:
//activePage="home"		//the active item on the menu

function SideBar(props) {
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu vertical='true' secondary='true' fluid='true'>
      <Link href='/'>
        <Menu.Item link='true' active={isActive('/')}>
          <Icon name='home' />
          Home
        </Menu.Item>
      </Link>
      <Link href='/events-list'>
        <Menu.Item link='true' active={isActive('/events-list')}>
          <Icon name='cocktail' />
          Events
        </Menu.Item>
      </Link>
      <Menu.Item link='true' active={false}>
        <Icon name='user circle' />
        Profile
      </Menu.Item>
      <Link href='/'>
        <Menu.Item link='true' active={false}>
          <Icon name='calendar' />
          History
        </Menu.Item>
      </Link>
      <Menu.Item link='true' active={false}>
        <Icon name='clock' />
        My Earnings
      </Menu.Item>
    </Menu>
  );
}

export default SideBar;
