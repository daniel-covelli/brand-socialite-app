import { Menu, Image, Sidebar, Segment, Icon, Header } from 'semantic-ui-react';
import Link from 'next/Link';
import Router, { useRouter } from 'next/router';

function SideBar() {
  const router = useRouter();
  const user = false;
  return (
    <Menu pointing secondary vertical>
      <Link href='/'>
        <Menu.Item name='home' />
      </Link>
      <Menu.Item name='messages' />
      <Menu.Item name='friends' />
    </Menu>
  );
}

export default SideBar;
