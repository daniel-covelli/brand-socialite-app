import { handleOption } from '../../../utils/actions/roles/addroles/handleOption';
import RoleHeader from './pieces/RoleHeader';
import RoleType from './pieces/RoleType';
import DateStartEnd from './pieces/DateStartEnd';
import Instructions from './pieces/Instructions';
import UniformInstructions from './pieces/UniformInstructions';
import WageTipOt from './pieces/WageTipOt';

import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import catchErrors from '../../../utils/catchErrors';

import { Modal, Form, Button, Icon, Divider, Message } from 'semantic-ui-react';

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

// child of EventRoles
function AddRole({ event }) {
  const INITIAL_ROLE = {
    event_id: event._id,
    roletype: '',
    shiftStart: null,
    shiftEnd: null,
    instructions: '',
    uniformInstructions: '',
    wage: '',
    overtime: '',
    tip: 0
  };

  // sets initial state of form
  const [roleState, setRoleState] = React.useState(INITIAL_ROLE);

  const [modal, setModal] = React.useState(false);
  const [modalDiscard, setModalDiscard] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState(null);

  // enables submit button if all required fields are filled
  React.useEffect(() => {
    const areFieldsFilled = Object.entries(roleState).every((el) =>
      REQUIRED.includes(el[0]) ? Boolean(el[1]) : true
    );

    areFieldsFilled ? setDisabled(false) : setDisabled(true);
  }, [roleState]);

  // updates roleState
  function handleChange(change) {
    const { name, value } = change.target;
    setRoleState((prevState) => ({ ...prevState, [name]: value }));
  }

  // resets form modal trigger
  function openModal() {
    setRoleState(INITIAL_ROLE);
    setModal(true);
    setDisabled(true);
    setError(null);
  }

  //
  async function handleSubmit(change) {
    try {
      change.preventDefault();
      setLoading(true);
      const url = `${baseUrl}/api/roles`;
      const payload = { ...roleState };
      const response = await axios.post(url, payload);
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
        <Button
          onClick={() => openModal()}
          floated='right'
          size='small'
          primary>
          <Icon name='plus' />
          Add
        </Button>
      }>
      {/* Header */}
      <RoleHeader
        disabled={disabled}
        setModal={setModal}
        setModalDiscard={setModalDiscard}
        modalDiscard={modalDiscard}
        headerContent={'Add Role'}
      />
      <Modal.Content image>
        <Modal.Description>
          <Message error content={error} hidden={!Boolean(error)} />
          <Form loading={loading}>
            {/* RoleType */}
            <RoleType
              roletype={roleState.roletype}
              onChange={(e, result) => handleOption(e, result, setRoleState)}
            />
            <Divider hidden />

            {/* Date, Shift Start, Shift End */}
            <DateStartEnd
              date={event.date_formatted}
              onChange={(e, result) => handleOption(e, result, setRoleState)}
              shiftStart={roleState.shiftStart}
              shiftEnd={roleState.shiftEnd}
            />

            {/* Instructions */}
            <Instructions
              handleChange={handleChange}
              instructions={roleState.instructions}
            />

            {/* Uniform Instructions */}
            <UniformInstructions
              handleChange={handleChange}
              uniform={roleState.uniformInstructions}
            />

            {/* Wage Tip Overtime */}
            <WageTipOt
              handleChange={handleChange}
              wage={roleState.wage}
              tip={roleState.tip}
              overtime={roleState.overtime}
            />
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
