import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import { Divider } from 'semantic-ui-react';

// child components
import EventHeader from '../components/EventPage/Header/EventHeader';
import EventDetails from '../components/EventPage/Details/EventDetails';
import EventRoles from '../components/EventPage/Roles/EventRoles';
import EventActions from '../components/EventPage/Actions/EventActions';

function Event({ event, roles, brand_id }) {
  return (
    <>
      <EventDetails roles={roles} />
      <EventHeader event={event} />
      <Divider hidden style={{ padding: ' 1em 0 ' }} />
      <EventRoles event={event} roles={roles} brand_id={brand_id} />
      <Divider hidden style={{ padding: ' 1em 0 ' }} />
      <EventDetails roles={roles} />
      <Divider hidden style={{ padding: ' 1em 0 ' }} />
      <EventActions event={event} />
      <Divider hidden style={{ padding: ' 1em 0 ' }} />
    </>
  );
}

// get event by _id from api and return props for Event component
Event.getInitialProps = async (ctx) => {
  const url = `${baseUrl}/api/event`;
  const roles_url = `${baseUrl}/api/roles`;
  const { _id } = ctx.query;
  const payload = { params: { _id } };
  const responses = await axios.all([
    axios.get(url, payload),
    axios.get(roles_url, payload)
  ]);

  const eventdata = responses[0].data;
  const rolesdata = responses[1].data;

  const { token } = parseCookies(ctx);
  const { userId } = jwt.verify(token, process.env.JWT_SECRET);

  return { event: eventdata, roles: rolesdata, brand_id: userId };
};

export default Event;
