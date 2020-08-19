import React from 'react';
import Link from 'next/Link';

import { Grid, Header, Icon, Responsive } from 'semantic-ui-react';

function EventTileHeader({ events }) {
  return (
    <Grid.Row>
      <Grid.Column width={8} textAlign='left'>
        <Header as='h2'>Upcoming Events</Header>
      </Grid.Column>
      <Grid.Column width={8} textAlign='right'>
        <Link href='/brand/eventslist'>
          <a>
            Show More <Icon name='angle right' />
          </a>
        </Link>
      </Grid.Column>
    </Grid.Row>
  );
}

export default EventTileHeader;
