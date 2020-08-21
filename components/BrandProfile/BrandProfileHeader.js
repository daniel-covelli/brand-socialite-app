import {
  Grid,
  Segment,
  Item,
  Image,
  Header,
  Icon,
  Container,
  Button
} from 'semantic-ui-react';

// funtions and objects
import {
  mediaStyles,
  Media,
  MediaContextProvider
} from '../../utils/responsive';

// Child Components
import HeaderModal from './modals/HeaderModal';

function BrandProfileHeader({ profile, login }) {
  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Segment raised>
          <Grid>
            <Grid.Column width={4}>
              <Image
                fluid
                src={
                  profile.brandMediaUrl
                    ? profile.brandMediaUrl
                    : '../static/no-image-1.jpg'
                }
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as='h2'>{login.companyName}</Header>
                  </Grid.Column>
                  <Grid.Column width={8} textAlign='right'>
                    <HeaderModal profile={profile} login={login} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as='h2'>{login.companyName}</Header>
                  </Grid.Column>
                  <Grid.Column width={8} textAlign='right'>
                    <HeaderModal profile={profile} login={login} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid>
        </Segment>
      </MediaContextProvider>
    </>
  );
}

export default BrandProfileHeader;
