import {
  Label,
  Table,
  Modal,
  Button,
  Header,
  Divider,
  Grid,
  Icon
} from 'semantic-ui-react';

function DetailsModal({ receipt }) {
  const [modal, setModal] = React.useState(false);

  function round(int) {
    var x = Math.round(100 * int) / 100;
    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  return (
    <Modal
      open={modal}
      size={'tiny'}
      trigger={
        <Label onClick={() => setModal(true)} as={'a'} size={'big'} basic image>
          Total Cost
          <Label.Detail>
            {receipt.sum ? `$${round(`${receipt.sum}`)}` : '$0.00'}
          </Label.Detail>
        </Label>
      }>
      <Modal.Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} textAlign='left'>
              Event Expenses
            </Grid.Column>
            <Grid.Column width={8} textAlign='right'>
              <Button
                onClick={() => setModal(false)}
                circular
                icon='close'></Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Modal.Description>
        <Table definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={12} />

              <Table.HeaderCell textAlign='center' width={4}>
                Amount
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Wages</Table.Cell>
              <Table.Cell textAlign='center' positive>
                {receipt.wages ? `$${round(`${receipt.wages}`)}` : 'N/A'}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Overtime</Table.Cell>

              <Table.Cell textAlign='center' positive>
                {receipt.overtime ? `$${round(`${receipt.overtime}`)}` : 'N/A'}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Tips</Table.Cell>

              <Table.Cell textAlign='center' positive>
                {receipt.tips ? `$${round(`${receipt.tips}`)}` : 'No Roles'}
              </Table.Cell>
            </Table.Row>
            <Table.Row active>
              <Table.Cell>
                <Header as='h5'>
                  Talent Expenses
                  <br />
                  <Header.Subheader>Wages + Overtime + Tips</Header.Subheader>
                </Header>
              </Table.Cell>

              <Table.Cell textAlign='center'>
                <Header as='h5'>
                  {receipt.talentSum
                    ? `$${round(`${receipt.talentSum}`)}`
                    : 'N/A'}
                </Header>
              </Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
              <Table.Cell>
                <Header as='h5'>
                  Incidentals
                  <br />
                  <Header.Subheader>25% of Talent Exp.</Header.Subheader>
                </Header>
              </Table.Cell>

              <Table.Cell textAlign='center' positive>
                {receipt.incidentals
                  ? `$${round(`${receipt.incidentals}`)}`
                  : 'N/A'}
              </Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
              <Table.Cell>
                <Header as='h5'>
                  Fees
                  <br />
                  <Header.Subheader>25% of Talent Exp.</Header.Subheader>
                </Header>
              </Table.Cell>
              <Table.Cell textAlign='center' positive>
                {receipt.fee ? `$${round(`${receipt.fee}`)}` : 'N/A'}
              </Table.Cell>
            </Table.Row>
            <Table.Row active>
              <Table.Cell>Total</Table.Cell>

              <Table.Cell textAlign='center'>
                <Header as='h5'>
                  {receipt.sum ? `$${round(`${receipt.sum}`)}` : 'N/A'}
                </Header>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Divider hidden />
        <Modal.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setModal(false)}>Got it!</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default DetailsModal;
