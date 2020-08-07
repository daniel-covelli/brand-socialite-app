import RolesEdit from './RolesEdit';
import {
  Segment,
  Header,
  Table,
  Button,
  Divider,
  Responsive,
  Grid
} from 'semantic-ui-react';
import AddRole from './AddRole';

const options = [
  { key: '0', text: 'Bartender', value: 'Bartender' },
  { key: '1', text: 'Mixologist', value: 'Mixologist' },
  { key: '2', text: 'Photographer', value: 'Photographer' },
  { key: '3', text: 'Brand Ambassador', value: 'Brand Ambassador' },
  { key: '4', text: 'Event Producer', value: 'Event Producer' },
  { key: '5', text: 'Butler', value: 'Butler' },
  { key: '6', text: 'Promotional Model', value: 'Promotional Model' },
  { key: '7', text: 'Security Guard', value: 'Security Guard' },
  { key: '8', text: 'Sommelier', value: 'Sommelier' },
  { key: '9', text: 'Sushi Chef', value: 'Sushi Chef' },
  { key: '10', text: 'Videographer', value: 'Videographer' }
];

function EventBody({ event, roles }) {
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
        <Table.Cell>
          <Responsive minWidth={768}>status</Responsive>
          <Responsive maxWidth={768}>st</Responsive>
        </Table.Cell>

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
          <RolesEdit event={event} role={role} options={options} />
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
          <AddRole props={{ event, roles, options }} />
        </Grid.Column>
      </Grid>

      <Divider hidden />
      <Table ingleLine>
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

export default EventBody;
