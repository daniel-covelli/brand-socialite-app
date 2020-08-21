import React, { useEffect } from 'react';
import {
  Modal,
  Icon,
  Button,
  Form,
  Image,
  Grid,
  Header,
  Segment,
  Divider
} from 'semantic-ui-react';

// objects and functions
import options from '../../../utils/options';
import {
  mediaStyles,
  Media,
  MediaContextProvider
} from '../../../utils/responsive';

// Child Header
import RoleHeader from '../../BrandEventPage/Roles/pieces/RoleHeader';

function HeaderModal({ profile, login }) {
  const INITIAL_PROFILE = {
    brandMediaUrl: profile.brandMediaUrl ? profile.brandMediaUrl : '',
    brandAddress1: profile.brandAddress1 ? profile.brandAddress1 : '',
    brandAddress2: profile.brandAddress2 ? profile.brandAddress2 : '',
    brandCity: profile.brandCity ? profile.brandCity : '',
    brandState: profile.brandState ? profile.brandState : '',
    brandZip: profile.brandZip ? profile.brandZip : '',
    brandPhoneNumber: profile.brandPhoneNumber ? profile.brandPhoneNumber : '',
    brandWebsite: profile.brandWebsite ? profile.brandWebsite : '',
    brandLinkeIn: profile.brandLinkedIn ? profile.brandLinkedIn : ''
  };

  const INITIAL_LOGIN = {
    region: login.region,
    companyName: login.companyName,
    email: login.email
  };

  const [profileState, setProfileState] = React.useState(INITIAL_PROFILE);
  const [loginState, setLoginState] = React.useState(INITIAL_LOGIN);
  const [modal, setModal] = React.useState(false);
  const [profileIsChanged, setProfileIsChanged] = React.useState(false);
  const [profileFilled, setProfileFilled] = React.useState(false);
  const [loginIsChanged, setLoginIsChanged] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [modalDiscard, setModalDiscard] = React.useState(false);
  const [mediaPreview, setMediaPreview] = React.useState(
    '../static/no-image-1.jpg'
  );

  function openModal() {
    setModal(true);
    setProfileIsChanged(false);
    setLoginIsChanged(false);
    setError(null);
    // sets view to state of props
    setProfileState(INITIAL_PROFILE);
    setLoginState(INITIAL_LOGIN);
    setMediaPreview(
      profile.brandMediaUrl ? profile.brandMediaUrl : '../static/no-image-1.jpg'
    );
  }

  function onDiscard() {
    setModalDiscard(false);
    setModal(false);
  }

  // ---------------------------- Handle Login Changes ---------------------------- //

  function handleChangeLogin(change) {
    const { name, value } = change.target;
    setLoginState((prevState) => ({ ...prevState, [name]: value }));
    isLoginChanged(name, value);
  }

  function handleOption(e, result) {
    const { name, value } = result;
    setLoginState((prevState) => ({
      ...prevState,
      [name]: value
    }));
    isLoginChanged(name, value);
  }

  function isLoginChanged(name, value) {
    const isUpdate = login[name] === value;
    isUpdate ? setLoginIsChanged(true) : setLoginIsChanged(false);
  }

  // ---------------------------- Handle Profile Changes ---------------------------- //

  function handleChangeProfile(change) {
    const { name, value, files } = change.target;
    if (name === 'brandMediaUrl') {
      setProfileState((prevState) => ({
        ...prevState,
        brandMediaUrl: files[0]
      }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setProfileState((prevState) => ({ ...prevState, [name]: value }));
    }
    isProfileChanged(name, value);
  }
  useEffect(() => {
    Object.entries(profileState).forEach((entry) => {
      const [key, value] = entry;
      if (!Boolean(value)) {
        console.log('PROFILE NOT FILLED');
        return setProfileFilled(false);
      } else {
        console.log('PROFILE NOT FILLED');
        return setProfileFilled(true);
      }
    });
  }, [profileState]);

  function isProfileChanged(name, value) {
    const isUpdate = profile[name] !== value;

    isUpdate && profileFilled
      ? setProfileIsChanged(true)
      : setProfileIsChanged(false);
  }

  // ---------------------------- Handle Submit Changes ---------------------------- //

  function handleSubmit() {
    if (profileIsChanged && loginIsChanged) {
      console.log('BOTH HAVE BEEN CHANGED');
    } else if (profileIsChanged) {
      console.log('ONLY PROFILE HAS BEEN CHANGED');
    } else if (loginIsChanged) {
      console.log('ONLY LOGIN HAS BEEN CHANGED');
    } else {
      console.log('NOTHING HAS BEEN CHANGED');
      return;
    }
    console.log('submit');
  }

  console.log('PROFILE STATE', profileState);
  //   console.log('LOGIN STATE', login);
  console.log('PROFILE', profile);

  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Modal
          open={modal}
          trigger={
            <Button
              color='blue'
              size='tiny'
              circular
              icon
              onClick={() => openModal()}>
              <Icon name='write' />
            </Button>
          }>
          <Modal.Content>
            <Modal.Header>
              <Grid>
                <Grid.Column width={8} textAlign='left'>
                  <Media greaterThanOrEqual='small'>
                    <Header>Company Profile Information</Header>
                  </Media>
                  <Media lessThan='small'>
                    <Header>Profile</Header>
                  </Media>
                </Grid.Column>
                <Grid.Column width={8} textAlign='right'>
                  <Modal
                    size='mini'
                    open={modalDiscard}
                    trigger={
                      <Button
                        circular
                        icon='close'
                        onClick={() =>
                          !profileIsChanged && !loginIsChanged
                            ? setModal(false)
                            : setModalDiscard(true)
                        }
                      />
                    }>
                    <Modal.Header>Discard Changes</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>
                        <p>
                          Are you sure you want to discard the changes you have
                          made?
                        </p>
                      </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                        color='red'
                        content='Discard'
                        onClick={() => onDiscard()}></Button>
                      <Button onClick={() => setModalDiscard(false)}>
                        Back
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </Grid.Column>
              </Grid>
            </Modal.Header>
            <Modal.Description>
              <Form>
                <Grid stackable columns={2}>
                  <Grid.Column width={4}>
                    <Form.Field>
                      <label>Logo</label>
                      <Media greaterThanOrEqual='tablet'>
                        <Image
                          fluid
                          id='placeholder'
                          src={mediaPreview}
                          bordered
                        />
                      </Media>
                      <Button
                        as='label'
                        htmlFor='file'
                        type='button'
                        style={{ marginTop: '1em' }}>
                        <Icon name='image' />
                        Upload Logo
                      </Button>
                      <input
                        name='brandMediaUrl'
                        accept='image/*'
                        type='file'
                        id='file'
                        hidden
                        onChange={handleChangeProfile}
                      />
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Form.Group widths='equal'>
                      <Form.Input
                        label='Company Name'
                        name='companyName'
                        value={loginState.companyName}
                        onChange={handleChangeLogin}
                      />
                    </Form.Group>
                    <Segment secondary>
                      <Form.Input
                        label='Company Address'
                        name='brandAddress1'
                        placeholder='Ex. 693 Woodland Drive'
                        value={profileState.brandAddress1}
                        onChange={handleChangeProfile}
                      />
                      <Form.Input
                        label='Address 2'
                        name='brandAddress2'
                        placeholder='Ex. Appartment, Floor, Building'
                        value={profileState.brandAddress2}
                        onChange={handleChangeProfile}
                      />
                      <Form.Group widths='equal'>
                        <Form.Input
                          label='City'
                          name='brandCity'
                          placeholder='Ex. Los Angeles'
                          value={profileState.brandCity}
                          onChange={handleChangeProfile}
                        />
                        <Form.Input
                          label='State'
                          name='brandState'
                          placeholder='Ex. CA'
                          value={profileState.brandState}
                          onChange={handleChangeProfile}
                        />
                        <Form.Input
                          label='Zip'
                          name='brandZip'
                          placeholder='Ex. 99999'
                          value={profileState.brandZip}
                          onChange={handleChangeProfile}
                        />
                      </Form.Group>
                    </Segment>
                    <Form.Select
                      name='region'
                      label='Region'
                      value={loginState.region}
                      options={options.regions}
                      onChange={handleOption}
                    />
                    <Divider hidden />
                    <Segment secondary>
                      <Form.Group widths='equal'>
                        <Form.Input
                          label='Phone'
                          iconPosition='left'
                          placeholder='xxx-xxx-xxxx'
                          name='brandPhoneNumber'
                          value={profileState.brandPhoneNumber}
                          onChange={handleChangeProfile}>
                          <Icon name='phone' /> <input />
                        </Form.Input>

                        <Form.Input
                          label='Email'
                          iconPosition='left'
                          placeholder='xxxxxxxxxxx@xxxxx.xxx'
                          name='email'
                          value={login.email}
                          onChange={handleChangeLogin}>
                          <Icon name='at' />
                          <input />
                        </Form.Input>
                      </Form.Group>
                    </Segment>
                    <Divider hidden />
                    <Form.Group widths='equal'>
                      <Form.Input
                        label='Website'
                        iconPosition='left'
                        placeholder='website url'
                        name='brandWebsite'
                        value={profileState.brandWebsite}
                        onChange={handleChangeProfile}>
                        <Icon name='globe' /> <input />
                      </Form.Input>
                      <Form.Input
                        label='LinkedIn'
                        iconPosition='left'
                        placeholder='linkedin url'
                        name='brandLinkeIn'
                        value={profileState.brandLinkeIn}
                        onChange={handleChangeProfile}>
                        <Icon name='linkedin' /> <input />
                      </Form.Input>
                    </Form.Group>
                  </Grid.Column>
                  <Grid.Column floated='right' width={16}>
                    <Form.Button
                      disabled={loginIsChanged && profileIsChanged}
                      onClick={handleSubmit}
                      floated='right'
                      fluid
                      primary>
                      Save
                    </Form.Button>
                  </Grid.Column>
                </Grid>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </MediaContextProvider>
    </>
  );
}

export default HeaderModal;
