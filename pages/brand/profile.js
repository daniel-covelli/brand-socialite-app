import { Grid, Segment, Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { parseCookies } from 'nookies';

// objects and functions
import baseUrl from '../../utils/baseUrl';

// child components
import BrandProfileHeader from '../../components/BrandProfile/BrandProfileHeader';

function BrandProfile({ login, profile, admin }) {
  return (
    <>
      <Container>
        <Grid>
          <Grid.Column>
            <Header as=''>Profile</Header>
            <BrandProfileHeader profile={profile} login={login} />
            <Segment>
              <Grid.Row>This is a Row</Grid.Row>
            </Segment>
            <Segment>
              <Grid.Row>This is a Row</Grid.Row>
            </Segment>
            <Segment>
              <Grid.Row>This is a Row</Grid.Row>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
}

BrandProfile.getInitialProps = async (ctx) => {
  // fetch data on server
  const { token } = parseCookies(ctx);
  // const url = `${baseUrl}/api/events`;
  const login_url = `${baseUrl}/api/brand-user`;
  const profile_url = `${baseUrl}/api/brand-profile`;
  const admin_url = `${baseUrl}/api/brand-admin`;
  const payload = { headers: { Authorization: token } };
  // axios.get(url, payload),
  const response = await axios.all([
    axios.get(login_url, payload),
    axios.get(profile_url, payload),
    axios.get(admin_url, payload)
  ]);

  // const events = response[0].data;
  const login = response[0].data;
  const profile = response[1].data;
  const admin = response[2].data;
  console.log('ADMIN', admin);
  console.log('PROFILE', profile);
  return { login, profile, admin };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default BrandProfile;
