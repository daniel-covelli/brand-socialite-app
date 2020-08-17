import { Dropdown } from 'semantic-ui-react';
import { handleLogout } from '../../../utils/auth';

function LogoutDropdown({}) {
  return <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>;
}

export default LogoutDropdown;
