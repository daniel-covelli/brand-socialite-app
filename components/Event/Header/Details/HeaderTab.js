import { Header, Grid, Tab, Divider } from 'semantic-ui-react';

function RenderAddress(address2) {
  if (!address2) {
    return null;
  } else {
    return (
      <>
        <br />
        {address2}
      </>
    );
  }
}

const HeaderTab = ({ event }) => (
  <Tab
    menu={{ color: 'blue', secondary: true, pointing: true }}
    panes={[
      {
        menuItem: 'Location',
        render: () => (
          <Tab.Pane style={{ minHeight: 250 }} attached={false}>
            <Divider hidden />
            <Grid>
              <Grid.Column>
                <Header sub>Address</Header>
                {event.venue} <br />
                <a>
                  {event.address1}
                  {RenderAddress(event.address2)}
                  <br />
                  {event.city}, {event.state} {event.zip}
                </a>
              </Grid.Column>
            </Grid>
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Parking',
        render: () => (
          <Tab.Pane style={{ minHeight: 300 }} attached={false}>
            <Divider hidden />
            <Grid>
              <Grid.Column width={6}>
                <Grid.Row>
                  <Grid.Row>
                    <Header sub>Parking</Header>
                    {event.parking}
                  </Grid.Row>
                  <Divider hidden />
                  <Grid.Row>
                    <Header sub>Parking Address</Header>
                    {event.parkingvenue} <br />
                    <a>
                      {event.parkingaddress1}
                      {RenderAddress(event.parkingaddress2)}
                      <br />
                      {event.parkingcity}, {event.parkingstate}
                      {event.parkingzip}
                    </a>
                  </Grid.Row>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column width={10}>
                <Header sub>Parking Instructions</Header>
                <p>{event.parkingInstructions}</p>
              </Grid.Column>
            </Grid>
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Uniforms',
        render: () => (
          <Tab.Pane style={{ minHeight: 300 }} attached={false}>
            <Divider hidden />
            <Grid>
              <Grid.Column width={16}>
                <Grid.Row>
                  <Grid.Row>
                    <Header sub>Uniforms</Header>
                    {event.uniforms}
                  </Grid.Row>
                  <Divider hidden />
                  <Grid.Row>
                    <Header sub>Uniform Instructions</Header>
                    <p>{event.uniformsInstructions}</p>
                  </Grid.Row>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Details',
        render: () => (
          <Tab.Pane style={{ minHeight: 300 }} attached={false}>
            <Divider hidden />
            <Grid>
              <Grid.Column width={16}>
                <Header sub>Details</Header>
                {event.eventDescription}
              </Grid.Column>
            </Grid>
          </Tab.Pane>
        )
      }
    ]}
  />
);
export default HeaderTab;
