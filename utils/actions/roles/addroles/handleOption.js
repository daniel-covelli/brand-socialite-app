var moment = require('moment');

export const handleOption = (e, result, setRoleState) => {
  const { name, value } = result;
  if (name === 'shiftEnd' || name === 'shiftStart') {
    const datetime = moment(value, 'HH:mm').toISOString();
    setRoleState((prevState) => ({
      ...prevState,
      [name]: datetime
    }));
  } else {
    setRoleState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
};
