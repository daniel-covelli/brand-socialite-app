import { militaryToDateTime, dateToTime } from '../../../utils/timeUtils';

const handleTime = (e, result, setEvent) => {
  const { name, value } = result;
  const datetime = militaryToDateTime(value);
  setEvent((prevState) => ({ ...prevState, [name]: datetime }));
};

export default handleTime;
