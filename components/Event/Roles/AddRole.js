import { handleOption } from '../../../utils/actions/roles/addroles/handleOption';
import { dateToMilitary, dateToTime } from '../../../utils/timeUtils';
import ConfirmDeleteRole from './ConfirmDeleteRole';

const options = require('../../../utils/options');
import {
  Modal,
  Form,
  Button,
  Icon,
  Divider,
  Grid,
  Message,
  TextArea,
  Input,
  Label
} from 'semantic-ui-react';

const INITIAL_ROLE = {
  event_id: '',
  roletype: '',
  shiftStart: null,
  shiftEnd: null,
  instructions: '',
  uniformInstructions: '',
  wage: '',
  overtime: '',
  tip: ''
};

const REQUIRED = [
  'event_id',
  'roletype',
  'eventType',
  'shiftStart',
  'shiftEnd',
  'address2',
  'instructions',
  'uniformInstructions',
  'wage',
  'tip'
];

function AddRole({ event, role }) {
  const [modal, setModal] = React.useState(false);
  const [modalDiscard, setModalDiscard] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [roleState, setRoleState] = React.useState(INITIAL_ROLE);

  // updates roleState
  function handleChange(change) {
    const { name, value } = change.target;
    setRoleState((prevState) => ({ ...prevState, [name]: value }));
  }

  // when edits are discarded
  function onDiscard() {
    setModal(false);
    setModalDiscard(false);
  }

  //
  async function handleSubmit(change) {
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

  return (
    <Modal
      trigger={
        <Button floated='right' size='small' primary>
          <Icon name='plus' />
          Add
        </Button>
      }>
      <Modal.Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} textAlign='left'>
              Add Role
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
                onChange={(e, result) => handleOption(e, result, setRoleState)}
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
                name='shiftStart'
                placeholder='12:00 PM'
                options={options.times}
                onChange={(e, result) => handleOption(e, result, setRoleState)}
                value={dateToMilitary(roleState.shiftStart)}
                text={dateToTime(roleState.shiftStart)}
              />
              <Form.Select
                label='Shift End'
                name='shiftEnd'
                placeholder='18:00 PM'
                options={options.times}
                onChange={(e, result) => handleOption(e, result, setRoleState)}
                value={dateToMilitary(roleState.shiftEnd)}
                text={dateToTime(roleState.shiftEnd)}
              />
            </Form.Group>
            <Form.Input label='Instructions'>
              <TextArea
                name='instructions'
                placeholder='List the oblications of this position...'
                onChange={handleChange}
                // value={roleState.instructions}
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
            <Form.Group widths='equal'>
              <Form.Input label='Hourly Wage'>
                <Input
                  type='text'
                  name='wage'
                  labelPosition='right'
                  placeholder='15'
                  onChange={handleChange}
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
                onChange={handleChange}
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
              <Form.Button
                disabled={disabled}
                onClick={handleSubmit}
                floated='right'
                fluid
                primary>
                Submit
              </Form.Button>
            </Form.Group>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default AddRole;
