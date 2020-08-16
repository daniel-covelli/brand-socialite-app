import { Segment, Header, Divider, Form, Message } from 'semantic-ui-react';
import Link from 'next/Link';
const options = require('../../../utils/options');

function SignUpForm({
  handleSubmit,
  handleOption,
  handleChange,
  error,
  loading,
  companyName,
  email,
  password,
  region
}) {
  return (
    <Segment padded style={{ background: '#F5F6F6' }}>
      <Header as={'h2'}>
        Start Hiring with <br />
        Brand Socialite!
      </Header>
      <Divider hidden style={{ paddingBottom: '2em' }} />
      <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
        <Message error content={error} />
        <Form.Select
          fluid
          name='region'
          label='Region'
          placeholder='Southern California'
          options={options.regions}
          onChange={handleOption}
          value={region}
        />
        <Form.Input
          fluid
          label='Company Name'
          name='companyName'
          placeholder='Company Name'
          onChange={handleChange}
          value={companyName}
        />
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
          Sign Up
        </Form.Button>
        <Divider hidden />
        Looking for work?{' '}
        <Link href='/talent-signup'>
          <a>Talent Signup</a>
        </Link>
        <br />
        Already have an account?{' '}
        <Link href='/login'>
          <a>Login</a>
        </Link>
        <Divider hidden style={{ paddingBottom: '1em' }} />
      </Form>
    </Segment>
  );
}

export default SignUpForm;
