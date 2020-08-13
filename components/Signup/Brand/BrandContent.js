import { Divider, Grid, Header, Icon, Image } from 'semantic-ui-react';

function BrandContent() {
  return (
    <>
      <Divider hidden />
      <Divider hidden />
      <Grid.Row>
        <Grid.Column>
          <Image src='/static/wine.svg' size='big' centered />
        </Grid.Column>
      </Grid.Row>
      <Divider hidden />
      <Divider hidden />
      <Grid.Row>
        <Grid stackable columns={3}>
          <Grid.Column textAlign='left'>
            <Icon
              circular
              inverted
              size='large'
              color='teal'
              name='calendar plus'
            />
            <Header as='h3'>Create Events</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Grid.Column>
          <Grid.Column textAlign='left'>
            <Icon circular inverted size='large' color='teal' name='users' />
            <Header as='h3'>Find Talent</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Grid.Column>
          <Grid.Column textAlign='left'>
            <Icon circular inverted size='large' color='teal' name='tag' />
            <Header as='h3'>Competitve Pricing</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Grid.Column>
        </Grid>
      </Grid.Row>
    </>
  );
}

export default BrandContent;
