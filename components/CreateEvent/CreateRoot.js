const moment = require('moment');
import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import baseUrl from '../../utils/baseUrl';
import catchErrors from '../../utils/catchErrors';
import { Form, Segment, Button, Grid, Message } from 'semantic-ui-react';
import BannerForm from './BannerForm';
import TimesForm from './TimesForm';
import NamesForm from './NamesForm';
import TypeDetailsForm from './TypeDetailsForm';
import AddressForm from './AddressForm';
import ParkingForm from './ParkingForm';
import UniformForm from './UniformForm';

const INITIAL_EVENT = {
  eventMediaUrl: 'placeholder',
  adminMediaUrl:
    'https://res.cloudinary.com/brand-socialite/image/upload/v1596733183/michel-stockman-yh5hjDZW_no-unsplash_s7g1fo.jpg',
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
  parkingzip: '',
  parkingInstructions: '',
  uniforms: '',
  uniformsInstructions: ''
};

const REQUIRED = [
  'eventName',
  'hostName',
  'eventType',
  'estAttendance',
  'address1',
  'address2',
  'city',
  'state',
  'zip',
  'parking',
  'parkingInstructions',
  'uniforms',
  'uniformsInstructions',
  'eventDescription',
  'eventMediaUrl',
  'adminMediaUrl',
  'date',
  'setupStart',
  'setupEnd',
  'eventStart',
  'eventEnd',
  'breakdownStart',
  'breakdownEnd'
];

function CreateHeader() {
  const [event, setEvent] = React.useState(INITIAL_EVENT);
  const [times, setTimes] = React.useState(INITIAL_EVENT);
  const [currentDate, setNewDate] = React.useState(null);
  const [mediaPreview, setMediaPreview] = React.useState(
    '/static/no-image-1.jpg'
  );
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [error, setError] = React.useState(null);
  const router = useRouter();

  // enables submit button if all required fields are filled
  React.useEffect(() => {
    const isEvent = Object.entries(event).every((el) =>
      REQUIRED.includes(el[0]) ? Boolean(el[1]) : true
    );

    isEvent ? setDisabled(false) : setDisabled(true);
  }, [event]);

  // general onChange handler used by all components
  function handleChange(change) {
    const { name, value, files } = change.target;
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

  // called by ParkingForm when radio state is changed
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

  // API call to Cloudinary if image is added
  async function handleImageUpload() {
    if (event.eventMediaUrl != 'placeholder') {
      const data = new FormData();
      data.append('file', event.eventMediaUrl);
      data.append('upload_preset', 'imagefilter');
      data.append('cloud_name', 'brand-socialite');
      const response = await axios.post(process.env.CLOUDINARY_URL, data);
      setEvent((prevState) => ({
        ...prevState,
        eventMediaUrl: response.data.url
      }));
    } else {
      setEvent((prevState) => ({
        ...prevState,
        eventMediaUrl:
          'https://res.cloudinary.com/brand-socialite/image/upload/v1596734136/LVMH-logo_iuaqj5.jpg'
      }));
    }
  }

  async function handleSubmit(change) {
    try {
      change.preventDefault();
      setLoading(true);
      await handleImageUpload();
      const url = `${baseUrl}/api/event`;
      const payload = { ...event };
      const response = await axios.post(url, payload);
      router.push(`/event?_id=${response.data._id}`);
      // setEvent(INITIAL_EVENT);
    } catch (error) {
      catchErrors(error, setError);
      console.error('Submit event error', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form loading={loading} onSubmit={handleSubmit} error={Boolean(error)}>
      <Message error content={error} />
      <Segment style={{ marginBottom: '3em' }} raised>
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
            <UniformForm props={{ handleChange, event }} />
          </Grid.Column>
        </Grid>
      </Segment>
      <Message error content={error} />
      <Form.Field type='submit'>
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign='right' width={8}>
              <Button fluid>Cancel</Button>
            </Grid.Column>
            <Grid.Column textAlign='right' width={8}>
              <Button fluid primary disabled={disabled}>
                Submit
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form.Field>
    </Form>
  );
}

export default CreateHeader;
