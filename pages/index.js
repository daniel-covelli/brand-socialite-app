import React from 'react';
import Link from 'next/Link';
import { Grid, Image } from 'semantic-ui-react';

function Home({ events }) {
  return (
    <Grid stackable>
      <Grid.Row>
        <Grid.Column>
          <Image size='small' src='/static/logo.png' centered />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5} />
        <Grid.Column width={3} textAlign='left'>
          <Link href='/brand-dashboard'>
            <a>Brand Dashboard</a>
          </Link>
        </Grid.Column>
        <Grid.Column width={3} textAlign='right'>
          <Link href='/talent-dashboard'>
            <a>Talent Dashboard</a>
          </Link>
        </Grid.Column>
        <Grid.Column width={5} />
      </Grid.Row>
    </Grid>
  );
}

export default Home;
