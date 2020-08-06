import { Modal, Header, Grid, Button, Divider } from 'semantic-ui-react';

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

const HeaderModals = ({ event }) => (
  <>
    <Modal
      trigger={
        <Button color='blue' fluid>
          Location
        </Button>
      }>
      <Modal.Header>Location</Modal.Header>
      <Modal.Content>
        <Grid>
          <Grid.Column>
            {/* will only display event venue if its available */}
            {event.venue ? (
              <>
                {event.venue} <br />
              </>
            ) : (
              <></>
            )}

            <a>
              {event.address1}
              {RenderAddress(event.address2)}
              <br />
              {event.city}, {event.state} {event.zip}
            </a>
          </Grid.Column>
        </Grid>
      </Modal.Content>
    </Modal>
    <Divider hidden />
    <Modal
      trigger={
        <Button color='blue' fluid>
          Parking
        </Button>
      }>
      <Modal.Header>Parking</Modal.Header>
      <Modal.Content>
        <Grid>
          <Grid.Column>
            <Grid.Row>
              <Header sub>Parking</Header>
              {event.parking}
            </Grid.Row>
            <Divider hidden />
            {/* will only display parking address if their is a parking address available */}
            {event.parkingaddress1 ? (
              <>
                <Grid.Row>
                  <Header sub>Parking Address</Header>
                  {/* will only display parking venue if it's available */}
                  {event.parkingvenue ? (
                    <>
                      {event.parkingvenue} <br />{' '}
                    </>
                  ) : (
                    <> </>
                  )}
                  <a>
                    {event.parkingaddress1}
                    {RenderAddress(event.parkingaddress2)}
                    <br />
                    {event.parkingcity}, {event.parkingstate}
                    {event.parkingzip}
                  </a>
                </Grid.Row>
                <Divider hidden />
              </>
            ) : (
              <></>
            )}
            <Grid.Row>
              <Header sub>Parking Instructions</Header>
              <p>{event.parkingInstructions}</p>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Modal.Content>
    </Modal>
    <Divider hidden />
    <Modal
      trigger={
        <Button color='blue' fluid>
          Uniforms
        </Button>
      }>
      <Modal.Header>Uniforms</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header sub>Uniforms</Header>
          {event.uniforms}
          <Divider hidden />
          <Header sub>Uniform Instructions</Header>
          <p>{event.uniformsInstructions}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    <Divider hidden />
    <Modal
      trigger={
        <Button color='blue' fluid>
          Details
        </Button>
      }>
      <Modal.Header>Details</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header sub>Details</Header>
          {event.eventDescription}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </>
);

export default HeaderModals;
