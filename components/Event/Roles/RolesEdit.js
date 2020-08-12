import { handleOption } from '../../../utils/actions/roles/editroles/handleOption';
import ConfirmDeleteRole from './ConfirmDeleteRole';
import RoleHeader from './pieces/RoleHeader';
import RoleType from './pieces/RoleType';
import DateStartEnd from './pieces/DateStartEnd';
import Instructions from './pieces/Instructions';
import UniformInstructions from './pieces/UniformInstructions';
import WageTipOt from './pieces/WageTipOt';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import catchErrors from '../../../utils/catchErrors';
import { Button, Icon, Modal, Form, Divider, Message } from 'semantic-ui-react';

// child of EventRoles
function RolesEdit({ event, role }) {
  const INITIAL_ROLE = {
    _id: role._id,
    event_id: event._id,
    roletype: role.roletype,
    shiftStart: role.shiftStart,
    shiftEnd: role.shiftEnd,
    instructions: role.instructions,
    uniformInstructions: role.uniformInstructions,
    wage: role.wage,
    overtime: role.overtime,
    tip: role.tip
  };

  // sets initial state to the current role
  const [roleState, setRoleState] = React.useState(INITIAL_ROLE);

  const [modal, setModal] = React.useState(false);
  const [modalDiscard, setModalDiscard] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState(null);

  function openModal() {
    setModal(true);
    setDisabled(true);
    setError(null);
  }

  // updates roleState and activates save button if change is made
  function handleChange(change) {
    const { name, value } = change.target;
    setRoleState((prevState) => ({ ...prevState, [name]: value }));
    const isUpdate = role[name] === value;
    isUpdate ? setDisabled(true) : setDisabled(false);
  }

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

  return (
    <Modal
      open={modal}
      trigger={
        <Button onClick={() => openModal()} size='small' circular icon>
          <Icon name='pencil' />
        </Button>
      }>
      {/* Header */}
      <RoleHeader
        disabled={disabled}
        setModal={setModal}
        setModalDiscard={setModalDiscard}
        modalDiscard={modalDiscard}
        headerContent={'Edit Role'}
      />
      <Modal.Content image>
        <Modal.Description>
          <Message error content={error} hidden={!Boolean(error)} />
          <Form loading={loading}>
            {/* RoleType */}
            <RoleType
              roletype={roleState.roletype}
              onChange={(e, result) =>
                handleOption(e, result, setRoleState, setDisabled, role)
              }
            />
            <Divider hidden />

            {/* Date, Start, End */}
            <DateStartEnd
              date={event.date_formatted}
              onChange={(e, result) =>
                handleOption(e, result, setRoleState, setDisabled, role)
              }
              shiftStart={roleState.shiftStart}
              shiftEnd={roleState.shiftEnd}
            />
            {/* Instructions, Uniform, Wage Tip OT */}
            <Instructions
              handleChange={handleChange}
              instructions={roleState.instructions}
            />
            <UniformInstructions
              handleChange={handleChange}
              uniform={roleState.uniformInstructions}
            />
            <WageTipOt
              handleChange={handleChange}
              wage={roleState.wage}
              tip={roleState.tip}
              overtime={roleState.overtime}
            />
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
