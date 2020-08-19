import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import catchErrors from '../../utils/catchErrors';
import { Form, Segment, Button, Grid, Message } from 'semantic-ui-react';

// funtions and objects
import required from '../../utils/actions/CreateEventRoot/required';
import state from '../../utils/actions/CreateEventRoot/state';
import handleTime from '../../utils/actions/CreateEventRoot/handleTime';
import handleRadio from '../../utils/actions/CreateEventRoot/handleRadio';

// react components
import BannerForm from './BannerForm';
import TimesForm from './TimesForm';
import NamesForm from './NamesForm';
import TypeDetailsForm from './TypeDetailsForm';
import AddressForm from './AddressForm';
import ParkingForm from './ParkingForm';
import UniformForm from './UniformForm';

// child of pages/create-event
function CreateRoot({ brand_id }) {
  // get imported initial event stat and required fields state
  const INITIAL_EVENT = state.INITIAL_EVENT;
  const REQUIRED = required.REQUIRED;
  const [event, setEvent] = React.useState(INITIAL_EVENT);
  const [imageSudo, setImageSudo] = useState(false);
  // const [currentDate, setNewDate] = React.useState(null);
  const [mediaPreview, setMediaPreview] = React.useState(
    '/static/no-image-1.jpg'
  );
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [error, setError] = React.useState(null);
  const router = useRouter();

  // enables submit button if all required fields are filled
  useEffect(() => {
    const isEvent = Object.entries(event).every((el) =>
      REQUIRED.includes(el[0]) ? Boolean(el[1]) : true
    );
    isEvent ? setDisabled(false) : setDisabled(true);
  }, [event]);

  // sets brand_id to pasted in brand_id if not set
  useEffect(() => {
    setEvent((prevState) => ({
      ...prevState,
      brand_id
    }));
  }, []);

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
  const dateChange = (change, data) => {
    // setNewDate(data.value);
    setEvent((prevState) => ({
      ...prevState,
      date: data.value
    }));
  };

  // called by Parking Form when option is changed
  function handleOption(e, { value }) {
    setEvent((prevState) => ({ ...prevState, parking: value }));
  }

  //  ----------------------------- handleSubmit Logic ----------------------------- //

  // called by form
  async function handleSubmit(change) {
    try {
      change.preventDefault();
      setLoading(true);
      setError('');
      await handleImageUpload();
      // changes state of imageSudo to true
      setImageSudo(true);
    } catch (error) {
      catchErrors(error, setError);
      console.error('Handle Image Error', error);
    } finally {
      setLoading(false);
    }
  }

  // API call to Cloudinary if image is added

  // if image has not been changed sets to stock image
  // else, uploads image to Cloudinary and gets response
  async function handleImageUpload() {
    if (event.eventMediaUrl === 'placeholder') {
      setEvent((prevState) => ({
        ...prevState,
        eventMediaUrl:
          'https://res.cloudinary.com/brand-socialite/image/upload/v1596734136/LVMH-logo_iuaqj5.jpg'
      }));
    } else {
      const data = new FormData();
      data.append('file', event.eventMediaUrl);
      data.append('upload_preset', 'imagefilter');
      data.append('cloud_name', 'brand-socialite');
      const response = await axios.post(process.env.CLOUDINARY_URL, data);
      // cloudinary response and eventMediaUrl state change
      setEvent((prevState) => ({
        ...prevState,
        eventMediaUrl: response.data.url
      }));
    }
  }

  // catches state change of imageSudo
  // useEffect hook necessary here rerender delay
  useEffect(() => {
    async function waitForImage() {
      // if imageSudo is being changed to true
      if (imageSudo) {
        try {
          const url = `${baseUrl}/api/event`;
          const payload = { ...event };
          const response = await axios.post(url, payload);
          router.push(`/event?_id=${response.data._id}`);
        } catch (error) {
          catchErrors(error, setError);
          console.error('Post request to events error', error);
        } finally {
          setLoading(false);
        }
        // else, no behavior
      } else {
        return;
      }
    }
    waitForImage();
  }, [imageSudo]);

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
            <TimesForm
              props={{ dateChange }}
              event={event}
              handleTime={(e, result) => handleTime(e, result, setEvent)}
            />
            <TypeDetailsForm props={{ handleChange, event }} />
            <AddressForm props={{ handleChange, event }} />
            <ParkingForm
              props={{
                handleOption,
                handleChange,
                handleRadio,
                event,
                setEvent
              }}
            />
            <UniformForm props={{ handleChange, event }} />
          </Grid.Column>
        </Grid>
      </Segment>
      <Message error content={error} />
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign='right' width={8}>
            <Button fluid onClick={() => router.push('/events-list')}>
              Cancel
            </Button>
          </Grid.Column>
          <Grid.Column textAlign='right' width={8}>
            <Button fluid primary disabled={disabled} type='submit'>
              Submit
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
}

export default CreateRoot;
