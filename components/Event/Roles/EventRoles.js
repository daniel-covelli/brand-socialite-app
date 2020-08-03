import RolesEdit from './RolesEdit';
import {
  Segment,
  Header,
  Table,
  Button,
  Divider,
  Responsive,
  Icon,
  Grid
} from 'semantic-ui-react';

function EventBody({ event, roles }) {
  function mapRolesToItems(roles) {
    return roles.map((role) => (
      <Table.Row verticalAlign='top'>
        <Table.Cell>
          <Responsive minWidth={768}>status</Responsive>
          <Responsive maxWidth={768}>st</Responsive>
        </Table.Cell>

        <Table.Cell>{role.roletype}</Table.Cell>
        <Table.Cell>
          <Responsive minWidth={768}>{role.shift_timespan}</Responsive>
        </Table.Cell>

        <Table.Cell>
          <Responsive minWidth={768}>
            {`${role.instructions.substring(0, 41)}...`}
          </Responsive>
        </Table.Cell>

        <Table.Cell verticalAlign='top'>
          <Responsive minWidth={768}>
            ${role.wage} <br /> per hour
          </Responsive>
        </Table.Cell>

        <Table.Cell textAlign='right'>
          <Button size='small' primary>
            Book
          </Button>
        </Table.Cell>

        <Table.Cell textAlign='right'>
          <RolesEdit event={event} role={role} />
        </Table.Cell>
      </Table.Row>
    ));
  }
  // console.log('roles', roles);
  // console.log('event', event);
  return (
    <Segment raised clearing>
      <Grid columns={2}>
        <Grid.Column floated='left' width={6}>
          <Header as='h3' floated='left'>
            Roles
          </Header>
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
          <Button floated='right' size='tiny' primary>
            <Icon name='plus' />
            Add
          </Button>
        </Grid.Column>
      </Grid>

      <Divider hidden />
      <Table basic>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='right'></Table.HeaderCell>
            <Table.HeaderCell textAlign='left'>Role</Table.HeaderCell>
            <Table.HeaderCell textAlign='left'>
              <Responsive minWidth={768}>Shift</Responsive>
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='left'>
              <Responsive minWidth={768}>Instructions</Responsive>
            </Table.HeaderCell>

            <Table.HeaderCell textAlign='left'>
              <Responsive minWidth={768}>Rate </Responsive>
            </Table.HeaderCell>

            <Table.HeaderCell textAlign='right'></Table.HeaderCell>
            <Table.HeaderCell textAlign='right'></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{mapRolesToItems(roles)}</Table.Body>
      </Table>
    </Segment>
  );
}

export default EventBody;
