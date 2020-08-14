import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import TalentContent from '../components/Signup/Talent/TalentContent';
import SignUpForm from '../components/Signup/Talent/SignUpForm';
import catchErrors from '../utils/catchErrors';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { handleTalentLogin } from '../utils/auth';

function TalentSignup() {
  const INITIAL_TALENT = {
    region: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  const [talent, setTalent] = useState(INITIAL_TALENT);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(change) {
    const { name, value } = change.target;
    setTalent((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleOption(e, result) {
    const { name, value } = result;
    setTalent((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(change) {
    change.preventDefault();
    try {
      setLoading(true);
      setError('');
      const url = `${baseUrl}/api/talent-signup`;
      const payload = { ...talent };
      const response = await axios.post(url, payload);
      handleTalentLogin(response.data);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <TalentContent />
        </Grid.Column>
        <Grid.Column width={2} />
        <Grid.Column width={6} style={{ paddingTop: '8em' }}>
          <SignUpForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleOption={handleOption}
            error={error}
            loading={loading}
            region={talent.region}
            firstName={talent.firstName}
            lastName={talent.lastName}
            email={talent.email}
            password={talent.password}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default TalentSignup;
