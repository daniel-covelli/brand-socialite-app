import axios from 'axios';
import EventHeader from '../components/Event/EventHeader';
import EventDetails from '../components/Event/EventDetails';
import EventBody from '../components/Event/EventBody';

function Event({ event }) {
  return (
    <>
      <EventHeader {...event} />
      <EventDetails {...event} />
      <EventBody {...event} />
    </>
  );
}

// get event by _id from api and return props for Event component
Event.getInitialProps = async ({ query: { _id } }) => {
  const url = 'http://localhost:3000/api/event';
  const payload = { params: { _id } };
  const response = await axios.get(url, payload);
  return { event: response.data };
};

export default Event;
