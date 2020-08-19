import { Modal, Icon, Button } from 'semantic-ui-react';

function HeaderModal({ profile, login }) {
  const INITIAL_PROFILE = {
    brandMediaUrl: '',
    brandAddress1: '',
    brandAddress2: '',
    brandCity: '',
    brandState: '',
    brandZip: '',
    brandPhoneNumber: '',
    brandWebsite: '',
    brandLinkeIn: ''
  };

  const [profileState, setProfileState] = React.useState(INITIAL_PROFILE);
  return (
    <Modal
      trigger={
        <Button color='blue' size='tiny' circular icon>
          <Icon name='write' />
        </Button>
      }></Modal>
  );
}

export default HeaderModal;
