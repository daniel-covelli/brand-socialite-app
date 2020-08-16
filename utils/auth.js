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

export function handleLogin(data) {
  if (data.role === 'brand') {
    handleBrandLogin(data.token);
  } else {
    handleTalentLogin(data.token);
  }
}

export function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}
