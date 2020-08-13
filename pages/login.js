import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import LoginForm from '../components/Login/LoginForm';
function Login() {
  const INITIAL_USER = {
    email: '',
    password: ''
  };

  const [user, setUser] = useState(INITIAL_USER);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleChange(change) {
    const { name, value } = change.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit() {
    console.log('submit');
  }
  return (
    <Grid columns={3} stackable>
      <Grid.Column width={5} />
      <Grid.Column width={6} style={{ paddingTop: '8em' }}>
        <LoginForm
          loading={loading}
          error={error}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          email={user.email}
          password={user.password}
        />
      </Grid.Column>
      <Grid.Column width={5} />
    </Grid>
  );
}

export default Login;
