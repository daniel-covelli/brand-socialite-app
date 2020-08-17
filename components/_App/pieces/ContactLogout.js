import { Responsive, Menu } from 'semantic-ui-react';
import { handleLogout } from '../../../utils/auth';

function ContactLogout({}) {
  return (
    <Responsive as={Menu.Item} minWidth={1000}>
      <Menu.Item>Contact</Menu.Item>
      <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
    </Responsive>
  );
}

export default ContactLogout;
