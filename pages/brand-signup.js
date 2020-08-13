import React, { useState } from 'react';
import catchErrors from '../utils/catchErrors';
import { Grid } from 'semantic-ui-react';
import BrandContent from '../components/Signup/Brand/BrandContent';
import SignUpForm from '../components/Signup/Brand/SignUpForm';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { handleBrandLogin } from '../utils/auth';

function BrandSignup() {
  const INITIAL_BRAND = {
    region: '',
    companyName: '',
    email: '',
    password: ''
  };

  const [brand, setBrand] = useState(INITIAL_BRAND);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleChange(change) {
    const { name, value } = change.target;
    setBrand((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleOption(e, result) {
    const { name, value } = result;
    setBrand((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(change) {
    change.preventDefault();
    try {
      setLoading(true);
      setError('');
      const url = `${baseUrl}/api/brand-signup`;
      const payload = { ...brand };
      const response = await axios.post(url, payload);
      handleBrandLogin(response.data);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8} textAlign='center'>
            <BrandContent />
          </Grid.Column>
          <Grid.Column width={2} />
          <Grid.Column width={6} style={{ paddingTop: '8em' }}>
            <SignUpForm
              error={error}
              handleSubmit={handleSubmit}
              handleOption={handleOption}
              handleChange={handleChange}
              loading={loading}
              region={brand.region}
              companyName={brand.companyName}
              email={brand.email}
              password={brand.password}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default BrandSignup;
