import React from 'react';
import axios from 'axios';

function Home({ events }) {
  console.log(events);
  // React.useEffect(() => {
  //   getEvents();
  // }, []);

  // async function getEvents() {
  //   const url = 'http://localhost:3000/api/events';
  //   const response = await axios.get(url);
  //   console.log(response.data);
  // }

  return <>home</>;
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = 'http://localhost:3000/api/events';
  const response = await axios.get(url);
  return { events: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default Home;
