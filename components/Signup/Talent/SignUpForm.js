import { Segment, Header, Divider, Form, Message } from 'semantic-ui-react';
import Link from 'next/Link';
const options = require('../../../utils/options');

function SignUpForm({
  handleSubmit,
  handleOption,
  handleChange,
  error,
  loading,
  region,
  firstName,
  lastName,
  email,
  password
}) {
  return (
    <Segment padded floated style={{ background: '#F5F6F6' }}>
      <Header as={'h2'}>
        Start working with <br />
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
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='First Name'
            name='firstName'
            placeholder='Ex. Jane'
            onChange={handleChange}
            value={firstName}
          />
          <Form.Input
            fluid
            label='Last Name'
            name='lastName'
            placeholder='Ex. Doe'
            onChange={handleChange}
            value={lastName}
          />
        </Form.Group>
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
        Looking to hire?{' '}
        <Link href='/brand-signup'>
          <a>Brand Signup</a>
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
