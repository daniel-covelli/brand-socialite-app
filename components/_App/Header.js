import { Menu } from 'semantic-ui-react';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import Logo from './pieces/Logo';
import BrandHeader from './pieces/BrandHeader';
import TalentHeader from './pieces/TalentHeader';
import PreLoginHeader from './pieces/PreLoginHeader';

// nprogress set up
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header({ user }) {
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu
      borderless
      fluid
      fixed='top'
      size='tiny'
      id='menu'
      style={{ marginBottom: '0' }}>
      {/* If user is brand, talent or none */}
      {user ? (
        user.role === 'brand' ? (
          <Logo home={'/brand-dashboard'} />
        ) : (
          <Logo home={'/talent-dashboard'} />
        )
      ) : (
        <Logo home={'/'} />
      )}

      {/* If user is logged in show logout and contact, else show login and sign up */}
      <Menu.Menu position='right'>
        {user ? (
          user.role === 'brand' ? (
            <BrandHeader isActive={isActive} />
          ) : (
            <TalentHeader isActive={isActive} />
          )
        ) : (
          <PreLoginHeader isActive={isActive} />
        )}
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
