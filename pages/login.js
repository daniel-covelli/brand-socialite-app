import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import LoginForm from '../components/Login/LoginForm';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import catchErrors from '../utils/catchErrors';
import { handleLogin } from '../utils/auth';

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

  async function handleSubmit(change) {
    event.preventDefault();
    try {
      setLoading(true);
      setError('');
      const url = `${baseUrl}/api/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
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
