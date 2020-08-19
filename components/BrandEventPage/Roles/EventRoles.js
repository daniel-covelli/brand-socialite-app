import {
  Segment,
  Header,
  Table,
  Button,
  Divider,
  Responsive,
  Grid
} from 'semantic-ui-react';

// functions and objects
import getStatus from '../../../utils/getStatus';

// child components
import AddRole from './AddRole';
import RolesEdit from './RolesEdit';

function EventRoles({ event, roles, brand_id }) {
  function RoleInstructions(instructions) {
    const length = instructions.length;
    if (length > 50) {
      return <>{`${instructions.substring(0, 50)}...`}</>;
    }
    return <>{instructions}</>;
  }

  function mapRolesToItems(roles) {
    return roles.map((role) => (
      <Table.Row verticalAlign='top' key={role._id}>
        <Table.Cell>{getStatus(role)}</Table.Cell>
        <Table.Cell>{role.roletype}</Table.Cell>

        <Table.Cell>
          <Responsive minWidth={768}>
            {RoleInstructions(role.instructions)}
          </Responsive>
        </Table.Cell>

        <Table.Cell>
          <Responsive minWidth={768}>{role.shift_timespan}</Responsive>
        </Table.Cell>

        <Table.Cell>
          <Responsive minWidth={768}>{role.hours}</Responsive>
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

  return (
    <Segment raised clearing>
      <Grid columns={2}>
        <Grid.Column floated='left' width={6}>
          <Header as='h3' floated='left'>
            Roles
          </Header>
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
          <AddRole event={event} brand_id={brand_id} />
        </Grid.Column>
      </Grid>

      <Divider hidden />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='right'></Table.HeaderCell>
            <Table.HeaderCell textAlign='left'>Role</Table.HeaderCell>

            <Table.HeaderCell textAlign='left'>
              <Responsive minWidth={768}>Instructions</Responsive>
            </Table.HeaderCell>

            <Table.HeaderCell textAlign='left'>
              <Responsive minWidth={768}>Shift</Responsive>
            </Table.HeaderCell>

            <Table.HeaderCell textAlign='left'>
              <Responsive minWidth={768}>Hours </Responsive>
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
      <Divider hidden />
    </Segment>
  );
}

export default EventRoles;
