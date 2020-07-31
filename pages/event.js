import axios from 'axios';
import EventHeader from '../components/Event/Header/EventHeader';
import EventDetails from '../components/Event/EventDetails';
import EventBody from '../components/Event/EventBody';
import EventActions from '../components/Event/EventActions';

import { Divider } from 'semantic-ui-react';

function Event({ event, roles }) {
  console.log(event);
  console.log(roles);
  return (
    <>
      <EventHeader event={{ event }} />
      <EventBody event={{ event }} />
      <EventDetails event={{ event }} />
      <Divider hidden />
      <EventActions event={{ event, roles }} />
    </>
  );
}

// get event by _id from api and return props for Event component
Event.getInitialProps = async ({ query: { _id } }) => {
  const url = 'http://localhost:3000/api/event';
  const roles_url = 'http://localhost:3000/api/roles';
  const payload = { params: { _id } };
  console.log('payload');
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
