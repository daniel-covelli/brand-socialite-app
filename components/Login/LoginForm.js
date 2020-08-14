import { Segment, Header, Divider, Form, Message } from 'semantic-ui-react';
import Link from 'next/Link';

function LoginForm({
  handleSubmit,
  handleChange,
  error,
  loading,
  email,
  password
}) {
  return (
    <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
      <Message error content={error} />
      <Segment padded style={{ background: '#F5F6F6' }}>
        <Header as={'h2'}>
          Welcome back to <br />
          Brand Socialite!
        </Header>
        <Divider hidden style={{ paddingBottom: '1em' }} />
        <Form.Input
          fluid
          label='Email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          value={email}
        />
        <Form.Input
          fluid
          name='password'
          label='Password'
          placeholder='Password'
          type='password'
          onChange={handleChange}
          value={password}
        />
        <Divider hidden style={{ paddingBottom: '2em' }} />
        <Form.Button fluid primary disabled={loading}>
          Login
        </Form.Button>
        <Divider hidden />
        Need an account?{' '}
        <Link href='/talent-signup'>
          <a>Talent Signup</a>
        </Link>
        <br />
        Looking to hire?{' '}
        <Link href='/brand-signup'>
          <a>Brand Signup</a>
        </Link>
        <Divider hidden style={{ paddingBottom: '1em' }} />
      </Segment>
    </Form>
  );
}

export default LoginForm;
