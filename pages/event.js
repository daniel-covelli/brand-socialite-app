import axios from 'axios';
import EventHeader from '../components/Event/Header/EventHeader';
import EventDetails from '../components/Event/Details/EventDetails';
import EventRoles from '../components/Event/Roles/EventRoles';
import EventActions from '../components/Event/Actions/EventActions';
import baseUrl from '../utils/baseUrl';

import { Divider } from 'semantic-ui-react';

function Event({ event, roles }) {
  return (
    <>
      <EventDetails roles={roles} />
      <EventHeader event={event} />
      <Divider hidden style={{ padding: ' 1em 0 ' }} />
      <EventRoles event={event} roles={roles} />
      <Divider hidden style={{ padding: ' 1em 0 ' }} />
      <EventDetails roles={roles} />
      <Divider hidden style={{ padding: ' 1em 0 ' }} />
      <EventActions event={event} />
      <Divider hidden style={{ padding: ' 1em 0 ' }} />
    </>
  );
}

// get event by _id from api and return props for Event component
Event.getInitialProps = async ({ query: { _id } }) => {
  const url = `${baseUrl}/api/event`;
  const roles_url = `${baseUrl}/api/roles`;
  const payload = { params: { _id } };
  const responses = await axios.all([
    axios.get(url, payload),
    axios.get(roles_url, payload)
  ]);

  console.log('responses recieved');
  const eventdata = responses[0].data;
  const rolesdata = responses[1].data;

  return { event: eventdata, roles: rolesdata };
};

export default Event;
