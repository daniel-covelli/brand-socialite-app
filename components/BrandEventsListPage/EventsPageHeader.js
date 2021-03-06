import AddEvent from '../BrandPieces/AddEventButton';

import { Header, Grid, Responsive } from 'semantic-ui-react';

// child of pages/event-list
function EventsPageHeader() {
  return (
    <Grid.Row>
      <Grid.Column width={6} textAlign='left'>
        <Responsive minWidth={768}>
          <Header as='h1'>Event Overview</Header>
        </Responsive>
      </Grid.Column>

      <Grid.Column width={10} textAlign='right'>
        {/* Add event button */}
        <AddEvent />
      </Grid.Column>
    </Grid.Row>
  );
}

export default EventsPageHeader;
