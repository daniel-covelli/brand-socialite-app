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
  await axios
    .all([axios.get(url, payload), axios.get(roles_url, payload)])
    .then(
      axios.spread((...responses) => {
        console.log('response 0', responses[0].data);
        return { event: responses[0].data, roles: responses[1].data };
      })
    )
    .catch((errors) => {});
};

export default Event;
