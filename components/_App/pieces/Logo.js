import { Responsive, Menu, Image } from 'semantic-ui-react';
import Link from 'next/Link';

function Logo({ home }) {
  return (
    <>
      <Responsive as={Menu.Item} minWidth={1000}>
        <Link href={home}>
          <Menu.Item header>
            <Image size='tiny' src='/static/logo-menu.png' />
          </Menu.Item>
        </Link>
      </Responsive>
      <Responsive as={Menu.Item} maxWidth={999}>
        <Link href={home}>
          <Menu.Item color='brown' header>
            Brand Socialite
          </Menu.Item>
        </Link>
      </Responsive>
    </>
  );
}

export default Logo;
