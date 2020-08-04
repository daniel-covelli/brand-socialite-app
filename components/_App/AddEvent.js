import React from 'react';
import Link from 'next/Link';

import { Button, Icon } from 'semantic-ui-react';

function AddEvent() {
  return (
    <Link href='/create-event'>
      <Button color='blue' floated='right'>
        <Icon name='plus' /> Add Event
      </Button>
    </Link>
  );
}

export default AddEvent;
