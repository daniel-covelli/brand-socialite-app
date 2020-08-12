import React from 'react';
import ConfirmDeleteRole from './ConfirmDeleteRole';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import catchErrors from '../../../utils/catchErrors';
var _ = require('lodash');
const options = require('../../../utils/options');
const moment = require('moment');
import {
  Button,
  Icon,
  Modal,
  Form,
  Divider,
  Grid,
  TextArea,
  Message,
  Label,
  Input
} from 'semantic-ui-react';
import Instructions from './pieces/Instructions';

const INITIAL_ROLE = {
  _id: '',
  event_id: '',
  roletype: '',
  shiftStart: '',
  shiftEnd: '',
  instructions: '',
  uniformInstructions: '',
  wage: '',
  overtime: '',
  tip: ''
};

const INITIAL_VIRTUAL_ROLE = {
  shift_start_time: '',
  shift_end_time: ''
};

// child of EventRoles
function RolesEdit({ event, role }) {
  const [modal, setModal] = React.useState(false);
  const [modalDiscard, setModalDiscard] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [roleState, setRoleState] = React.useState(INITIAL_ROLE);
  const [roleTimeValue, setRoleTimeValue] = React.useState(
    INITIAL_VIRTUAL_ROLE
  );
  const [roleTimeView, setRoleTimeView] = React.useState(INITIAL_VIRTUAL_ROLE);

  // runs getRole once on load
  React.useEffect(() => {
    getRole();
  }, []);

  // if their is a role is present sets state to role state
  // else sets event_id
  function getRole() {
    console.log('get role ran');
    if (role) {
      for (const [key, values] of Object.entries(INITIAL_ROLE)) {
        setRoleState((prevState) => ({ ...prevState, [key]: role[key] }));
      }

      for (const [key, values] of Object.entries(INITIAL_VIRTUAL_ROLE)) {
        // sets roleVirtualState to military equ. of shift_(start|end)_time in role
        setRoleTimeValue((prevState) => ({
          ...prevState,
          [key]: moment(role[key], 'hh:mm a').format('HH:mm')
        }));
        // sets roleVirtualStateView to HH:mm provided by shift_(start|end)_time in role
        setRoleTimeView((prevState) => ({
          ...prevState,
          [key]: role[key]
        }));
      }
      setDisabled(true);
    }
  }

  // sets button to disabled if no new information has been added
  function isDisabled(name, value) {
    if (name === 'shiftStart' || name === 'shiftEnd') {
      const isRole = moment(role[name]).format('H:mm') === value;
      isRole ? setDisabled(true) : setDisabled(false);
    } else {
      const isRole = role[name] === value;
      isRole ? setDisabled(true) : setDisabled(false);
    }
  }

  // updates roleState and activates save button if change is made

  function handleChange(change) {
    const { name, value } = change.target;
    setRoleState((prevState) => ({ ...prevState, [name]: value }));
    console.log('current state', roleState);
  }

  // handles option fields
  const handleOption = (e, result) => {
    const { name, value } = result;
    // if option input is a time, updates time display and time value
    if (name === 'shift_start_time' || name === 'shift_end_time') {
      setRoleTimeView((prevState) => ({
        ...prevState,
        [name]: moment(value, 'HH:mm').format('h:mm A')
      }));
      setRoleTimeValue((prevState) => ({
        ...prevState,
        [name]: value
      }));
      // sets shiftStart and shiftEnd to ISO_8601 standard
      const datetime = moment(value, 'HH:mm').toISOString();
      if (name === 'shift_start_time') {
        setRoleState((prevState) => ({
          ...prevState,
          shiftStart: datetime
        }));
        isDisabled('shiftStart', value);
      } else {
        setRoleState((prevState) => ({
          ...prevState,
          shiftEnd: datetime
        }));
        isDisabled('shiftEnd', value);
      }
      // sets roletype field in roleState to new value
    } else {
      setRoleState((prevState) => ({
        ...prevState,
        roletype: value
      }));
      isDisabled(name, value);
    }
  };

  // when edits are discarded
  function onDiscard() {
    console.log('onDiscard ran');
    setModal(false);
    setModalDiscard(false);
    getRole();
  }

  //
  async function handleSubmit(change) {
    console.log('handleSubmit ran');
    try {
      change.preventDefault();
      setLoading(true);
      const url = `${baseUrl}/api/roles`;
      const payload = { ...roleState };
      const response = await axios.put(url, payload);
      console.log('response', response.data);
      setError(null);
      setModal(false);
      window.location.reload();
      // setEvent(INITIAL_EVENT);
    } catch (error) {
      catchErrors(error, setError);
      console.error('Submit event error', error);
    } finally {
      setLoading(false);
    }
  }
  // console.log('wage type', roleState.wage);
  // console.log('virtual view start', roleTimeView.shift_start_time);
  // console.log('virtual value start', roleTimeValue.shift_start_time);
  // console.log('roleState', roleState);
  // console.log('roletype', roleState.roletype);
  // console.log('role start', roleState.shiftStart);
  // console.log('role ground start', role.shiftStart);

  return (
    <Modal
      open={modal}
      trigger={
        <Button onClick={() => setModal(true)} size='small' circular icon>
          <Icon name='pencil' />
        </Button>
      }>
      <Modal.Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} textAlign='left'>
              Edit Role
            </Grid.Column>
            <Grid.Column width={8} textAlign='right'>
              <Modal
                size='mini'
                open={modalDiscard}
                trigger={
                  <Button
                    circular
                    icon='close'
                    onClick={() =>
                      disabled ? setModal(false) : setModalDiscard(true)
                    }
                  />
                }>
                <Modal.Header>Discard Changes</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <p>
                      Are you sure you want to discard the changes you have
                      made?
                    </p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    color='red'
                    content='Discard'
                    onClick={() => onDiscard()}></Button>
                  <Button onClick={() => setModalDiscard(false)}>Back</Button>
                </Modal.Actions>
              </Modal>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Message error content={error} hidden={!Boolean(error)} />
          <Form loading={loading}>
            <Form.Group widths='equal'>
              <Form.Select
                name='roletype'
                label='Role Type'
                placeholder='Choose a Role'
                value={roleState.roletype}
                options={options.roles}
                onChange={handleOption}
              />
            </Form.Group>
            <Divider hidden />
            <Form.Group widths='equal'>
              <Form.Input
                disabled={true}
                label='Date'
                placeholder='Date'
                value={event.date_formatted}
              />
              <Form.Select
                label='Shift Start'
                name='shift_start_time'
                placeholder='12:00 PM'
                options={options.times}
                onChange={handleOption}
                value={roleTimeValue.shift_start_time}
                text={roleTimeView.shift_start_time}
              />
              <Form.Select
                label='Shift End'
                name='shift_end_time'
                placeholder='18:00 PM'
                options={options.times}
                onChange={handleOption}
                value={roleTimeValue.shift_end_time}
                text={roleTimeView.shift_end_time}
              />
            </Form.Group>
            <Instructions handleChange={handleChange} />
            <Form.Input label='Uniform Details'>
              <TextArea
                name='uniformInstructions'
                placeholder='Detail uniform specifications for this position...'
                // onChange={waitToChange}
                value={roleState.uniformInstructions}
              />
            </Form.Input>
            <Form.Group widths='equal'>
              <Form.Input label='Hourly Wage'>
                <Input
                  type='text'
                  name='wage'
                  labelPosition='right'
                  placeholder='15'
                  /// onChange={waitToChange}
                  value={roleState.wage}>
                  <Label basic>$</Label>
                  <input />
                  <Label>/hr</Label>
                </Input>
              </Form.Input>
              <Form.Input
                iconPosition='left'
                icon='dollar sign'
                label='Tip'
                name='tip'
                placeholder='50'
                // onChange={waitToChange}
                value={roleState.tip}
              />
              <Form.Input
                icon='time'
                label='Overtime'
                name='overtime'
                disabled={true}
                value={roleState.overtime}
              />
            </Form.Group>

            <Divider hidden />
            <Form.Group widths='equal'>
              <ConfirmDeleteRole props={{ event, role }} />

              <Form.Button
                disabled={disabled}
                onClick={handleSubmit}
                floated='right'
                fluid
                primary>
                Save
              </Form.Button>
            </Form.Group>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default RolesEdit;
