import React from 'react';
import ConfirmDeleteRole from './ConfirmDeleteRole';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import catchErrors from '../../../utils/catchErrors';
const data = require('../../../utils/times');
const moment = require('moment');
import {
  Button,
  Icon,
  Modal,
  Form,
  Divider,
  Grid,
  TextArea
} from 'semantic-ui-react';

import ParkingForm from '../../CreateEvent/ParkingForm';

const INITIAL_ROLE = {
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

function RolesEdit({ event, role, options }) {
  const [modal, setModal] = React.useState(false);
  const [modalDiscard, setModalDiscard] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [roleState, setRoleState] = React.useState(INITIAL_ROLE);
  const [disabled, setDisabled] = React.useState(true);
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
    if (role) {
      for (const [key, value] of Object.entries(INITIAL_ROLE)) {
        setRoleState((prevState) => ({ ...prevState, [key]: role[key] }));
      }

      for (const [key, value] of Object.entries(INITIAL_VIRTUAL_ROLE)) {
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
    isDisabled(name, value);
  }

  // handles option fields
  const handleOption = (event, result) => {
    const { name, value } = result;
    // if option input is a time, updates time display and military value
    if (name === 'shift_start_time' || name === 'shift_end_time') {
      setRoleTimeView((prevState) => ({
        ...prevState,
        [name]: moment(value, 'HH:mm').format('h:mm A')
      }));
      setRoleTimeValue((prevState) => ({
        ...prevState,
        [name]: value
      }));
      // sets roleState.shiftStart|shiftEnd to ISO_8601 version of result.value
      const datetime = moment.utc(value, 'HH:mm').toISOString();
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
    setModal(false);
    setModalDiscard(false);
  }

  async function handleSubmit(change) {
    try {
      change.preventDefault();
      setLoading(true);
      const url = `${baseUrl}/api/role`;
      const payload = { ...roleState };
      const response = await axios.put(url, payload);

      setModal(false);

      // setEvent(INITIAL_EVENT);
    } catch (error) {
      catchErrors(error, setError);
      console.error('Submit event error', error);
    } finally {
      setLoading(false);
    }
  }

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
      }
      header='Role Information'
      actions={['Close', { key: 'done', content: 'Save', primary: true }]}>
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
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
              <Form.Select
                name='roletype'
                label='Role Type'
                placeholder='Choose a Role'
                value={roleState.roletype}
                options={options}
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
                placeholder='Ex. 12:00'
                options={data.times}
                onChange={handleOption}
                value={roleTimeValue.shift_start_time}
                text={roleTimeView.shift_start_time}
              />
              <Form.Select
                label='Shift End'
                name='shift_end_time'
                placeholder='Ex. 18:00'
                options={data.times}
                onChange={handleOption}
                value={roleTimeValue.shift_end_time}
                text={roleTimeView.shift_end_time}
              />
            </Form.Group>
            <Form.Input label='Instructions'>
              <TextArea
                name='instructions'
                placeholder='List the oblications of this position...'
                onChange={handleChange}
                value={roleState.instructions}
              />
            </Form.Input>

            <Form.Input label='Uniform Details'>
              <TextArea
                name='uniformInstructions'
                placeholder='Detail uniform specifications for this position...'
                onChange={handleChange}
                value={roleState.uniformInstructions}
              />
            </Form.Input>

            <Divider hidden />
            <Form.Group widths='equal'>
              <ConfirmDeleteRole props={{ event, role }} />

              <Form.Button disabled={disabled} floated='right' fluid primary>
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
