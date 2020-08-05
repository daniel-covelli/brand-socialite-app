import { Grid, Responsive, Form, Button, Icon, Image } from 'semantic-ui-react';

function BannerForm({ props }) {
  console.log(props);
  return (
    <Form.Field>
      <label>Event Banner</label>
      <Responsive minWidth={768}>
        <Image fluid id='placeholder' src={props.mediaPreview} bordered />
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
        onChange={props.handleChange}
      />
    </Form.Field>
  );
}

export default BannerForm;
