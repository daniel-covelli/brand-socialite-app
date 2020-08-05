const moment = require('moment');

import React from 'react';
import { Form, Segment, Button, Grid, Divider } from 'semantic-ui-react';
import BannerForm from './BannerForm';
import TimesForm from './TimesForm';
import NamesForm from './NamesForm';
import TypeDetailsForm from './TypeDetailsForm';
import AddressForm from './AddressForm';
import ParkingForm from './ParkingForm';

const INITIAL_EVENT = {
  eventMediaUrl: '',
  eventName: '',
  hostName: '',
  eventType: '',
  estAttendance: '',
  date: '',
  setupStart: '',
  setupEnd: '',
  eventStart: '',
  eventEnd: '',
  breakdownStart: '',
  breakdownEnd: '',
  venue: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  parking: '',
  parkingvenue: '',
  parkingvenue: '',
  parkingaddress1: '',
  parkingaddress2: '',
  parkingcity: '',
  parkingstate: '',
  parkingzip: ''
};

function CreateHeader() {
  const [event, setEvent] = React.useState(INITIAL_EVENT);
  const [times, setTimes] = React.useState(INITIAL_EVENT);
  const [currentDate, setNewDate] = React.useState(null);
  const [mediaPreview, setMediaPreview] = React.useState(
    '/static/no-image-1.jpg'
  );

  // general onChange handler used by all components
  function handleChange(change) {
    const { name, value, files } = change.target;
    console.log('target', change.target);
    if (name === 'eventMediaUrl') {
      setEvent((prevState) => ({ ...prevState, eventMediaUrl: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setEvent((prevState) => ({ ...prevState, [name]: value }));
    }
  }

  // called by TimesForm
  function handleTime(change) {
    const { name, value } = change.target;
    setTimes((prevState) => ({ ...prevState, [name]: value }));
    var ISOtime = moment(value, 'HH:mm').toDate();
    setEvent((prevState) => ({ ...prevState, [name]: ISOtime }));
  }

  // called by TimesForm
  const dateChange = (change, data) => {
    setNewDate(data.value);
    setEvent((prevState) => ({
      ...prevState,
      date: data.value
    }));
  };

  // called by Parking Form when option is changed
  function handleOption(e, { value }) {
    setEvent((prevState) => ({ ...prevState, parking: value }));
  }

  // called by ParkingForm when radio is changed
  const handleRadio = (checked) => {
    if (checked.bool) {
      setEvent((prevState) => ({
        ...prevState,
        parkingvenue: event.venue
      }));
      setEvent((prevState) => ({
        ...prevState,
        parkingaddress1: event.address1
      }));
      setEvent((prevState) => ({
        ...prevState,
        parkingaddress2: event.address2
      }));
      setEvent((prevState) => ({
        ...prevState,
        parkingcity: event.city
      }));
      setEvent((prevState) => ({
        ...prevState,
        parkingstate: event.state
      }));
      setEvent((prevState) => ({
        ...prevState,
        parkingzip: event.zip
      }));
    } else {
      setEvent((prevState) => ({
        ...prevState,
        parkingvenue: ''
      }));
      setEvent((prevState) => ({
        ...prevState,
        parkingaddress1: ''
      }));
      setEvent((prevState) => ({
        ...prevState,
        parkingaddress2: ''
      }));
      setEvent((prevState) => ({
        ...prevState,
        parkingcity: ''
      }));
      setEvent((prevState) => ({
        ...prevState,
        parkingstate: ''
      }));
      setEvent((prevState) => ({
        ...prevState,
        parkingzip: ''
      }));
    }
  };

  function handleSubmit(change) {
    change.preventDefault();
    console.log(event);
    setEvent(INITIAL_EVENT);
  }

  console.log('current event', event);
  return (
    <Form onSubmit={handleSubmit}>
      <Segment raised>
        <Grid stackable columns={2}>
          <Grid.Column width={4}>
            <BannerForm props={{ handleChange, mediaPreview }} />
          </Grid.Column>
          <Grid.Column width={12}>
            <NamesForm props={{ handleChange, event }} />
            <TimesForm props={{ dateChange, handleTime, event, times }} />
            <TypeDetailsForm props={{ handleChange, event }} />
            <AddressForm props={{ handleChange, event }} />
            <ParkingForm
              props={{ handleOption, handleChange, handleRadio, event }}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      <Form.Field floated type='submit'>
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign='right' width={16}>
              <Button primary>Submit</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form.Field>
    </Form>
  );
}

export default CreateHeader;
