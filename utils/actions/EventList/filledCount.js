const filledCount = (event, roles) => {
  var count = 0;
  roles.forEach((role) => {
    if (event._id === role.event_id) {
      if (role.status) {
        count++;
      }
    }
  });
  if (count === 0) {
    return (
      <>
        <div style={{ color: '#fbbd08' }}>( {count} roles filled )</div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ color: 'green' }}>
          <Icon name='check' />
          {count} roles filled{' '}
        </div>
      </>
    );
  }
};

export default filledCount;
