import cookie from 'js-cookie';
import Router from 'next/router';

export function handleBrandLogin(token) {
  cookie.set('token', token);
  Router.push('/brand-dashboard');
}

export function handleTalentLogin(token) {
  cookie.set('token', token);
  Router.push('/talent-dashboard');
}
