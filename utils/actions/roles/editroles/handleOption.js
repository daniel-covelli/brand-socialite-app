var moment = require('moment');

// updates roleState and sets disabled state to false if a change
// is made from the original state
export const handleOption = (e, result, setRoleState, setDisabled, role) => {
  const { name, value } = result;
  if (name === 'shiftEnd' || name === 'shiftStart') {
    const datetime = moment(value, 'HH:mm').toDate();
    setRoleState((prevState) => ({
      ...prevState,
      [name]: datetime
    }));
    const isUpdate = moment(role[name]).format('HH:mm') === value;
    isUpdate ? setDisabled(true) : setDisabled(false);
  } else {
    setRoleState((prevState) => ({
      ...prevState,
      [name]: value
    }));
    const isUpdate = role[name] === value;
    isUpdate ? setDisabled(true) : setDisabled(false);
  }
};
