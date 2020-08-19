import { Grid, Header } from 'semantic-ui-react';

// objects and functions
import {
  mediaStyles,
  Media,
  MediaContextProvider
} from '../../utils/responsive';

// children components
import AddEvent from '../BrandPieces/AddEventButton';

function DashboardHeader({ companyName }) {
  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Grid.Row style={{ padding: '2em 0' }}>
          <Grid.Column width={8} textAlign='left' verticalAlign='bottom'>
            <Header as={Media} greaterThan='tablet'>
              <Header as='h1'>Hello, {companyName}!</Header>
            </Header>
          </Grid.Column>
          <Grid.Column width={8} textAlign='right'>
            <AddEvent />
          </Grid.Column>
        </Grid.Row>
      </MediaContextProvider>
    </>
  );
}

export default DashboardHeader;
