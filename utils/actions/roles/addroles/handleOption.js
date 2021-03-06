var moment = require('moment');

// updates roleState and sets disabled state to false if a change
// is made from the original state
export const handleOption = (e, result, setRoleState, setDisabled) => {
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
