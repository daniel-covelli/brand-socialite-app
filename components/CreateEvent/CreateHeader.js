import SemanticDatepicker from 'react-semantic-ui-datepickers';
import React from 'react';
import {
  Form,
  Segment,
  Image,
  Button,
  Icon,
  Divider,
  Select,
  Input,
  Grid,
  Responsive
} from 'semantic-ui-react';

const INITIAL_EVENT = {
  eventMediaUrl: '',
  eventName: '',
  hostName: '',
  eventType: '',
  estAttendance: '',
  date: '',
  setupStart: '',
  setupEnd: ''
};

function CreateHeader() {
  const [event, setEvent] = React.useState(INITIAL_EVENT);
  const [currentDate, setNewDate] = React.useState(null);
  const [mediaPreview, setMediaPreview] = React.useState(
    '/static/no-image-1.jpg'
  );

  function handleChange(change) {
    const { name, value, files } = change.target;
    if (name === 'eventMediaUrl') {
      setEvent((prevState) => ({ ...prevState, eventMediaUrl: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
      console.log(event);
    } else {
      setEvent((prevState) => ({ ...prevState, [name]: value }));
      console.log(event);
    }
  }

  function handleSubmit(change) {
    change.preventDefault();
    console.log(event);
    setEvent(INITIAL_EVENT);
  }

  const dateChange = (change, data) => {
    setNewDate(data.value);
    setEvent((prevState) => ({ ...prevState, data: currentDate }));
    console.log(event);
  };

  const options = [
    { key: '1', text: 'Cocktail Party', value: 'Cocktail Party' },
    { key: '2', text: 'Dinner', value: 'Dinner' },
    { key: '3', text: 'Movie Premier', value: 'Movie Premier' },
    { key: '4', text: 'Music Release Event', value: 'Outdoor Event' },
    { key: '5', text: 'Outdoor Event', value: 'Outdoor Event' },
    { key: '6', text: 'Trade Event', value: 'Outdoor Event' },
    { key: '7', text: 'Other', value: 'Other' }
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <Segment raised>
        <Grid stackable columns={2}>
          <Grid.Column width={4}>
            <Form.Field>
              <label>Event Banner</label>
              <Responsive minWidth={768}>
                <Image fluid id='placeholder' src={mediaPreview} bordered />
              </Responsive>
              <Button
                as='label'
                htmlFor='file'
                type='button'
                style={{ marginTop: '1em' }}>
                <Icon name='image' />
                Upload Banner
              </Button>
              <input
                name='eventMediaUrl'
                accept='image/*'
                type='file'
                id='file'
                hidden
                onChange={handleChange}
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Group widths='equal'>
              <Form.Input
                name='eventName'
                value={event.eventName}
                label='Event Name'
                placeholder='Ex. Album Release Party'
                onChange={handleChange}
              />
              <Form.Input
                name='hostName'
                value={event.hostName}
                label='Host'
                placeholder='Ex. Vogue'
                onChange={handleChange}
              />
            </Form.Group>
            <Divider />
            <Form.Group widths='equal'>
              <SemanticDatepicker
                name='date'
                label='Date'
                showToday={false}
                format='MMMM DD, YYYY'
                onChange={dateChange}
              />
            </Form.Group>
            <Form.Group widths='equal'></Form.Group>

            <Divider />
            <Form.Group widths='equal'>
              <Form.Input
                control={Select}
                name='eventType'
                value={event.eventType}
                label='Event Type'
                options={options}
                placeholder='Event Type'
                onChange={handleChange}
              />
              <Form.Input
                name='estAttendance'
                value={event.estAttendance}
                label='Estimated Attendance'
                placeholder='500'
                onChange={handleChange}
              />
            </Form.Group>
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
