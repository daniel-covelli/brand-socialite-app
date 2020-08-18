const roleCount = (event, roles) => {
  var count = 0;
  roles.forEach((role) => {
    if (event._id === role.event_id) {
      count++;
      console.log(count);
    }
  });
  return count;
};

export default roleCount;
