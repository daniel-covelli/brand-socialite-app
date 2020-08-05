import BannerForm from './BannerForm';
const moment = require('moment');

import React from 'react';
import { Form, Segment, Button, Grid } from 'semantic-ui-react';
import TimesForm from './TimesForm';
import NamesForm from './NamesForm';
import TypeDetailsForm from './TypeDetailsForm';

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
  breakdownEnd: ''
};

function CreateHeader() {
  const [event, setEvent] = React.useState(INITIAL_EVENT);
  const [times, setTimes] = React.useState(INITIAL_EVENT);
  const [currentDate, setNewDate] = React.useState(null);
  const [mediaPreview, setMediaPreview] = React.useState(
    '/static/no-image-1.jpg'
  );

  function handleChange(change) {
    const { name, value, files } = change.target;
    if (name === 'eventMediaUrl') {
      setEvent((prevState) => ({ ...prevState, eventMediaUrl: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setEvent((prevState) => ({ ...prevState, [name]: value }));
    }
  }

  function handleTime(change) {
    const { name, value } = change.target;
    setTimes((prevState) => ({ ...prevState, [name]: value }));
    var ISOtime = moment(value, 'HH:mm').toDate();
    setEvent((prevState) => ({ ...prevState, [name]: ISOtime }));
  }

  function handleSubmit(change) {
    change.preventDefault();
    console.log(event);
    setEvent(INITIAL_EVENT);
  }

  const dateChange = (change, data) => {
    setNewDate(data.value);
    setEvent((prevState) => ({
      ...prevState,
      date: data.value
    }));
  };

  console.log('current', event);
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
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment raised></Segment>
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
